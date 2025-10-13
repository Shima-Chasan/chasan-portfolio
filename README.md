# ちゃーさんポートフォリオサイト

AI×デザインで"時短"と"伝わる"をつくる、ちゃーさんのポートフォリオサイトです。

## 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Google Fonts (Zen Maru Gothic, Shippori Mincho)

## 開発環境のセットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてサイトを確認できます。

### 3. ビルド

```bash
npm run build
```

### 4. 本番環境での起動

```bash
npm start
```

## プロジェクト構成

```
├── app/                    # App Router ページ
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   ├── projects/          # 実績ページ
│   └── services/          # サービス詳細ページ
│       ├── design/        # 広報デザイン制作
│       └── teaching/      # AI活用術レッスン
├── components/            # 共通コンポーネント
│   ├── sections/          # ページセクション
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── Container.tsx
│   ├── Section.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── public/                # 静的ファイル
└── styles/                # スタイル関連
```

## 主な機能

- **レスポンシブデザイン**: モバイルファーストで設計
- **スムーススクロール**: アンカーリンクでのページ内移動
- **モバイルナビゲーション**: ハンバーガーメニュー実装
- **フォーム**: Formspree連携（要設定）
- **SEO対応**: メタタグ・OGP設定済み

## カスタマイズ

### 色の変更

`app/globals.css` の CSS変数を変更してください：

```css
:root {
  --brand: #f3a7ab;        /* メインカラー */
  --brand-dark: #e68f95;   /* メインカラー（濃） */
  --section: #fff8f2;      /* セクション背景 */
  --text: #3a2f2a;         /* テキスト */
  --muted: #6b625b;        /* サブテキスト */
  --line: #e5e7eb;         /* 境界線 */
  --bg: #ffffff;           /* 背景 */
}
```

### フォームの設定

`components/sections/Contact.tsx` の TODO コメント部分にFormspreeのエンドポイントを設定してください：

```typescript
// TODO: set your Formspree endpoint
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
```

### 画像の追加

`public/` ディレクトリに以下の画像を配置してください：

- `hero.jpg` - ヒーローセクション
- `avatar.jpg` - プロフィール写真
- `ogp.jpg` - OGP画像
- `service-design.jpg` - デザインサービス
- `service-teaching.jpg` - レッスンサービス
- `project-1.jpg` ～ `project-8.jpg` - 実績画像
- `news-1.jpg` ～ `news-3.jpg` - ニュース画像
- `testimonial-1.jpg` ～ `testimonial-3.jpg` - お客様の声

## デプロイ

### Vercel（推奨）

1. GitHubにプッシュ
2. Vercelでリポジトリを連携
3. 自動デプロイ

### Netlify

1. `npm run build` でビルド
2. `out/` フォルダをNetlifyにアップロード

## ライセンス

このプロジェクトは個人利用のために作成されています。
