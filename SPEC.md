# sona Website SPEC.md v2.1

> ソースベース: Variant パターン2（Editorial Playful）
> 参照ファイル: `variant-pattern2-source.html`
> ヒーロー採用: `hero-prototypes/hero-aurora-nebula.html`（WebGLネビュラエフェクト）

---

## 1. Design Direction（デザイン方針）

### コンセプト
**"Editorial Playful"** — クリエイティブエージェンシーの遊び心ある表現力と、BtoBサービスの信頼感を両立させたインタラクティブなLP。wolfolins.com / area17.com のように、スクロールするだけで楽しい体験を提供する。

### トーン
- 無機質なSaaS LP **ではなく** エディトリアル誌面のような視覚的リズム
- 静的にスクロールするだけ **ではなく** 要素が生き生きと動くインタラクティブ体験
- 「AIツールです」というテクノロジー訴求 **ではなく** 「人手不足を解決するパートナー」という人間的な語り口
- よくあるテンプレLP **ではなく** 「この会社、センスあるな」と思わせる第一印象

### カラースキーム
| 名前 | HEX | 用途 |
|------|------|------|
| Off White | `#F4F4F1` | ページベース背景、ライトセクション文字色 |
| Navy | `#0f1923` | テキスト色、ダークセクション背景 |
| Teal | `#2b8a7e` | アクセント（ラベル、カーソル、チェックマーク、ホバー） |
| LINE Green | `#06C755` | CTAボタン専用色 |
| Light Gray | `#EBEBE8` | セクション背景（交互背景用） |
| White | `#FFFFFF` | カード背景、比較テーブル背景 |

Tailwind設定で拡張:
```
teal: '#2b8a7e'
navy: '#0f1923'
offwhite: '#F4F4F1'
```

### フォント

| 用途 | フォント名 | ウェイト | 使い分けルール |
|------|-----------|---------|---------------|
| 英語見出し（Display） | **Syne** | 400 / 600 / 800 | Hero・セクションタイトル。uppercase、tracking-tighter。800は超大見出し用 |
| 英語アクセント（Serif） | **Playfair Display** | italic | セクションラベル（"Digital Staffing Agency" 等）。イタリック専用 |
| 日本語全般（Body） | **Noto Sans JP** | 300 / 400 / 500 / 700 | 本文400、見出し700、補足300、ラベル500 |

Google Fonts読み込み:
```
Noto+Sans+JP:wght@300;400;500;700
Playfair+Display:ital@0;1
Syne:wght@400;600;800
```

---

## 2. セクション構成

---

### Section 0: Header（固定ナビゲーション）

```
┌─────────────────────────────────────────────────────────┐
│ sona.          Issue  Solutions  Plans  [Get Started]    │
└─────────────────────────────────────────────────────────┘
```

**コピー:**
- ロゴ: `sona.` (Syne 800, text-3xl, tracking-tighter)
- ナビ: `Issue` / `Solutions` / `Plans` / `Get Started`（ボタン: 丸ボーダー）

**インタラクション:**
- `position: fixed`, `z-index: 50`
- `mix-blend-mode: difference` で背景色に関わらず常に視認可能（白文字がダーク背景で白、ライト背景で反転）
- "Get Started" ボタン: hover時に背景白 + テキストNavyに反転（`transition-colors duration-300`）
- モバイル: Issue / Solutions / Plans を非表示（`hidden md:block`）

**実装注意:**
- `mix-blend-difference` はiOS Safariで挙動が不安定な場合がある。フォールバックとして `@supports not (mix-blend-mode: difference)` で固定白背景を用意

---

