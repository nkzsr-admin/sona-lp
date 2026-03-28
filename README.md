# sona-lp

sona（ソナ）公式サイト — 中小企業向けAI活用型業務支援サービス

## URL構成

| URL | 内容 | ソース |
|---|---|---|
| `sona-jp.com/` | HP（Next.js） | `src/` |
| `sona-jp.com/lp/` | LP（静的HTML、広告リンク先） | `public/lp/` |

## 技術スタック

- **Next.js 15** (App Router, Static Export)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** — アニメーション
- **GitHub Pages** — ホスティング（GitHub Actionsで自動デプロイ）

## ローカル開発

```bash
# 依存パッケージのインストール
npm install

# 開発サーバー起動
npm run dev
```

→ `http://localhost:3000` — HP
→ `http://localhost:3000/lp/` — LP

ファイルを編集すると自動でホットリロードされます。

### その他のコマンド

```bash
npm run build   # 本番ビルド（out/ に静的ファイル生成）
npm run lint    # ESLint チェック
```

## ディレクトリ構成

```
sona-lp/
├── .github/workflows/deploy.yml  # GitHub Pages 自動デプロイ
├── public/
│   ├── CNAME              # カスタムドメイン設定（sona-jp.com）
│   ├── favicon.png        # ファビコン
│   ├── ogp.png            # SNSシェア用OGP画像
│   └── lp/                # LP（静的HTML、広告リンク先）
│       ├── index.html     # LP本体（競合分析ベース、レスポンシブ対応済み）
│       └── images/        # LP用画像素材
│           ├── hero-bg.png
│           ├── reason-1-cost.png
│           ├── reason-2-chat.png
│           ├── reason-3-ai-human.png
│           ├── service-diagram-3-beforeafter.png（PC用）
│           ├── service-diagram-mobile.png（モバイル用）
│           ├── feature_01.svg
│           ├── feature_02.svg
│           └── feature_04.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx     # 共通レイアウト（OGP・gtag・Meta Pixel）
│   │   ├── page.tsx       # ページ構成（コンポーネントの並び順）
│   │   └── globals.css    # グローバルCSS
│   └── components/        # セクション別コンポーネント
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── MarqueeBanner.tsx
│       ├── Problem.tsx
│       ├── Solution.tsx     # 対応業務4カテゴリ（秘書/経理/Web・SNS/リサーチ）
│       ├── Pricing.tsx      # 4プラン（スポット/ライト/スタンダード/セルフ）+ キャンペーン
│       ├── HowItWorks.tsx
│       ├── Comparison.tsx
│       ├── UseCases.tsx
│       ├── CTA.tsx          # LINE CTA + お問い合わせフォーム（Apps Script連携）
│       ├── Footer.tsx
│       ├── NebulaCanvas.tsx   # Hero背景アニメーション
│       └── CustomCursor.tsx   # カスタムカーソル
├── next.config.ts         # Next.js設定（Static Export有効）
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

## サービス構成（4プラン）

| プラン | 価格 | 対象 |
|---|---|---|
| スポットプラン | 1タスク ¥3,000〜 | まず1つ試したい方 |
| おまかせライト | ¥55,000/月 | 手軽に始めたい方 |
| おまかせスタンダード | ¥110,000/月 | 丸投げしたい方 |
| セルフプラン | ¥55,000/月 + 初期¥220,000 | AI環境を自分で使いたい方 |

導入キャンペーン: 先着5社・月¥10,000・1ヶ月

## トラッキング設定

| サービス | ID | 設定場所 |
|---|---|---|
| Google Analytics (GA4) | `G-0G6DJZMGLW` | `layout.tsx` / LP `<head>` |
| Google Ads | `AW-17922920559` | `layout.tsx` / LP `<head>` |
| Google Ads CV | `CjeSCNes340cEO-gqOJC` | `layout.tsx` / LP `<head>` |
| Meta Pixel | `936399392096992` | `layout.tsx` / LP `<head>` |
| LINE公式 | `https://lin.ee/FYl4bJd` | `CTA.tsx` / LP各CTAボタン |

## お問い合わせフォーム

| 項目 | 値 |
|---|---|
| バックエンド | Google Apps Script |
| デプロイURL | `https://script.google.com/macros/s/AKfycbzhV1MpXieQ4rL6Lq2o1T_qUwLurjZNKEqz1VIrFZ4Oo5NUBTObJxiSCpDPtgOeVWiu/exec` |
| 送信方式 | `fetch` + `mode: 'no-cors'` |
| 通知先 | sona.jp.support@gmail.com |
| 設置箇所 | HP（CTA.tsx）/ LP（#contact） |

## レスポンシブ対応（LP）

| ブレークポイント | 対象 | 備考 |
|---|---|---|
| 1025px以上 | PC | — |
| 768px〜1024px | タブレット | PC寄り（ハンバーガーメニュー） |
| 768px以下 | スマホ | — |
| 640px以下 | スマホ | フォント縮小 |
| 400px以下 | 小型スマホ | さらにフォント縮小 |

## デプロイ

`master` ブランチにpushすると GitHub Actions が自動実行：

1. `npm ci` → `npm run build` で `out/` に静的ファイル生成
2. GitHub Pages にデプロイ

手動デプロイ: GitHub Actions の「Run workflow」から `workflow_dispatch` でも実行可能。
