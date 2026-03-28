"use client";

import { motion } from "framer-motion";
import NebulaCanvas from "./NebulaCanvas";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Hero() {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <NebulaCanvas />

      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-[8vw]">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="font-playfair italic text-teal text-lg md:text-2xl mb-3 md:mb-4"
        >
          Digital Staffing Agency
        </motion.p>

        <h1 className="font-syne font-[800] uppercase tracking-[-0.07em] text-[10vw] md:text-[9vw] leading-[0.88] mb-4 md:mb-6">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease }}
            className="block text-offwhite"
          >
            HIRE
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease }}
            className="block text-outline-white"
          >
            SMARTER,
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease }}
            className="block text-offwhite"
          >
            NOT HARDER.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease }}
          className="font-noto text-offwhite text-base md:text-lg mb-2"
        >
          採用なしで、人手不足を解決する。AI活用型業務支援サービス。
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 1.6, ease }}
          className="font-noto text-offwhite text-sm"
        >
          中小企業の経営者に選ばれる業務支援。1タスク3,000円〜
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 2, ease }}
        className="fixed bottom-8 right-[4vw] z-10 font-syne font-[800] text-xs text-offwhite uppercase tracking-[0.25em] hidden md:block"
      >
        SCROLL ↓
      </motion.div>
    </section>
  );
}