### Section 1: Hero（ファーストビュー）

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   [Parallax: teal blur circle, top-right]               │
│   [Parallax: navy blur circle, bottom-left]             │
│                                                         │
│   Digital Staffing Agency     ← Playfair italic, teal   │
│                                                         │
│   HIRE                                                  │
│   SMARTER,        ← Syne 800, 12vw, 各行がtext-outline  │
│   NOT HARDER.        と solid fill を交互に使う          │
│                                                         │
│                                                         │
│   人材不足を解決する、新しいデジタルの働き手。            │
│   AI-powered back-office support for modern SMBs.       │
│                                                         │
│                               SCROLL ↓                  │
└─────────────────────────────────────────────────────────┘
```

**コピー:**
- ラベル: `Digital Staffing Agency` (Playfair Display italic, teal, text-xl md:text-3xl)
- H1: `HIRE` / `SMARTER,` / `NOT HARDER.` (Syne 800, text-[12vw], leading-[0.85], tracking-tighter, uppercase)
  - "HIRE" = solid fill（Navy）
  - "SMARTER," = `-webkit-text-stroke: 1px #0f1923; color: transparent;`（アウトライン）
  - "NOT HARDER." = solid fill（Navy）
- サブテキスト: `人材不足を解決する、新しいデジタルの働き手。` (Noto Sans JP 400)
- 英語補足: `AI-powered back-office support for modern SMBs.` (text-sm, opacity-60)
- Scroll indicator: `SCROLL` + 下矢印アイコン（右下、uppercase, tracking-widest）

**インタラクション:**
- パララックス背景: 2つのぼかし円（teal/10, navy/5）がスクロール速度 0.2 / -0.1 で動く
- `reveal-up`: ラベル→見出し→サブテキストの順にフェードイン（各0.1sディレイ）
- H1の各行は `char-reveal`（文字単位で下→上にスライドイン）
- `mix-blend-darken` で見出しが背景パララックスと自然に馴染む

**実装注意:**
- `text-[12vw]` はモバイルで大きすぎるので `text-[15vw] md:text-[12vw]` で調整
- パララックスはJS（IntersectionObserver + scroll listener）で実装、`will-change: transform`

---

### Section 2: Marquee Banner（マーキーバナー）

```
┌─────────────────────────────────────────────────────────┐
│ ■ Navy背景                                               │
│ → • Digital Staff • No Hiring Costs • Instant Setup     │
│   • AI Powered • 24/7 Support • Digital Staff ...→      │
└─────────────────────────────────────────────────────────┘
```

**コピー:**
`• Digital Staff • No Hiring Costs • Instant Setup • AI Powered • 24/7 Support`
（同一テキストを2回連結し、50%移動のループアニメーションで無限スクロール）

**インタラクション:**
- `animation: marquee 20s linear infinite`
- `@keyframes marquee { 0% { translateX(0) } 100% { translateX(-50%) } }`
- 背景: Navy, テキスト: offwhite, フォント: Syne 600, uppercase, tracking-widest, text-lg

**実装注意:**
- テキストはHTMLで同一内容を2回書き、CSSアニメーションだけでシームレスにループさせる
- `overflow: hidden; white-space: nowrap;`

---

### Section 3: Problem（The Crisis）

```
┌─────────────────────────────────────────────────────────┐
│  bg: offwhite                                           │
│                                                         │
│  ┌──────────────────────┐  ┌────────────────────────┐   │
│  │ The                  │  │ Shortage Rate           │   │
│  │ Crisis               │  │                         │   │
│  │                      │  │     68%                 │   │
│  │ 日本の中小企業の     │  │                         │   │
│  │ 過半数が、深刻な     │  │ Of Japanese SMBs        │   │
│  │ 人材不足に直面。     │  │ lack staff              │   │
│  │                      │  │                         │   │
│  │ 採用コストの高騰、   │  └────────────────────────┘   │
│  │ 離職率の増加、       │                               │
│  │ 教育にかかる時間。   │                               │
│  └──────────────────────┘                               │
└─────────────────────────────────────────────────────────┘
```

