"use client";

const items = [
  "Digital Staff",
  "No Hiring Costs",
  "Instant Setup",
  "AI Powered",
  "24/7 Support",
];

const text = items.map((item) => `• ${item} `).join("");
const doubled = text + text;

export default function MarqueeBanner() {
  return (
    <div className="bg-navy py-4 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block">
        <span className="font-syne font-[600] text-offwhite text-sm md:text-lg uppercase tracking-widest">
          {doubled}
        </span>
      </div>
    </div>
  );
}
