"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const cases = [
  {
    num: "01",
    title: "IT &\nConsulting",
    ja: "IT・コンサル",
    desc: "提案書・見積書の作成、技術リサーチ、競合分析、議事録作成、ブログ執筆。",
  },
  {
    num: "02",
    title: "Professional\nServices",
    ja: "士業（税理士・社労士）",
    desc: "申請書類のドラフト作成、法改正リサーチ、顧問先レポート、助成金情報収集。",
  },
  {
    num: "03",
    title: "Real\nEstate",
    ja: "不動産・建設",
    desc: "物件紹介文の作成、オーナー向けレポート、市場分析、近隣挨拶状・完工報告書。",
  },
  {
    num: "04",
    title: "Staffing",
    ja: "人材・採用",
    desc: "求人原稿の作成、スカウトメール文面、候補者レポート、営業資料・提案書作成。",
  },
  {
    num: "05",
    title: "Mgmt\nConsulting",
    ja: "経営コンサル",
    desc: "市場調査・競合分析レポート、事業計画書ドラフト、KPIダッシュボード、プレゼン資料。",
  },
  {
    num: "06",
    title: "Back\nOffice",
    ja: "共通バックオフィス",
    desc: "メール文面・書類作成、データ入力・集計、SNS投稿・ブログ記事、翻訳（日英）。",
  },
];

export default function UseCases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-navy text-offwhite py-20 md:py-32 px-6 md:px-[4vw]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease }}
          className="font-syne font-[800] text-4xl md:text-7xl leading-[0.9] mb-2"
        >
          Industries
          <br />
          We Serve.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.4 } : {}}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="text-sm mb-10 md:mb-16 hidden md:block"
        >
          Hover to view details
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 + i * 0.08, ease }}
              className="group relative border border-offwhite/10 rounded-lg p-6 md:p-8 min-h-0 md:min-h-[280px] overflow-hidden"
              data-hover
            >
              {/* Desktop: default view */}
              <div className="relative z-10 hidden md:block">
                <p className="font-syne font-[800] text-3xl text-offwhite/20 mb-4">
                  {c.num}
                </p>
                <p className="font-syne font-[600] text-xl whitespace-pre-line">
                  {c.title}
                </p>
              </div>

              {/* Mobile: always show details */}
              <div className="md:hidden">
                <p className="font-syne font-[600] text-base text-teal mb-1">{c.ja}</p>
                <p className="font-noto text-sm leading-relaxed opacity-80">
                  {c.desc}
                </p>
              </div>

              {/* Hover overlay — desktop only */}
              <div className="hidden md:flex absolute inset-0 bg-teal translate-y-full group-hover:translate-y-0 transition-transform duration-600 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] flex-col justify-center p-8 rounded-lg">
                <p className="font-syne font-[600] text-lg mb-2">{c.ja}</p>
                <p className="font-noto text-sm leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
