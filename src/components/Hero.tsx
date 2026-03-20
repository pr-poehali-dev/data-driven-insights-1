import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/500d0c8b-daf6-4771-ac77-7b006e16532d/files/ebadc8a4-d171-4a91-a6f2-a0d1be64a671.jpg"
          alt="Модульный дом"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6">
        <p className="text-xs sm:text-sm md:text-base uppercase tracking-widest mb-3 sm:mb-5 opacity-80">Модульные и каркасные дома</p>
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-5 sm:mb-7 leading-none">
          ПОСТРОИМ<br />ВАШ ДОМ
        </h1>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto opacity-90 mb-7 sm:mb-10 px-2 leading-relaxed">
          Быстро, надёжно и по фиксированной цене. От проекта до ключей — под ключ.
        </p>
        <button className="border border-white text-white px-7 sm:px-10 py-3 sm:py-4 uppercase text-xs sm:text-sm md:text-base tracking-wide hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
          Рассчитать стоимость
        </button>
      </div>
    </div>
  );
}