**コピー:**
- セクション見出し: `The` / `Crisis` (Syne 800, text-7xl md:text-9xl, 2行)
- 本文1: `日本の中小企業の過半数が、深刻な人材不足に直面しています。` (Noto Sans JP 400, text-lg)
- 本文2: `採用コストの高騰、離職率の増加、そして教育にかかる時間。従来の「人を雇う」という解決策は、もはや持続可能ではありません。バックオフィス業務の圧迫が、企業の本来の成長を妨げています。` (Noto Sans JP 300, text-base, opacity-70)
- 統計ラベル: `Shortage Rate` (uppercase, tracking-widest, text-sm)
- 統計数字: `68%` (Syne 800, text-[12rem] md:text-[16rem])
- 統計補足: `Of Japanese SMBs lack staff` (text-sm, opacity-60)

**インタラクション:**
- 見出し: `reveal-clip`（clip-path polygon 下→上アニメーション, 1.2s）
- 68%の数字: **カウントアップアニメーション**（0 → 68、IntersectionObserverでビューポート進入時に開始）
- 本文: `reveal-up`（0.2sディレイ）
- セクション間に `grow-line`（薄いグレーの水平線が左→右に伸びる）

**実装注意:**
- カウントアップは `requestAnimationFrame` で滑らかに。easeOutQuart でゆっくり減速
- 2カラムレイアウト: `grid grid-cols-1 md:grid-cols-2 gap-16`

---

### Section 4: Solution（Meet Your Digital Staff）

```
┌─────────────────────────────────────────────────────────┐
│  bg: Navy  text: offwhite                               │
│                                                         │
│  The Solution        ← Playfair italic, teal            │
│  Meet Your                                              │
│  Digital Staff.      ← Syne 800, text-7xl               │
│                                                         │
│  説明テキスト（日本語）                                    │
│                                                         │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                   │
│  │ 01   │ │ 02   │ │ 03   │ │ 04   │                   │
│  │ 🧾   │ │ 📋   │ │ 📢   │ │ 🔍   │                   │
│  │      │ │      │ │      │ │      │                   │
│  │Acctg │ │Admin │ │PR &  │ │Rsrch │                   │
│  │経理  │ │事務  │ │広報  │ │リサーチ│                   │
│  └──────┘ └──────┘ └──────┘ └──────┘                   │
│   ↑ ホバーでtealオーバーレイ + 詳細テキスト表示           │
└─────────────────────────────────────────────────────────┘
```

**コピー:**
- ラベル: `The Solution` (Playfair italic, teal)
- 見出し: `Meet Your` / `Digital Staff.` (Syne 800, text-5xl md:text-7xl)
- 説明: `必要な時に、必要なスキルを。採用活動も、社会保険料も、PCの支給も必要ありません。即戦力のデジタルアシスタントが、あなたのチームに参加します。` (Noto Sans JP 300, text-lg)
- カード4枚:

| # | 英語名 | 日本語名 | アイコン | ホバー詳細文 |
|---|--------|---------|---------|-------------|
| 01 | Accounting | 経理・財務サポート | ph-calculator | 請求書発行、経費精算、記帳代行など、正確性が求められる経理業務を自動化・代行。 |
| 02 | Admin | 一般事務・アシスタント | ph-clipboard-text | データ入力、スケジュール調整、問い合わせ対応など、煩雑な事務作業を巻き取ります。 |
| 03 | PR & Mktg | 広報・マーケティング | ph-megaphone | SNS運用、メルマガ作成、プレスリリース配信など、発信活動を継続的にサポート。 |
| 04 | Research | リサーチ・データ収集 | ph-magnifying-glass | 競合調査、リスト作成、市場データ収集など、AIを活用した高速なリサーチ業務。 |

**インタラクション:**
- カード: `hover-img-wrapper` — ホバーでteal色オーバーレイが下からスライドイン（`translateY(100% → 0)`）
- オーバーレイ内にアイコン + 詳細テキストが表示
- 通常時: 番号(01等) + 英語名 + 日本語名 のみ
- `data-cursor-theme="dark"` でカーソルを白に切替

