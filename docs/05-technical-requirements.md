# 技術要件書

文書番号: EVA-TR-001  
版: 0.2（草案）  
作成日: 2026-09-02  
更新: 体験フォーム、Sheets 2タブ、EVENT History 枠  
対象: Eva.Oriental 公式サイト（Next.js / Vercel）

## 1. 概要

現行 Wix サイトを、静的寄りの Next.js App Router アプリとして再構築する。ページはサーバーで描画し、書き込みはフォーム送信だけ行う。保存先は指定の Google スプレッドシート（タブを用途で分ける）。

```
ブラウザ
  │
  ├─ ページ参照 ── Next.js (Vercel)
  │                   └─ コンテンツ: TS/MD/JSON + 静的画像
  │
  ├─ 体験申込 ── POST /api/trial
  │                 └─ Sheets「レッスン体験」に1行追加
  │
  └─ 問合せ ── POST /api/contact
                  └─ Sheets「お問い合わせ」に1行追加
```

## 2. 技術スタック

| 層 | 採用 | 理由 |
| --- | --- | --- |
| フレームワーク | Next.js（App Router, TypeScript） | 指定スタック。ページ中心のサイトに合う |
| スタイル | Tailwind CSS + 少数の共通トークン | 現行の色・余白を再現しやすい |
| ホスティング | Vercel | 指定。HTTPS、プレビュー、環境変数が揃う |
| フォーム保存 | Google Sheets API | 指定。DB を持たない |
| 地図 | Google Maps Embed | 現行と同じ埋め込み |
| 画像 | `next/image` + ローカル `/public` | 後から差し替えやすい |
| 解析 | 第1期は必須にしない | 後で Vercel Analytics を足せる |

使わないもの:

- 独自 DB（Postgres / Prisma 等）
- 認証
- ヘッドレス CMS（第1期）
- Wix 埋め込みの継続

## 3. 情報設計とルート

| ルート | ページ | 備考 |
| --- | --- | --- |
| `/` | HOME | |
| `/profile` | PROFILE | |
| `/belly-dance` | ベリーダンス | |
| `/yoga` | ヨガ&ピラティス | |
| `/events` | EVENT | 直近 + History 枠。年別ページは作らない |
| `/gallery` | GALLERY | |
| `/studio-rental` | スタジオレンタル | 問合せフォーム |
| `/access` | アクセス | 問合せフォーム + 地図 |
| `/schedule` | スケジュール | ナビ外 |
| `/trial` | レッスン体験 | 体験フォーム |

現行 Wix URL は `next.config` の `redirects` で新ルートへ 301 する。対応表は [02-sitemap-and-user-flows.md](./02-sitemap-and-user-flows.md) を正とする。

## 4. コンテンツの持ち方

文言はコンポーネントに直書きせず、`content/` にページ単位で置く。

```
content/
  site.ts              ナビ、フッター、SNS、電話、LINE
  home.ts
  profile.ts
  belly-dance.ts
  yoga.ts
  events.ts             直近 + history を年キーで持つ
  gallery.ts
  studio-rental.ts
  access.ts
  schedule.ts
  trial.ts
```

制約:

- 表示文字列はインベントリの原文を使う
- What's New、イベント、ギャラリー、月間表は差し替えやすい形にする
- 写真は `public/images/...` のパス参照。未着時は `MediaSlot` で枠だけ出す

## 5. UI 要件

### 5.1 デザイン

- 背景: 黒〜深紫
- ロゴ・金見出し・白本文・紫の現行ナビ
- EVA フローラルアイコンは現行ファイルを使う
- フォント: ロゴはセリフ、本文は読みやすいゴシック系
- 装飾のための新規アイコンやキャッチコピーは足さない

### 5.2 レスポンシブ

| 幅 | ナビ | ギャラリー | スケジュール画像 |
| --- | --- | --- | --- |
| 768px 未満 | ハンバーガー | 2列 | 1列 |
| 768px 以上 | 横並び | 3〜4列 | 2列 |

### 5.3 アクセシビリティ（現実的な水準）

- 画像に代替テキスト（キャプションを流用）
- フォームラベルと必須表示
- キーボードでライトボックスを閉じられる
- 電話は `tel:07032610512`（表示は現行表記）
- コントラストは現行トーンを崩さない範囲で確保

### 5.4 SEO

