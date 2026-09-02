# Eva.Oriental

和歌山市のベリーダンス・ヨガ・ピラティススタジオ [Eva.Oriental](https://evakoriental.wixsite.com/belly) の公式サイトです。Wix からのリプレースとして Next.js で構築し、Vercel へのデプロイを想定しています。

準備資料は [`docs/`](./docs/README.md) にあります。

## 必要な環境

- Node.js 20 以上
- Google Cloud のサービスアカウント（Sheets API 有効）
- 書き込み先の Google スプレッドシート

## ローカル起動

```bash
npm install
cp .env.example .env.local
npm run dev
```

`.env.local` にスプレッドシート連携用の値を入れます。未設定でもページは表示できます。フォーム送信だけ 500 になります。

## 環境変数

Vercel の Project Settings → Environment Variables に、Production / Preview へ同じキーを入れてください。

| キー | 内容 |
| --- | --- |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | サービスアカウントのメール |
| `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` | 秘密鍵。改行は `\n` のままでよい |
| `GOOGLE_SHEETS_SPREADSHEET_ID` | スプレッドシート URL の `/d/` と `/edit` の間 |
| `GOOGLE_SHEETS_TAB_TRIAL` | 体験用タブ名。未指定時は `レッスン体験` |
| `GOOGLE_SHEETS_TAB_CONTACT` | 問合せ用タブ名。未指定時は `お問い合わせ` |
| `NEXT_PUBLIC_SITE_URL` | 公開 URL（sitemap 用） |

スプレッドシートはサービスアカウントに「編集者」で共有します。1行目はヘッダーにしてください。

レッスン体験: 送信日時 / お名前 / Email / 電話番号 / 希望クラス / 希望日時 / 経験 / ご質問・メモ

お問い合わせ: 送信日時 / お名前 / Email / 件名 / 本文 / 送信元ページ

## Vercel への出し方

1. このリポジトリ `harukishimo/evaStudio` を Vercel に Import
2. Framework Preset は Next.js
3. 上記の環境変数を入れる
4. Deploy

環境変数を後から入れた場合は Redeploy します。

## 主なルート

`/` `/profile` `/belly-dance` `/yoga` `/events` `/gallery` `/studio-rental` `/access` `/schedule` `/trial`

写真は後工程で差し替える枠です。文言・ナビ・デザインベースは現行サイトに合わせています。
