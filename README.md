# sona-lp

sona（ソナ）公式サイト — 中小企業向けデジタルスタッフ配置サービス

## URL構成

| URL | 内容 | ソース |
|---|---|---|
| `sona-jp.com/` | 新HP（Next.js） | `src/` |
| `sona-jp.com/lp/` | 旧LP（静的HTML、広告リンク先） | `public/lp/` |

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

→ `http://localhost:3000` — 新HP
→ `http://localhost:3000/lp/` — 旧LP

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
│   └── lp/                # 旧LP（静的HTML）
│       ├── index.html
│       └── hero-b.png
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
│       ├── Solution.tsx
│       ├── Pricing.tsx
│       ├── HowItWorks.tsx
│       ├── Comparison.tsx
│       ├── UseCases.tsx
│       ├── CTA.tsx
│       ├── Footer.tsx
│       ├── NebulaCanvas.tsx   # Hero背景アニメーション
│       └── CustomCursor.tsx   # カスタムカーソル
├── next.config.ts         # Next.js設定（Static Export有効）
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

## トラッキング設定

| サービス | ID | 設定場所 |
|---|---|---|
| Google Ads | `AW-17922920559` | `layout.tsx` |
| Google Analytics | `G-XXXXXXXXXX`（未設定） | `layout.tsx` |
| Meta Pixel | `936399392096992` | `layout.tsx` |
| LINE公式 | `https://lin.ee/FYl4bJd` | `CTA.tsx` |

## デプロイ

`master` ブランチにpushすると GitHub Actions が自動実行：

1. `npm ci` → `npm run build` で `out/` に静的ファイル生成
2. GitHub Pages にデプロイ

手動デプロイ: GitHub Actions の「Run workflow」から `workflow_dispatch` でも実行可能。
