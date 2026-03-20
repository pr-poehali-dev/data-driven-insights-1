import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта СтроимВсем на почту владельца"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    area = body.get('area', '').strip()
    message = body.get('message', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': '\u0418\u043c\u044f \u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b'})
        }

    smtp_user = 'dimansports@bk.ru'
    smtp_password = os.environ['SMTP_PASSWORD']

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта СтроимВсем — {name}'
    msg['From'] = smtp_user
    msg['To'] = smtp_user

    html = f"""
    <h2>Новая заявка с сайта СтроимВсем</h2>
    <table style="font-size:16px; line-height:1.8">
      <tr><td><b>Имя:</b></td><td>{name}</td></tr>
      <tr><td><b>Телефон:</b></td><td>{phone}</td></tr>
      {'<tr><td><b>Площадь дома:</b></td><td>' + area + ' м²</td></tr>' if area else ''}
      {'<tr><td><b>Комментарий:</b></td><td>' + message + '</td></tr>' if message else ''}
    </table>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, smtp_user, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }