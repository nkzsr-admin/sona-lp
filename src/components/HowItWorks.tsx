"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, GearSix, Rocket } from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const steps = [
  {
    num: "01",
    title: "Consultation",
    icon: Phone,
    desc: "LINEからお気軽にご連絡ください。現在の業務課題やご要望を詳しくヒアリングし、最適なプランをご提案します。",
  },
  {
    num: "02",
    title: "Setup",
    icon: GearSix,
    desc: "御社の業務に合わせた専用AI環境を構築。おまかせプランなら3タスク無料でお試しいただけます。",
  },
  {
    num: "03",
    title: "Start Work",
    icon: Rocket,
    desc: "専用LINEチャットを開設し、最短即日で業務をスタート。使うほどに業務に精通し、品質が向上します。",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-light-gray py-20 md:py-32 px-6 md:px-[4vw]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease }}
          className="font-syne font-[800] text-3xl md:text-7xl mb-10 md:mb-16"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-px">
            <div
              className={`grow-line w-full ${inView ? "visible" : ""}`}
              style={{ transitionDelay: "0.5s" }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1 + i * 0.1, ease }}
              className="relative bg-white rounded-2xl p-6 md:p-8 transition-transform duration-500"
              data-hover
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-syne font-[800] text-4xl text-navy/10">
                  {step.num}
                </span>
                <step.icon size={32} weight="light" className="text-teal" />
              </div>
              <p className="font-syne font-[600] text-xl mb-4">{step.title}</p>
              <p className="font-noto font-light text-sm leading-relaxed text-navy/70">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