**実装注意:**
- カードは `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`
- アイコンは Phosphor Icons（`<i class="ph ph-calculator">`）
- ホバーエフェクトの `transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)`

---

### Section 5: Pricing（Simple Pricing）

```
┌─────────────────────────────────────────────────────────┐
│  bg: offwhite                                           │
│                                                         │
│  Transparent Investment   ← Playfair italic, teal       │
│  Simple                                                 │
│  Pricing.                ← Syne 800                     │
│                                                         │
│  ┌─────────────────────┐  ┌─────────────────────┐      │
│  │ セルフプラン         │  │ ★ Popular            │      │
│  │ Self Plan            │  │ おまかせプラン        │      │
│  │                      │  │ Omakase Plan          │      │
│  │ ¥55,000 /月(税込)    │  │ ¥110,000 /月(税込)   │      │
│  │                      │  │                       │      │
│  │ IT強い経営者向け。   │  │ LINEで依頼するだけ。  │      │
│  │ 自分で使いこなす。   │  │ すべてお任せ。        │      │
│  │                      │  │                       │      │
│  │ ✓ Zoom 2回          │  │ ✓ Zoom 1回           │      │
│  │ ✓ CLAUDE.md設計     │  │ ✓ 無料お試し3件      │      │
│  │ ✓ テンプレ5-10      │  │ ✓ 月30タスク         │      │
│  │ ✓ コマンド5-8       │  │ ✓ 最短12h納品        │      │
│  │ ✓ マニュアル・研修  │  │ ✓ 品質チェック済     │      │
│  │ ✓ 月次メンテ       │  │ ✓ 月次レポート       │      │
│  │ ✓ LINEサポート     │  │ ✓ 月1定例MTG        │      │
│  │                      │  │                       │      │
│  │ 初期: ¥220,000(税込) │  │ 初期: ¥0（お試し付） │      │
│  │                      │  │                       │      │
│  │ [プランを選ぶ]       │  │ [プランを選ぶ]       │      │
│  └─────────────────────┘  └─────────────────────┘      │
└─────────────────────────────────────────────────────────┘
```

**コピー:**
- ラベル: `Transparent Investment` (Playfair italic, teal)
- 見出し: `Simple` / `Pricing.` (Syne 800, text-7xl)

**セルフプラン:**
- プラン名: `セルフプラン` / `Self Plan`
- 価格: `¥55,000` `/月（税込）`
- 説明: `プロが構築した専用AI環境を、自分で使いこなす。ITリテラシーの高い経営者・担当者向け。`
- 機能: 業務プロセスコンサルティング（Zoom 2回） / 御社専用 CLAUDE.md 設計・構築 / カスタムプロンプトテンプレート 5〜10個 / カスタムスラッシュコマンド 5〜8個 / 操作マニュアル・ハンズオン研修 / 月次メンテナンス・最適化 / LINE無制限サポート（平日9-18時）
- 初期費用注記: `初期構築費: ¥220,000（税込）`

**おまかせプラン（Popular）:**
- プラン名: `おまかせプラン` / `Omakase Plan`
- バッジ: `Popular` (teal背景)
- 価格: `¥110,000` `/月（税込）`
- 説明: `LINEで依頼するだけ。すべてお任せで業務が完了する、完全代行型プラン。`
- 機能: 業務ヒアリング（Zoom 1回） / 無料お試し: 3タスク無料で処理 / 月30タスクまで対応（超過分 ¥3,300/件） / 最短12時間・最大24時間で納品 / 全タスク品質チェック済み / 月次パフォーマンスレポート / 月1回の定例ミーティング
- 初期費用注記: `初期費用: ¥0（無料お試し3件つき）`

**インタラクション:**
- カードホバー: tealグロー（`box-shadow: 0 0 30px rgba(43,138,126,0.1)`）+ `scale(1.02)` + 上方向微移動
- "Popular" バッジはteal背景の丸ラベル
- チェックマーク: Phosphor Icons `ph-check-circle` (teal色)
- "プランを選ぶ" ボタン: おまかせプラン側はteal背景、セルフプラン側はborder-navy

**実装注意:**
- カードは `grid grid-cols-1 md:grid-cols-2 gap-8`
- Popular カードは `border-2 border-teal` で強調
- 価格部分: Syne 800 で大きく表示

---

### Section 6: How It Works（3ステップ）

```
┌─────────────────────────────────────────────────────────┐
│  bg: #EBEBE8 (Light Gray)                               │
│                                                         │
│  How It Works          ← Syne 800, text-7xl             │
│                                                         │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐    │
│  │ 01  📞       │ │ 02  ⚙️       │ │ 03  🚀       │    │
│  │              │ │              │ │              │    │
│  │ Consultation │ │ Setup        │ │ Start Work   │    │
│  │              │ │              │ │              │    │
│  │ LINEで無料   │ │ 御社専用の   │ │ デジタル      │    │
│  │ 相談。業務   │ │ AI環境を     │ │ スタッフが   │    │
│  │ 課題をヒア   │ │ 構築。おま   │ │ 稼働開始。   │    │
│  │ リング。     │ │ かせなら3件  │ │              │    │
│  │              │ │ 無料お試し。 │ │              │    │
│  └──────────────┘ └──────────────┘ └──────────────┘    │
└─────────────────────────────────────────────────────────┘
```

**コピー:**
- 見出し: `How It Works` (Syne 800, text-5xl md:text-7xl)

| # | 英語タイトル | 説明文 |
|---|------------|--------|
| 01 | Consultation | LINEからお気軽にご連絡ください。現在の業務課題やご要望を詳しくヒアリングし、最適なプランをご提案します。 |
| 02 | Setup | 御社の業務に合わせた専用AI環境を構築。おまかせプランなら3タスク無料でお試しいただけます。 |
| 03 | Start Work | 専用LINEチャットを開設し、最短即日で業務をスタート。使うほどに業務に精通し、品質が向上します。 |

**インタラクション:**
- 各カード: `reveal-up` + 段階ディレイ（0.1s, 0.2s, 0.3s）
- 番号: Syne 800、大きめ表示 + teal色アイコン
- ステップ間に接続ライン（`grow-line` — 水平線が左→右に伸びるアニメーション）
- カードホバー: 軽い浮き上がり

**実装注意:**
- `grid grid-cols-1 md:grid-cols-3 gap-8`
- 接続ラインは `::after` 疑似要素で実装、モバイルでは非表示

---

### Section 7: Comparison（The Math）

