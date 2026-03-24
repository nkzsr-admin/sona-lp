"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if (typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let mx = -100, my = -100;
    let ox = -100, oy = -100;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    };

    const loop = () => {
      ox += (mx - ox) * 0.1;
      oy += (my - oy) * 0.1;
      outline.style.transform = `translate(${ox - 20}px, ${oy - 20}px)`;
      requestAnimationFrame(loop);
    };

    const addHover = () => dot.classList.add("hover");
    const removeHover = () => dot.classList.remove("hover");

    const attachHover = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    requestAnimationFrame(loop);
    attachHover();

    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-teal rounded-full pointer-events-none z-[9999] transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] [will-change:transform] [&.hover]:w-[60px] [&.hover]:h-[60px] [&.hover]:-ml-[26px] [&.hover]:-mt-[26px] [&.hover]:bg-teal/15 [&.hover]:mix-blend-screen"
      />
      <div
        ref={outlineRef}
        className="cursor-outline fixed top-0 left-0 w-10 h-10 border-2 border-teal/60 rounded-full pointer-events-none z-[9998] transition-opacity duration-300 [will-change:transform]"
      />
    </>
  );
}
