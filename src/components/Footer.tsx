export default function Footer() {
  return (
    <footer className="bg-navy text-offwhite border-t border-offwhite/10 py-10 md:py-12 px-6 md:px-[4vw]">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <a
          href="#"
          className="font-syne font-[800] text-2xl text-offwhite no-underline"
        >
          sona.
        </a>
        <p className="text-offwhite/30 text-xs">
          © 2026 sona. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
