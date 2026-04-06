import type { Metadata } from "next";
import "./globals.css";

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

      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