```
┌─────────────────────────────────────────────────────────┐
│  bg: white                                              │
│                                                         │
│  The Math.             ← Syne 800                       │
│  Traditional Hiring vs Sona                             │
│                                                         │
│  採用コスト、社会保険料、退職リスク...                     │
│  隠れたコストを可視化します。                              │
│                                                         │
│  ┌─────────────────────────────────────────────────┐    │
│  │ 採用費 / 初期費用                                │    │
│  │ 従来の採用  約50万円〜    │  sona  0円           │    │
│  ├─────────────────────────────────────────────────┤    │
│  │ 月額人件費 / 委託費                              │    │
│  │ 従来の採用  約25万円+社保 │  sona  5.5万円〜     │    │
│  ├─────────────────────────────────────────────────┤    │
│  │ 教育・オンボーディング                            │    │
│  │ 従来の採用  1〜3ヶ月      │  sona  不要（即戦力） │    │
│  ├─────────────────────────────────────────────────┤    │
│  │ 離職リスク                                       │    │
│  │ 従来の採用  常にあり      │  sona  なし          │    │
│  ├─────────────────────────────────────────────────┤    │
│  │ 年間総コスト                                      │    │
│  │ 従来の採用  約500万円〜   │  sona  66万円〜      │    │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

**コピー:**
- 見出し: `The Math.` (Syne 800, text-7xl)
- サブ: `Traditional Hiring vs Sona` (Syne 400, text-xl, opacity-60)
- 説明: `採用コスト、社会保険料、PC貸与、退職リスク... 隠れたコストを可視化します。`

| 項目 | 従来の採用 | sona |
|------|----------|------|
| 採用費 / 初期費用 | 約50万円〜 | 0円 |
| 月額人件費 / 委託費 | 約25万円+社保等 | 5.5万円〜 |
| 教育・オンボーディング | 1〜3ヶ月の社内リソース消費 | 不要（即戦力） |
| 離職リスク | 常にあり（32%が3年以内離職） | なし |
| 年間総コスト | 約500万円〜 | 66万円〜 |

**インタラクション:**
- 各行: `reveal-up` で順次表示
- 従来の採用側: `text-red-400/60` で薄い赤、sona側: `text-teal font-bold` で強調
- 行間に `grow-line`（水平線が伸びる）
- 数字部分: Syne フォントで表示

**実装注意:**
- テーブルではなく `div` ベースのカスタムレイアウトで実装（Variantの出力に準拠）
- 左右で `grid grid-cols-2` にして対比

---

### Section 8: Use Cases（Industries We Serve）

```
┌─────────────────────────────────────────────────────────┐
│  bg: Navy  text: offwhite                               │
│                                                         │
│  Industries                                             │
│  We Serve.             ← Syne 800                       │
│  Hover to view details                                  │
│                                                         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐                   │
│  │ 01      │ │ 02      │ │ 03      │                   │
│  │ IT &    │ │ Profes- │ │ Real    │                   │
│  │ Consult │ │ sional  │ │ Estate  │                   │
│  ├─────────┤ ├─────────┤ ├─────────┤                   │
│  │ 04      │ │ 05      │ │ 06      │                   │
│  │ Staffing│ │ Mgmt    │ │ Back    │                   │
│  │         │ │ Consult │ │ Office  │                   │
│  └─────────┘ └─────────┘ └─────────┘                   │
│   ↑ ホバーでtealオーバーレイ + 日本語詳細スライドイン     │
└─────────────────────────────────────────────────────────┘
```

**コピー:**
- 見出し: `Industries` / `We Serve.` (Syne 800, text-7xl)
- 補足: `Hover to view details` (text-sm, opacity-40)

| # | 英語名 | 日本語名 | ホバー詳細文 |
|---|--------|---------|-------------|
| 01 | IT & Consulting | IT・コンサル | 提案書・見積書の作成、技術リサーチ、競合分析、議事録作成、ブログ執筆。 |
| 02 | Professional Services | 士業（税理士・社労士） | 申請書類のドラフト作成、法改正リサーチ、顧問先レポート、助成金情報収集。 |
| 03 | Real Estate | 不動産・建設 | 物件紹介文の作成、オーナー向けレポート、市場分析、近隣挨拶状・完工報告書。 |
| 04 | Staffing | 人材・採用 | 求人原稿の作成、スカウトメール文面、候補者レポート、営業資料・提案書作成。 |
| 05 | Mgmt Consulting | 経営コンサル | 市場調査・競合分析レポート、事業計画書ドラフト、KPIダッシュボード、プレゼン資料。 |
| 06 | Back Office | 共通バックオフィス | メール文面・書類作成、データ入力・集計、SNS投稿・ブログ記事、翻訳（日英）。 |

**インタラクション:**
- 通常: 番号 + 英語名のみ表示（ダーク背景 + ボーダー）
- ホバー: teal色オーバーレイが下からスライドイン → アイコン + 日本語名 + 詳細テキスト表示
- `hover-img-overlay`: `transform: translateY(100%) → translateY(0)`, `0.6s cubic-bezier(0.16, 1, 0.3, 1)`
- `data-cursor-theme="dark"`

**実装注意:**
- `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`
- 各カードの高さは均一に（`min-h-[280px]`）

---

### Section 9: CTA（Stop Hiring. Start Scaling.）

```
┌─────────────────────────────────────────────────────────┐
│  bg: Navy  text: offwhite                               │
│  [Parallax: tealぼかし円]                                │
│                                                         │
│  Ready to shift?       ← Playfair italic, teal          │
│                                                         │
│  Stop Hiring.                                           │
│  Start Scaling.        ← Syne 800, text-7xl             │
│                                                         │
│  まずはLINEで無料相談。                                   │
│  あなたの企業の課題に合わせた活用方法をご提案します。      │
│                                                         │
│        [🟢 LINEで無料相談する]     ← マグネティック      │
│                                                         │
│  ※ 相談無料・契約縛りなし・24時間受付                     │
└─────────────────────────────────────────────────────────┘
```

**コピー:**
- ラベル: `Ready to shift?` (Playfair italic, teal, text-xl)
- 見出し: `Stop Hiring.` / `Start Scaling.` (Syne 800, text-5xl md:text-7xl)
- 説明: `まずはLINEで無料相談。あなたの企業の課題に合わせた活用方法をご提案します。` (Noto Sans JP 400, text-lg)
- CTAボタン: `LINEで無料相談する` (LINE Green背景, 白テキスト, LINEアイコンSVG付き)
- 補足: `※ 相談無料・契約縛りなし・24時間受付` (text-sm, opacity-40)
- LINE URL: `https://lin.ee/xlPnjXK`

