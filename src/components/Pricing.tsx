"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const selfFeatures = [
  "業務プロセスコンサルティング（Zoom 2回）",
  "御社専用 CLAUDE.md 設計・構築",
  "カスタムプロンプトテンプレート 5〜10個",
  "カスタムスラッシュコマンド 5〜8個",
  "操作マニュアル・ハンズオン研修",
  "月次メンテナンス・最適化",
  "LINE無制限サポート（平日9-18時）",
];

const omakaseFeatures = [
  "業務ヒアリング（Zoom 1回）",
  "無料お試し: 3タスク無料で処理",
  "月30タスクまで対応（超過分 ¥3,300/件）",
  "最短12時間・最大24時間で納品",
  "全タスク品質チェック済み",
  "月次パフォーマンスレポート",
  "月1回の定例ミーティング",
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="bg-offwhite py-20 md:py-32 px-6 md:px-[4vw]">
      <div className="max-w-5xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Self Plan */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="bg-white rounded-2xl p-6 md:p-10 border border-navy/10 hover:shadow-[0_0_30px_rgba(43,138,126,0.1)] md:hover:scale-[1.02] md:hover:-translate-y-1 transition-all duration-500"
            data-hover
          >
            <p className="font-noto font-medium text-sm text-navy/50 mb-1">
              セルフプラン
            </p>
            <p className="font-syne font-[600] text-xl mb-6">Self Plan</p>
            <div className="mb-6">
              <span className="font-syne font-[800] text-4xl md:text-5xl">¥55,000</span>
              <span className="font-noto text-sm text-navy/60 ml-2">
                /月（税込）
              </span>
            </div>
            <p className="font-noto font-light text-sm mb-8 text-navy/70">
              プロが構築した専用AI環境を、自分で使いこなす。ITリテラシーの高い経営者・担当者向け。
            </p>
            <ul className="space-y-3 mb-8">
              {selfFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <CheckCircle
                    size={20}
                    weight="fill"
                    className="text-teal shrink-0 mt-0.5"
                  />
                  <span className="font-noto">{f}</span>
                </li>
              ))}
            </ul>
            <p className="font-noto text-xs text-navy/50 mb-6">
              初期構築費: ¥220,000（税込）
            </p>
            <a
              href="#cta"
              className="block text-center font-syne font-[600] text-sm border-2 border-navy rounded-full py-3 no-underline text-navy hover:bg-navy hover:text-offwhite transition-colors duration-300"
              data-hover
            >
              プランを選ぶ
            </a>
          </motion.div>

          {/* Omakase Plan */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="bg-white rounded-2xl p-6 md:p-10 border-2 border-teal relative hover:shadow-[0_0_30px_rgba(43,138,126,0.15)] md:hover:scale-[1.02] md:hover:-translate-y-1 transition-all duration-500"
            data-hover
          >
            <span className="absolute -top-3 right-8 bg-teal text-offwhite font-syne font-[600] text-xs px-4 py-1 rounded-full uppercase tracking-wider">
              Popular
            </span>
            <p className="font-noto font-medium text-sm text-navy/50 mb-1">
              おまかせプラン
            </p>
            <p className="font-syne font-[600] text-xl mb-6">Omakase Plan</p>
            <div className="mb-6">
              <span className="font-syne font-[800] text-4xl md:text-5xl">¥110,000</span>
              <span className="font-noto text-sm text-navy/60 ml-2">
                /月（税込）
              </span>
            </div>
            <p className="font-noto font-light text-sm mb-8 text-navy/70">
              LINEで依頼するだけ。すべてお任せで業務が完了する、完全代行型プラン。
            </p>
            <ul className="space-y-3 mb-8">
              {omakaseFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <CheckCircle
                    size={20}
                    weight="fill"
                    className="text-teal shrink-0 mt-0.5"
                  />
                  <span className="font-noto">{f}</span>
                </li>
              ))}
            </ul>
            <p className="font-noto text-xs text-navy/50 mb-6">
              初期費用: ¥0（無料お試し3件つき）
            </p>
            <a
              href="#cta"
              className="block text-center font-syne font-[600] text-sm bg-teal text-offwhite rounded-full py-3 no-underline hover:bg-teal/90 transition-colors duration-300"
              data-hover
            >
              プランを選ぶ
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