- 各ページ固有の `<title>` / description
- HOME タイトルは現行を踏襲:
  `アラブの民族舞踏・オリエンタルダンス・ヨガ教室 | Eva.oriental Dance Studio | 和歌山市`
- OGP 画像（後で生成写真に差し替え）
- `sitemap.xml` / `robots.txt`
- 旧 URL の 301

## 6. スプレッドシート連携

指定ブックを1つ使い、タブを分ける。ブック URL は未受領。受領後に `GOOGLE_SHEETS_SPREADSHEET_ID` を入れる。

タブ名は実装前にシート実名へ合わせる。案は次のとおり。

| タブ案 | 用途 |
| --- | --- |
| レッスン体験 | `/trial` |
| お問い合わせ | レンタル / アクセス |

サービスアカウントをブックの編集者にする。共有は教室担当と開発者のみ。

### 6.1 レッスン体験 `POST /api/trial`

```json
{
  "name": "山田花子",
  "email": "hana@example.com",
  "phone": "09012345678",
  "classType": "belly-dance",
  "preferredSchedule": "水曜のはじめてさんクラス",
  "experience": "beginner",
  "message": ""
}
```

| 項目 | 規則 |
| --- | --- |
| name | 必須、200文字まで |
| email | 必須、メール形式 |
| phone | 必須、数字とハイフン、20文字まで |
| classType | `belly-dance` / `yoga` / `either` |
| preferredSchedule | 任意、500文字まで |
| experience | 任意、`none` / `some` / `yes` |
| message | 任意、5000文字まで |

タブ「レッスン体験」の列:

| 列 | 内容 |
| --- | --- |
| A | 送信日時（Asia/Tokyo） |
| B | お名前 |
| C | Email |
| D | 電話番号 |
| E | 希望クラス |
| F | 希望日時 |
| G | 経験 |
| H | ご質問・メモ |

### 6.2 お問い合わせ `POST /api/contact`

```json
{
  "name": "山田花子",
  "email": "hana@example.com",
  "subject": "レンタル希望",
  "message": "土曜午後に2時間",
  "source": "studio-rental"
}
```

`source` は `studio-rental` または `access`。

| 項目 | 規則 |
| --- | --- |
| name | 必須、200文字まで |
| email | 必須、メール形式、200文字まで |
| subject | 任意、200文字まで |
| message | 任意、5000文字まで |
| source | 上記2値のみ |

タブ「お問い合わせ」の列:

| 列 | 内容 |
| --- | --- |
| A | 送信日時（Asia/Tokyo） |
| B | お名前 |
| C | Email |
| D | 件名 |
| E | 本文 |
| F | 送信元ページ |

ボット対策は両フォームに honeypot。reCAPTCHA は必須にしない。

### 6.4 応答と画面状態

体験・問い合わせで同じ演出にする。成功文言は API 到着と同時に出さない。

| クライアント状態 | きっかけ | 画面 |
| --- | --- | --- |
| `idle` | 初期 / エラーから復帰 | 入力可、送信可 |
| `sending` | バリデーション通過後、fetch 開始 | 送信中アニメ。ボタン無効。文言は出さない |
| `complete` | API が 2xx を返した直後 | 完了アニメ → その演出をフェードアウト |
| `success` | フェードアウト終了 | `詳細が無事送信されました！` |
| `error` | 4xx / 5xx / タイムアウト / ネットワーク | 送信中を止め、完了アニメは出さず、再送信可 |

タイミング:

1. `sending` はレスポンスが返るまで続ける。最低表示時間は設けない（レスが早ければすぐ `complete`）
2. `complete` の再生が終わってからフェードアウトする（目安 400–600ms の完了、200–300ms のフェード）
3. フェードが終わってから成功文言を出す
4. 送信中に離脱されても、サーバー側の追記は通常どおり行う

| 結果 | HTTP | 画面 |
| --- | --- | --- |
| 成功 | 200 | 上記 `complete` → `success` |
| 入力不正 | 400 | `error`。項目下に短いエラー |
| サーバー失敗 | 500 | `error`。再送信を促す。電話番号は出しておく |

メール通知は第1期の必須にしない。必要な場合はシートの「メール通知」か Resend 等を第2期で足す。

### 6.5 使わないこと

- DB への保存
- 送信内容のサーバーログへの本文出力
- クライアントからの Sheets API 直叩き（キーを晒さない）

