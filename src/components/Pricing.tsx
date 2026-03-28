"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const plans = [
  {
    name: "スポットプラン",
    nameEn: "Spot Plan",
    price: "¥3,000",
    priceUnit: "〜/タスク（税込）",
    desc: "まず1つ試したい方に。契約期間の縛りなし。",
    features: [
      "月5タスクまで",
      "チャット相談",
      "納品目安：24時間以内",
      "契約期間の縛りなし",
    ],
    note: "",
    popular: false,
    border: "border-navy/10",
  },
  {
    name: "おまかせライト",
    nameEn: "Omakase Light",
    price: "¥55,000",
    priceUnit: "/月（税込）",
    desc: "手軽に始めたい方に。専属スタッフが対応。",
    features: [
      "月15タスクまで",
      "専属スタッフ対応",
      "チャット相談",
      "月次活用レポート",
      "契約期間：1ヶ月〜",
    ],
    note: "",
    popular: false,
    border: "border-navy/10",
  },
  {
    name: "おまかせスタンダード",
    nameEn: "Omakase Standard",
    price: "¥110,000",
    priceUnit: "/月（税込）",
    desc: "丸投げしたい方に。定期ヒアリング付き。",
    features: [
      "月30タスクまで",
      "専属スタッフ対応",
      "チャット相談",
      "月次活用レポート",
      "定期ヒアリング月1回",
      "契約期間：1ヶ月〜",
    ],
    note: "",
    popular: true,
    border: "border-teal",
  },
  {
    name: "セルフプラン",
    nameEn: "Self Plan",
    price: "¥55,000",
    priceUnit: "/月（税込）",
    desc: "AI環境を自分で使いたい方に。ハンズオン研修付き。",
    features: [
      "業務に最適化したAI環境を構築",
      "ハンズオン研修",
      "月1回の定期チェックイン",
      "チャット質問対応 無制限",
      "月次活用レポート",
    ],
    note: "+ 初期構築費 ¥220,000",
    popular: false,
    border: "border-navy/10",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="bg-offwhite py-20 md:py-32 px-6 md:px-[4vw]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease }}
          className="font-playfair italic text-teal text-xl mb-4"
        >
          Transparent Investment
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="font-syne font-[800] text-4xl md:text-7xl leading-[0.9] mb-10 md:mb-16"
        >
          Simple
          <br />
          Pricing.
        </motion.h2>

        {/* Campaign Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15, ease }}
          className="border-2 border-teal rounded-2xl p-6 md:p-8 mb-10 md:mb-14 text-center relative"
        >
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-offwhite font-syne font-[600] text-xs px-5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
            Campaign
          </span>
          <p className="font-syne font-[800] text-xl md:text-2xl mb-2">
            導入キャンペーン実施中！
          </p>
          <p className="font-noto text-sm md:text-base mb-3">
            月額<span className="font-syne font-[800] text-teal text-xl md:text-2xl mx-1">¥10,000</span>でおまかせプラン全機能
            <span className="font-noto text-xs text-navy/50 ml-1">（税込¥110,000相当）</span>
          </p>
          <p className="font-noto text-xs text-navy/50 mb-4">
            ※先着5社限定 / 1ヶ月間の導入キャンペーン
          </p>
          <a
            href="#cta"
            className="inline-block font-syne font-[600] text-sm bg-teal text-offwhite rounded-full px-8 py-3 no-underline hover:bg-teal/90 transition-colors duration-300"
            data-hover
          >
            キャンペーンに申し込む
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.nameEn}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + i * 0.1, ease }}
              className={`bg-white rounded-2xl p-6 md:p-8 border-2 ${plan.border} relative hover:shadow-[0_0_30px_rgba(43,138,126,0.1)] md:hover:scale-[1.02] md:hover:-translate-y-1 transition-all duration-500 flex flex-col`}
              data-hover
            >
              {plan.popular && (
                <span className="absolute -top-3 right-6 bg-teal text-offwhite font-syne font-[600] text-xs px-4 py-1 rounded-full uppercase tracking-wider">
                  Popular
                </span>
              )}
              <p className="font-noto font-medium text-sm text-navy/50 mb-1">
                {plan.name}
              </p>
              <p className="font-syne font-[600] text-lg mb-4">{plan.nameEn}</p>
              <div className="mb-4">
                <span className="font-syne font-[800] text-2xl md:text-3xl">{plan.price}</span>
                <span className="font-noto text-xs text-navy/60 ml-1">
                  {plan.priceUnit}
                </span>
              </div>
              <p className="font-noto font-light text-sm mb-6 text-navy/70">
                {plan.desc}
              </p>
              <ul className="space-y-2.5 mb-6 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle
                      size={18}
                      weight="fill"
                      className="text-teal shrink-0 mt-0.5"
                    />
                    <span className="font-noto">{f}</span>
                  </li>
                ))}
              </ul>
              {plan.note && (
                <p className="font-noto text-xs text-navy/50 mb-4">
                  {plan.note}
                </p>
              )}
              <a
                href="#cta"
                className={`block text-center font-syne font-[600] text-sm rounded-full py-3 no-underline transition-colors duration-300 ${
                  plan.popular
                    ? "bg-teal text-offwhite hover:bg-teal/90"
                    : "border-2 border-navy text-navy hover:bg-navy hover:text-offwhite"
                }`}
                data-hover
              >
                プランを選ぶ
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
