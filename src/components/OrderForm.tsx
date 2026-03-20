import { useState } from "react";

const SEND_ORDER_URL = "https://functions.poehali.dev/ee16961d-c4fd-4090-bf4c-3446becaba81";

export default function OrderForm() {
  const [form, setForm] = useState({ name: "", phone: "", area: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(SEND_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", area: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="bg-white px-6 py-20 flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-3 text-center uppercase tracking-tight">
        Рассчитать стоимость
      </h2>
      <p className="text-neutral-500 mb-10 text-center max-w-md">
        Оставьте заявку — свяжемся в течение 30 минут и подберём проект под ваш бюджет
      </p>

      {status === "success" ? (
        <div className="border border-black px-10 py-10 text-center max-w-md w-full">
          <div className="text-4xl mb-4">🏠</div>
          <h3 className="text-xl font-bold mb-2">Заявка отправлена!</h3>
          <p className="text-neutral-600">Мы свяжемся с вами в ближайшее время.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ваше имя *"
            required
            className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Телефон *"
            required
            className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
          />
          <input
            name="area"
            value={form.area}
            onChange={handleChange}
            placeholder="Желаемая площадь, м²"
            className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Комментарий (необязательно)"
            rows={3}
            className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none"
          />
          {status === "error" && (
            <p className="text-red-600 text-sm">Ошибка отправки. Попробуйте ещё раз.</p>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-black text-white px-6 py-3 uppercase text-sm tracking-wide hover:bg-neutral-800 transition-colors disabled:opacity-50 cursor-pointer"
          >
            {status === "loading" ? "Отправляем..." : "Отправить заявку"}
          </button>
        </form>
      )}
    </div>
  );
}
