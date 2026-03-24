"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

declare global {
  interface Window {
    gtag_report_conversion?: (url: string) => boolean;
    fbq?: (...args: unknown[]) => void;
  }
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      const btn = btnRef.current;
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        setOffset({ x: dx * 0.3, y: dy * 0.3 });
      } else {
        setOffset({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const handleClick = () => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion("https://lin.ee/xlPnjXK");
    }
  };

  return (
    <a
      ref={btnRef}
      href="https://lin.ee/xlPnjXK"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className="inline-flex items-center justify-center gap-3 bg-line-green text-white font-syne font-[800] text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full no-underline hover:shadow-[0_0_40px_rgba(6,199,85,0.4)] transition-shadow duration-300 w-full md:w-auto"
      data-hover
    >
      {/* LINE icon */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .348-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .349-.281.63-.63.63h-2.386c-.345 0-.627-.281-.627-.63V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.63-.631.63-.346 0-.626-.286-.626-.63V8.108c0-.271.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.63-.631.63-.345 0-.627-.286-.627-.63V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.63H4.917c-.345 0-.63-.286-.63-.63V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .349-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
      </svg>
      LINEで無料相談する
    </a>
  );
}

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" ref={ref} className="relative bg-navy text-offwhite py-20 md:py-32 px-6 md:px-[4vw] overflow-hidden">
      {/* Parallax blur circle */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease }}
          className="font-playfair italic text-teal text-xl mb-6"
        >
          Ready to shift?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="font-syne font-[800] text-4xl md:text-7xl leading-[0.9] mb-6 md:mb-8"
        >
          Stop Hiring.
          <br />
          Start Scaling.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 0.8, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="font-noto text-lg mb-12"
        >
          まずはLINEで無料相談。あなたの企業の課題に合わせた活用方法をご提案します。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="mb-6"
        >
          <MagneticButton>LINEで無料相談する</MagneticButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.4 } : {}}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="font-noto text-sm"
        >
          ※ 相談無料・契約縛りなし・24時間受付
        </motion.p>
      </div>
    </section>
  );
}
