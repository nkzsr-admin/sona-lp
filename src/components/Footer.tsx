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
        <nav className="flex gap-6">
          <a href="/privacy" className="text-offwhite/50 text-xs hover:text-offwhite transition-colors">
            プライバシーポリシー
          </a>
          <a href="/terms" className="text-offwhite/50 text-xs hover:text-offwhite transition-colors">
            利用規約
          </a>
          <a href="/legal" className="text-offwhite/50 text-xs hover:text-offwhite transition-colors">
            特定商取引法に基づく表記
          </a>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto mt-6 text-center">
        <p className="text-offwhite/30 text-xs">
          © 2026 sona. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
