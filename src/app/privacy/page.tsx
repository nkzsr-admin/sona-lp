import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "プライバシーポリシー | sona",
};

export default function PrivacyPage() {
  return (
    <div className="[&_*]:!cursor-auto" style={{ cursor: "auto" }}>
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
            Privacy Policy
            <span className="block font-noto font-normal text-base text-navy/50 mt-2">プライバシーポリシー</span>
          </h1>

          <div className="space-y-10 text-navy/80 text-sm leading-relaxed">
            <p>sona（以下「当方」）では、当方の提供するサービスをご利用いただくお客様及び当方の業務全般にて知り得た個人情報を保護するため、その取扱いにつきましては細心の注意を払っています。このプライバシーポリシーでは、当方における個人情報の取扱いについてご説明いたします。</p>
            <p>当方サービスをご利用いただいたお客様は、このプライバシーポリシーの内容を十分ご理解、ご同意いただいたものとみなします。</p>
            <p>当方はこのプライバシーポリシーをいつでも変更することができるものとし、お客様は現行のプライバシーポリシーにご同意いただいたものとさせていただきます。</p>

            <section>
              <h2 className="font-bold text-navy text-base mb-3">個人情報の取得について</h2>
              <p>当方は、偽りその他不正の手段によらず適正に個人情報を取得いたします。</p>
            </section>

            <section>
              <h2 className="font-bold text-navy text-base mb-3">個人情報の利用について</h2>
              <p className="mb-3">当方は、個人情報を以下の利用目的の達成に必要な範囲内で利用いたします。以下に定めのない目的で個人情報を利用する場合、あらかじめご本人の同意を得た上で行います。</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>お見積のご依頼・ご相談に対する回答及び資料送付を行うため</li>
                <li>当方がお客様に提供するサービスにおいて利用するため</li>
                <li>お客様に特別なサービスなどの情報を的確にお知らせするため</li>
                <li>当方サービスについてお客様の満足度を把握するため</li>
                <li>必要に応じてお客様にご連絡を行うため</li>
                <li>当方のマーケティング活動を行うため</li>
                <li>その他、当方が正当と判断した目的のため</li>
              </ul>
            </section>

            <section>
              <h2 className="font-bold text-navy text-base mb-3">Cookie・アクセス解析について</h2>
              <p className="mb-3">当サイトでは、サービス向上及び広告効果測定のため、以下の外部サービスを利用しています。これらのサービスでは、Cookieやこれに類する技術を使用して、お客様のサイト利用状況に関する情報を収集する場合があります。</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Google Analytics（アクセス解析）</li>
                <li>Google 広告（広告効果測定・コンバージョン計測）</li>
                <li>Meta Pixel（広告効果測定・コンバージョン計測）</li>
              </ul>
              <p className="mt-3">収集されたデータは各サービス提供元のプライバシーポリシーに基づき管理されます。お客様はブラウザの設定によりCookieの受け取りを拒否することができますが、その場合、当サイトの一部機能がご利用いただけない場合があります。</p>
            </section>

            <section>
              <h2 className="font-bold text-navy text-base mb-3">個人情報の安全管理について</h2>
              <p>当方は、個人情報の漏洩、滅失又は毀損を防止その他個人情報の安全管理のため、必要かつ適切な措置を講じるものとします。</p>
            </section>

            <section>
              <h2 className="font-bold text-navy text-base mb-3">個人情報の委託について</h2>
              <p>当方は、個人情報の取り扱いの全部または一部を第三者に委託する場合は、当該第三者について厳正な調査を行い、取り扱いを委託された個人情報の安全管理が図られるよう当該第三者に対する必要かつ適切な監督を行います。</p>
            </section>

            <section>
              <h2 className="font-bold text-navy text-base mb-3">個人情報の第三者提供について</h2>
              <p>当方は、個人情報保護法等の法令に定めのある場合を除き、個人情報をあらかじめご本人の同意を得ることなく、第三者に提供いたしません。</p>
            </section>

            <section>
              <h2 className="font-bold text-navy text-base mb-3">個人情報の開示・訂正等について</h2>
              <p className="mb-3">当方は、ご本人から個人情報の開示を求められたときは、ご本人に対し、遅滞なく開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>ご本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                <li>業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                <li>他の法令に違反することとなる場合</li>
              </ol>
              <p className="mt-3">なお、個人情報以外の情報については、原則として開示いたしません。</p>
            </section>

            <section>
              <h2 className="font-bold text-navy text-base mb-3">お問い合わせ</h2>
              <p>個人情報の取扱いに関するお問い合わせは、お問い合わせフォームよりご連絡ください。</p>
            </section>

            <p className="text-right text-navy/40 text-xs pt-6">制定日: 2026年3月28日</p>

            <div className="text-center pt-10">
              <p className="text-navy/60 text-sm mb-5">ご不明点やご質問などがございましたら<br />お気軽にお問い合わせくださいませ。</p>
              <Link href="/#cta" className="inline-block bg-teal text-offwhite font-bold text-base px-12 py-4 rounded-full no-underline hover:opacity-80 transition-opacity">
                まずは無料お試しからスタート
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
