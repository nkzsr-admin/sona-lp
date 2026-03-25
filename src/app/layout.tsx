import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "sona | デジタルスタッフ配置サービス",
  description:
    "採用せずに人手不足を解決。中小企業向けAIデジタルスタッフ配置サービス。経理・事務・広報・リサーチを月額5.5万円〜。",
  openGraph: {
    title: "sona | デジタルスタッフ配置サービス",
    description:
      "採用せずに人手不足を解決。中小企業向けAIデジタルスタッフ配置サービス。",
    url: "https://sona-jp.com",
    siteName: "sona",
    images: [{ url: "https://sona-jp.com/ogp.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Playfair+Display:ital@0;1&family=Syne:wght@400;600;800&display=swap"
          rel="stylesheet"
        />

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '936399392096992');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=936399392096992&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Google Ads + GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0G6DJZMGLW"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0G6DJZMGLW');
          gtag('config', 'AW-17922920559');
        `}</Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
