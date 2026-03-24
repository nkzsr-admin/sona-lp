"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <nav className="flex items-center justify-between px-4 md:px-[4vw] py-5 md:py-8">
        <a
          href="#"
          className="font-syne font-[800] text-2xl md:text-3xl tracking-tighter text-offwhite no-underline"
          data-hover
        >
          sona.
        </a>
        <div className="flex items-center gap-8">
          <a
            href="#problem"
            className="hidden md:block font-syne font-[400] text-sm text-offwhite/70 hover:text-offwhite transition-opacity no-underline"
          >
            Issue
          </a>
          <a
            href="#solution"
            className="hidden md:block font-syne font-[400] text-sm text-offwhite/70 hover:text-offwhite transition-opacity no-underline"
          >
            Solutions
          </a>
          <a
            href="#pricing"
            className="hidden md:block font-syne font-[400] text-sm text-offwhite/70 hover:text-offwhite transition-opacity no-underline"
          >
            Plans
          </a>
          <a
            href="#cta"
            className="font-syne font-[800] text-xs md:text-sm text-offwhite border-2 border-offwhite/40 rounded-full px-5 md:px-7 py-2 md:py-2.5 tracking-wider no-underline transition-colors duration-300 hover:bg-offwhite hover:text-navy hover:border-offwhite"
            data-hover
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
