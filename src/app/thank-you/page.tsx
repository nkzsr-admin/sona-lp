import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "お問い合わせありがとうございます | sona",
  robots: "noindex, nofollow",
};

export default function ThankYouPage() {
  return (
    <div className="!cursor-auto [&_a]:!cursor-pointer [&_button]:!cursor-pointer min-h-screen flex flex-col">
      <header className="bg-navy py-4 px-6 md:px-[4vw]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-syne font-[800] text-2xl text-offwhite no-underline tracking-tighter">
            sona.
          </Link>
          <Link href="/" className="text-offwhite/60 text-sm no-underline hover:text-offwhite transition-colors">
            ← トップに戻る
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-offwhite py-16 md:py-24 px-6 md:px-[4vw]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-teal rounded-full flex items-center justify-center mx-auto mb-8">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#F4F4F1">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
          </div>

          <h1 className="font-syne font-[800] text-3xl md:text-4xl text-navy mb-6">
            Thank You
            <span className="block font-noto font-normal text-base text-navy/50 mt-2">お問い合わせありがとうございます</span>
          </h1>

          <p className="font-noto text-navy/70 text-base mb-4 leading-relaxed">
            内容を確認のうえ、担当者より<br />1営業日以内にご連絡いたします。
          </p>
          <p className="font-noto text-navy/50 text-sm mb-4 leading-relaxed">
            ご相談希望日時をいただいた場合は、<br />ご希望に沿ってオンライン相談の日程を調整し、メールにてご案内いたします。
          </p>
          <p className="font-noto text-navy/40 text-sm mb-12">
            ※ nakaza@sona-jp.com からご連絡いたします。<br />迷惑メールフォルダもご確認ください。
          </p>

          <Link
            href="/"
            className="inline-block bg-teal text-offwhite font-bold text-base px-12 py-4 rounded-full no-underline hover:opacity-80 transition-opacity"
          >
            トップページに戻る
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
