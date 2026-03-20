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
        <p className="text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 opacity-80">Модульные и каркасные дома</p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
          ПОСТРОИМ<br />ВАШ ДОМ
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto opacity-90 mb-6 sm:mb-10 px-2">
          Быстро, надёжно и по фиксированной цене. От проекта до ключей — под ключ.
        </p>
        <button className="border border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 uppercase text-xs sm:text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
          Рассчитать стоимость
        </button>
      </div>
    </div>
  );
}