**インタラクション:**
- **マグネティックボタン**: カーソルが近づくとボタンが引き寄せられる物理演算
  - 反応半径: ボタンから100px以内
  - 移動量: カーソル位置との差分の30%
  - `transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)`
- ボタンホバー: `box-shadow: 0 0 40px rgba(6, 199, 85, 0.4)` のグリーングロー
- パララックス背景: tealぼかし円
- `data-cursor-theme="dark"`

**実装注意:**
- CTAクリック時にコンバージョントラッキング発火（Google Ads）
- `onclick="gtag_report_conversion('https://lin.ee/FYl4bJd')"`

---

### Section 10: Footer

```
┌─────────────────────────────────────────────────────────┐
│  bg: Navy  border-top: offwhite/10                      │
│                                                         │
│  sona.      利用規約  プライバシーポリシー               │
│             © 2026 sona. All rights reserved.            │
└─────────────────────────────────────────────────────────┘
```

**コピー:**
- ロゴ: `sona.` (Syne 800, text-2xl)
- リンク: `利用規約` / `プライバシーポリシー`
- コピーライト: `© 2026 sona. All rights reserved.`

**インタラクション:**
- リンクホバー: underline + opacity変化

---

## 3. グローバルなインタラクション仕様

### カスタムカーソル
- **dot**: 8px tealドット（`position: fixed, z-index: 9999, pointer-events: none`）
- **outline**: 40px tealアウトライン円（ドットに少し遅れて追従）
- **ホバー状態**: dot が60pxに拡大、`mix-blend-mode: multiply`、outline消失
- **ダークセクション**: `data-cursor-theme="dark"` で白色に切替
- **モバイル（タッチデバイス）**: カーソル非表示（`@media (hover: none) { .cursor-dot, .cursor-outline { display: none; } body { cursor: auto; } }`）

### スクロールアニメーション
すべて `IntersectionObserver` (threshold: 0.1) でトリガー:

