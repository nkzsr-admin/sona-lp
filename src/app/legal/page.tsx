import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "特定商取引法に基づく表記 | sona",
  robots: "noindex, nofollow",
};

const rows = [
  { label: "事業者名", value: "sona（ソナ）/ 仲座 空良" },
  { label: "代表者名", value: "仲座 空良" },
  { label: "所在地", value: "【住所はお問い合わせいただいた方に個別にお知らせいたします】" },
  { label: "電話番号", value: "【お問い合わせいただいた方に個別にお知らせいたします】" },
  { label: "メールアドレス", value: "nakaza@sona-jp.com" },
  { label: "お支払方法", value: "銀行振込（振込手数料はお客様負担となります）" },
  { label: "お支払時期", value: "原則として前払い" },
  { label: "消費税", value: "表示価格は税込です。" },
  { label: "サービス開始", value: "サービスをご利用いただくためには、銀行振込による料金の前払いが必要となります。" },
  { label: "解約", value: "サービスの今後のご利用をご希望でない場合は、お問い合わせフォームより解約の旨お伝えください。" },
  { label: "商品", value: "特定商取引法上の商品に該当するものはございません。" },
];

export default function LegalPage() {
  return (
    <div className="!cursor-auto [&_a]:!cursor-pointer [&_button]:!cursor-pointer">
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
        <div className="max-w-3xl mx-auto">
          <h1 className="font-syne font-[800] text-3xl md:text-4xl text-navy mb-12 pb-4 border-b-2 border-teal">
            Legal Notice
            <span className="block font-noto font-normal text-base text-navy/50 mt-2">特定商取引法に基づく表記</span>
          </h1>

          <div className="border border-navy/10 rounded-lg overflow-hidden">
            {rows.map((row, i) => (
              <div key={i} className={`flex flex-col md:flex-row ${i < rows.length - 1 ? "border-b border-navy/10" : ""}`}>
                <div className="md:w-44 shrink-0 bg-navy/5 px-5 py-3 md:py-4 font-bold text-sm text-navy">
                  {row.label}
                </div>
                <div className="px-5 py-2 md:py-4 text-sm text-navy/80">
                  {row.value}
                </div>
              </div>
            ))}
          </div>

          <p className="text-right text-navy/40 text-xs pt-10">制定日: 2026年3月28日</p>

          <div className="text-center pt-10">
            <p className="text-navy/60 text-sm mb-5">ご不明点やご質問などがございましたら<br />お気軽にお問い合わせくださいませ。</p>
            <Link href="/#cta" className="inline-block bg-teal text-offwhite font-bold text-base px-12 py-4 rounded-full no-underline hover:opacity-80 transition-opacity">
              まずは無料お試しからスタート
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
