export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-4 sm:px-6 py-10 sm:py-14 lg:py-0 bg-white">
      <div className="flex-1 h-[240px] sm:h-[350px] md:h-[500px] lg:h-[800px] mb-6 sm:mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/500d0c8b-daf6-4771-ac77-7b006e16532d/files/2a09601e-b5a0-4bfa-8277-4d27b0757f66.jpg"
          alt="Строительство каркасного дома"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-3 sm:mb-4 text-xs sm:text-sm tracking-wide text-neutral-600">Почему выбирают нас</h3>
        <p className="text-xl sm:text-2xl lg:text-4xl mb-6 sm:mb-8 text-neutral-900 leading-tight">
          Модульные и каркасные дома строятся в 3–5 раз быстрее кирпичных. Фиксированная смета, собственное производство — без посредников.
        </p>
        <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="text-xl sm:text-2xl flex-shrink-0">🛡️</span>
            <span className="font-semibold text-sm sm:text-base">Гарантия 36 месяцев</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="text-xl sm:text-2xl flex-shrink-0">⏱️</span>
            <span className="font-semibold text-sm sm:text-base">Работа строго в срок — прописываем в договоре</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="text-xl sm:text-2xl flex-shrink-0">🚚</span>
            <span className="font-semibold text-sm sm:text-base">Бесплатная доставка до вашего участка</span>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-xs sm:text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Смотреть проекты
        </button>
      </div>
    </div>
  );
}