"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calculator,
  ClipboardText,
  Megaphone,
  MagnifyingGlass,
} from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const cards = [
  {
    num: "01",
    title: "Accounting",
    ja: "経理・財務サポート",
    icon: Calculator,
    desc: "請求書発行、経費精算、記帳代行など、正確性が求められる経理業務を自動化・代行。",
  },
  {
    num: "02",
    title: "Admin",
    ja: "一般事務・アシスタント",
    icon: ClipboardText,
    desc: "データ入力、スケジュール調整、問い合わせ対応など、煩雑な事務作業を巻き取ります。",
  },
  {
    num: "03",
    title: "PR & Mktg",
    ja: "広報・マーケティング",
    icon: Megaphone,
    desc: "SNS運用、メルマガ作成、プレスリリース配信など、発信活動を継続的にサポート。",
  },
  {
    num: "04",
    title: "Research",
    ja: "リサーチ・データ収集",
    icon: MagnifyingGlass,
    desc: "競合調査、リスト作成、市場データ収集など、AIを活用した高速なリサーチ業務。",
  },
];

export default function Solution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solution" ref={ref} className="bg-navy text-offwhite py-20 md:py-32 px-6 md:px-[4vw]">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease }}
          className="font-playfair italic text-teal text-xl mb-4"
        >
          The Solution
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="font-syne font-[800] text-4xl md:text-7xl leading-[0.9] mb-6"
        >
          Meet Your
          <br />
          Digital Staff.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 0.8, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="font-noto font-light text-base md:text-lg max-w-2xl mb-10 md:mb-16"
        >
          必要な時に、必要なスキルを。採用活動も、社会保険料も、PCの支給も必要ありません。即戦力のデジタルアシスタントが、あなたのチームに参加します。
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 + i * 0.1, ease }}
              className="group relative border border-offwhite/10 rounded-lg p-6 md:p-8 min-h-[200px] md:min-h-[280px] overflow-hidden"
              data-hover
            >
              {/* Default content — hidden on mobile */}
              <div className="relative z-10 hidden md:block">
                <p className="font-syne font-[800] text-3xl text-offwhite/20 mb-4">
                  {card.num}
                </p>
                <p className="font-syne font-[600] text-lg mb-2">
                  {card.title}
                </p>
                <p className="font-noto text-sm opacity-60">{card.ja}</p>
              </div>

              {/* Mobile: always show details */}
              <div className="md:hidden flex items-start gap-4">
                <card.icon size={28} weight="light" className="text-teal shrink-0 mt-1" />
                <div>
                  <p className="font-syne font-[600] text-base mb-1">{card.ja}</p>
                  <p className="font-noto text-sm leading-relaxed opacity-80">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Hover overlay — desktop only */}
              <div className="hidden md:flex absolute inset-0 bg-teal translate-y-full group-hover:translate-y-0 transition-transform duration-600 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] flex-col items-center justify-center p-6 text-center rounded-lg">
                <card.icon size={40} weight="light" className="mb-4" />
                <p className="font-syne font-[600] text-lg mb-2">
                  {card.ja}
                </p>
                <p className="font-noto text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