| クラス名 | 効果 | duration | easing |
|---------|------|----------|--------|
| `reveal-up` | opacity 0→1, translateY(60px→0) | 1s | cubic-bezier(0.16, 1, 0.3, 1) |
| `reveal-clip` | clip-path polygon(下→全面表示) | 1.2s | cubic-bezier(0.16, 1, 0.3, 1) |
| `char-reveal` | 文字単位で translateY(100%→0) | 0.8s | cubic-bezier(0.16, 1, 0.3, 1) |
| `grow-line` | width 0→100% | 1.5s | cubic-bezier(0.16, 1, 0.3, 1) |
| `grow-line-vertical` | height 0→100% | 1.5s | 同上 |

ディレイ: `.reveal-delay-1` = 0.1s, `.reveal-delay-2` = 0.2s, `.reveal-delay-3` = 0.3s

### ホバーエフェクト
| 要素 | 効果 |
|------|------|
| カスタムカーソル | dot 8px → 60px + blend mode変化 |
| ナビリンク | opacity変化 |
| Get Started ボタン | bg: transparent → offwhite, text: offwhite → navy |
| サービスカード | tealオーバーレイがtranslateY(100%→0)でスライドイン |
| プランカード | scale(1.02) + teal glow shadow |
| 業界カード | tealオーバーレイ + 詳細テキスト表示 |
| CTA LINE ボタン | マグネティック追従 + green glow |
| フッターリンク | underline表示 |

### パララックス
- Hero背景: 2つのぼかし円（`blur-3xl`）がスクロール速度 `data-speed="0.2"` / `data-speed="-0.1"` で動く
- CTA背景: tealぼかし円
- JS実装: `window.addEventListener('scroll')` で `transform: translateY(scrollY * speed)` を適用
- `will-change: transform` で GPU アクセラレーション

### マーキーバナー
- `animation: marquee 20s linear infinite`
- テキスト2回複製でシームレスループ
- `overflow: hidden; white-space: nowrap;`

### レスポンシブ方針
- **PC版を先に完成** → モバイルは後から一括対応（記事Step 6の方針）
- ブレイクポイント: Tailwind デフォルト（sm: 640px, md: 768px, lg: 1024px）
- モバイル対応項目:
  - カスタムカーソル無効化
  - ナビリンクの一部非表示（ハンバーガーメニューは不要、Get Startedのみ表示）
  - グリッド: 2〜4列 → 1列スタック
  - Hero文字サイズ: `text-[12vw]` → `text-[15vw]`
  - ホバーエフェクト: タッチデバイスでは無効化（`@media (hover: hover)` で制限）
  - 比較テーブル: 横スクロールまたは縦スタック

### トラッキングコード（`<head>` に追加）
- GA4: `G-ME4W925TCL`（LPのみ）
- Google Ads: `AW-17922920559`（LPのみ）
- Clarity: `w3eq1degov`（LPのみ）
- ※ Meta Pixel は削除済み（FBアカウント永久停止）
- コンバージョン: LINE CTA クリック時に `gtag_report_conversion()` + `fbq('track', 'Lead')` 発火

---

## 4. 技術スタック

| レイヤー | 技術 | 補足 |
|---------|------|------|
| **Framework** | Next.js（App Router） | `output: 'export'` で静的HTML生成 |
| **Styling** | Tailwind CSS | ユーティリティファースト |
| **Animation** | Framer Motion | スクロールアニメーション、ホバーエフェクト |
| **3D/WebGL** | 生WebGL（ライブラリ不使用） | ヒーローのネビュラシェーダー |
| **Analytics** | Google Analytics 4 | PV・滞在時間・流入経路 |
| **広告トラッキング** | Google Ads | コンバージョン計測（LINE CTAクリック） |
| **Deploy** | GitHub Pages | `sona-lp` リポジトリ、push で自動反映 |
| **Domain** | sona-jp.com | GitHub Pagesにカスタムドメイン接続済み |

---

## 5. 今後の検討事項

- **問い合わせフォーム**: Typeform（https://www.typeform.com/ ）の導入を検討中。LINE登録に抵抗がある層の受け皿として。無料プラン月10件。LINE一本で集客が回らなくなったタイミングで導入予定。
