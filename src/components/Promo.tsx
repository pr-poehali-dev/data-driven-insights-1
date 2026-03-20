import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract spiral circles"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <h3 className="absolute top-6 sm:top-10 md:top-12 right-4 sm:right-6 text-white uppercase z-10 text-xs sm:text-sm md:text-base lg:text-lg">
        Наш подход
      </h3>

      <p className="absolute bottom-6 sm:bottom-10 md:bottom-12 left-4 right-4 sm:left-auto sm:right-6 text-white text-base sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl max-w-full sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl z-10">
        Каждый дом — это точный инженерный расчёт, качественные материалы и команда, которая строит для себя так же, как для вас.
      </p>
    </div>
  );
}