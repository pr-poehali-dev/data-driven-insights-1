interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 px-4 py-3 sm:p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center gap-3">
        <div className="text-white text-xs sm:text-sm uppercase tracking-wide font-bold whitespace-nowrap">СтроимВсем</div>
        <nav className="flex gap-4 sm:gap-8">
          <a
            href="#about"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-xs sm:text-sm whitespace-nowrap"
          >
            Проекты
          </a>
          <a
            href="#contact"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-xs sm:text-sm whitespace-nowrap"
          >
            <span className="hidden sm:inline">Рассчитать стоимость</span>
            <span className="sm:hidden">Заявка</span>
          </a>
        </nav>
      </div>
    </header>
  );
}