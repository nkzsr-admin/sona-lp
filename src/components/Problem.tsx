"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  return <span ref={ref}>{count}</span>;
}

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" ref={ref} className="bg-offwhite py-20 md:py-32 px-6 md:px-[4vw]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: text */}
          <div>
            <motion.h2
              initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
              animate={inView ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" } : {}}
              transition={{ duration: 1.2, ease }}
              className="font-syne font-[800] text-5xl md:text-9xl leading-[0.9] mb-6 md:mb-8"
            >
              The
              <br />
              Crisis
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="font-noto text-lg mb-4"
            >
              経理・人事・Web・各業務で毎日忙しいお客様へ。1人雇うほどでもない...だけど人手が欲しい。
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 0.7, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease }}
              className="font-noto font-light text-base"
            >
              採用・教育にかける時間もコストもない。請求書や資料作成に追われて、本来の仕事に集中できない。外注したいが、品質やセキュリティが心配。このようなお悩みはsonaで解決できます。
            </motion.p>
          </div>

          {/* Right: stat */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="text-center md:text-right"
          >
            <p className="font-syne font-[400] text-sm uppercase tracking-widest mb-4 opacity-60">
              Shortage Rate
            </p>
            <p className="font-syne font-[800] text-[5rem] md:text-[12rem] leading-none">
              <CountUp target={68} />%
            </p>
            <p className="text-sm opacity-60 mt-2">
              Of Japanese SMBs lack staff
            </p>
          </motion.div>
        </div>

        {/* Grow line */}
        <div className={`grow-line mt-16 ${inView ? "visible" : ""}`} />
      </div>
    </section>
  );
}
