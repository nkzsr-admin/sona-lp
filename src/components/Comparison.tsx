"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const rows = [
  {
    label: "採用費 / 初期費用",
    traditional: "約50万円〜",
    sona: "0円",
  },
  {
    label: "月額人件費 / 委託費",
    traditional: "約25万円+社保等",
    sona: "1タスク3,000円〜",
  },
  {
    label: "教育・オンボーディング",
    traditional: "1〜3ヶ月の社内リソース消費",
    sona: "不要（マニュアル不要）",
  },
  {
    label: "離職リスク",
    traditional: "常にあり（32%が3年以内離職）",
    sona: "なし（採用・教育コスト0円）",
  },
  {
    label: "年間総コスト",
    traditional: "約516万円〜",
    sona: "36,000円〜",
  },
];

export default function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white py-20 md:py-32 px-6 md:px-[4vw]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease }}
          className="font-syne font-[800] text-4xl md:text-7xl mb-2"
        >
          The Math.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 0.6, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="font-syne font-[400] text-xl mb-4"
        >
          Traditional Hiring vs Sona
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 0.7, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="font-noto font-light text-base mb-16"
        >
          採用コスト、社会保険料、PC貸与、退職リスク... 隠れたコストを可視化します。
        </motion.p>

        <div className="space-y-0">
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease }}
            >
              <p className="font-noto text-xs uppercase tracking-wider text-navy/40 mb-3 mt-6">
                {row.label}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="font-noto text-xs text-navy/40 mb-1">
                    従来の採用
                  </p>
                  <p className="font-syne font-[600] text-lg text-red-400/60">
                    {row.traditional}
                  </p>
                </div>
                <div>
                  <p className="font-noto text-xs text-navy/40 mb-1">sona</p>
                  <p className="font-syne font-[800] text-lg text-teal">
                    {row.sona}
                  </p>
                </div>
              </div>
              <div
                className={`grow-line mt-4 ${inView ? "visible" : ""}`}
                style={{ transitionDelay: `${0.5 + i * 0.15}s` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