## 7. 外部連携

| 先 | 実装 |
| --- | --- |
| LINE `@brc5102p` | テキスト表示。可能なら `https://line.me/R/ti/p/@brc5102p` |
| reserva.be | 通常予約用の外部リンクとして残す |
| 旧 Google フォーム | 使わない。旧リンクは `/trial` へ誘導してよい |
| SNS / 協会 / Ameba | 現行 URL |
| Google マップ | Embed。住所は `和歌山市本町四丁目38 本町中央ビル3F` |
| PDF | `/public/files` に置き、Wix filesusr URL へ依存しない |

## 8. 画像方針

1. 第1期: 枠 + プレースホルダ（現行に近い暗いオリエンタル調）
2. 後工程: AI 生成画像を同パスへ上書き
3. 現行写真を書き出せる場合はそれを優先してよい

ディレクトリ案:

```
public/
  images/
    brand/          ロゴ、EVAアイコン
    home/
    profile/
    gallery/
    placeholders/
  files/
    schedules/
    flyers/
```

ギャラリーはメタデータ（キャプション、並び、年）とファイル名を分離する。

## 9. 環境変数

Vercel の Production / Preview に置く。Git に含めない。

```
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY=
GOOGLE_SHEETS_SPREADSHEET_ID=
GOOGLE_SHEETS_TAB_TRIAL=レッスン体験
GOOGLE_SHEETS_TAB_CONTACT=お問い合わせ
```

ローカルは `.env.local`。サンプルは `.env.example` にキー名だけ書く。

## 10. ディレクトリ案

```
app/
  layout.tsx
  page.tsx
  profile/page.tsx
  belly-dance/page.tsx
  yoga/page.tsx
  events/page.tsx
  gallery/page.tsx
  studio-rental/page.tsx
  access/page.tsx
  schedule/page.tsx
  trial/page.tsx
  api/contact/route.ts
  api/trial/route.ts
  sitemap.ts
  robots.ts
components/
  layout/
  home/
  events/
  gallery/
  forms/
content/
lib/
  sheets.ts
  validations.ts
public/
```

## 11. 品質

### 11.1 動作確認

- 全ページが 200 で返る
- ナビ8本とフッター導線が切れていない
- 体験送信で「レッスン体験」タブに行が増える
- 問合せ送信で「お問い合わせ」タブに行が増える
- バリデーション失敗でどちらにも行が増えない
- 送信中は成功文言を出さず、完了アニメとフェードのあとで `詳細が無事送信されました！` が出る
- History の各年が開き、旧年別 URL が `/events#history-…` へ飛ぶ
- 主要幅: 375 / 768 / 1280
- 旧 URL が新 URL へリダイレクトされる

### 11.2 性能の目安

- ヒーローとギャラリー以外の LCP 画像は1枚に抑える
- ギャラリーは遅延読み込み
- フォントは2系統まで

### 11.3 セキュリティ

- Sheets 認証情報はサーバーのみ
- フォームにレート制限（同一 IP で短時間に連続送信しない）
- `X-Content-Type-Options` 等は Vercel / Next 既定に任せる

## 12. リリース

1. GitHub リポジトリ（または同等）へ push
2. Vercel プロジェクト作成、環境変数設定
3. プレビューで文言・導線・フォームを確認
4. 本番ドメインを当てる（未定なら `*.vercel.app`）
5. 旧 Wix を残す場合は、可能なら Wix 側でも転送

DNS と独自ドメインの有無は実装前に確定する。

## 13. 第1期 / 第2期

第1期:

- 全ページ静的再構築
- 体験・問合せ → 指定シートの各タブ
- EVENT の History 枠（年別ページなし）
- 旧年別 URL のハッシュリダイレクト
- 画像枠
- Vercel 公開

第2期（任意）:

- 教室側でお知らせを直編集
- 送信メール通知
- 月間スケジュールのテキスト化
- 現行写真の正式書き出し、または AI 画像の本適用
- 独自ドメイン、Analytics

## 14. 未確定（実装を止めるもの）

1. 指定スプレッドシートの URL（未受領）
2. 体験フォーム項目案の確定
3. シート上の実際のタブ名
4. 独自ドメイン
5. フォーム到着メールの要否
6. 誤字を現行維持するか
7. Google サービスアカウントは誰が発行するか
