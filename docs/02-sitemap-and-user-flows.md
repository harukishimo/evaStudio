# サイトマップとユーザー動線

調査日: 2026-09-02  
現行サイト: https://evakoriental.wixsite.com/belly

## 1. グローバルナビ（全ページ共通）

```
HOME | PROFILE | ベリーダンス | ヨガ&ピラティス | EVENT | GALLERY | スタジオレンタル | アクセス
```

ヘッダー上段は固定コピーです。

- タグライン: `和歌山市のベリーダンス・ヨガ・ピラティススタジオ`
- ロゴ: `エヴァ オリエンタル` / `Eva.Oriental`

## 2. 現行 URL と提案ルート

Wix のスラッグは内部名のまま残っています。Next.js では意味の通るパスにし、現行 URL からはリダイレクトします。

| 種別 | ナビ名 | 現行 URL | 提案ルート |
| --- | --- | --- | --- |
| グローバル | HOME | `/belly` | `/` |
| グローバル | PROFILE | `/belly/about` | `/profile` |
| グローバル | ベリーダンス | `/belly/personal-readings` | `/belly-dance` |
| グローバル | ヨガ&ピラティス | `/belly/blank-5` | `/yoga` |
| グローバル | EVENT | `/belly/classes-and-seminars` | `/events` |
| グローバル | GALLERY | `/belly/large-grid` | `/gallery` |
| グローバル | スタジオレンタル | `/belly/untitled` | `/studio-rental` |
| グローバル | アクセス | `/belly/複製-studio` | `/access` |
| サブ | スケジュール | `/belly/複製-yoga-ボディワーク` | `/schedule` |
| サブ | レッスン体験 | （現行は Google フォーム） | `/trial` |
| サブ | アラブバンドLive | `/belly/live` | `/events#live` |
| アーカイブ | 2022・2023年 | `/belly/複製-2020年event情報` | `/events#history-2022-2023` |
| アーカイブ | 2020・2021年 | `/belly/複製-2019年event情報` | `/events#history-2020-2021` |
| アーカイブ | 2019年 | `/belly/2018-event-1` | `/events#history-2019` |
| アーカイブ | 2018年 | `/belly/2018-event` | `/events#history-2018` |
| アーカイブ | 2017年 | `/belly/2017` | `/events#history-2017` |
| アーカイブ | 2016年 | `/belly/2016-event` | `/events#history-2016` |
| アーカイブ | 2015年 | `/belly/blank-nyz1j` | `/events#history-2015` |

## 3. サイトマップ

```text
Eva.Oriental
├── HOME
│   ├── ベリーダンス（カテゴリ入口）
│   ├── ヨガ＆ピラティス（カテゴリ入口）
│   ├── レッスンスケジュール
│   ├── レッスン体験フォーム
│   ├── 予約システム（reserva.be / 在籍・通常予約用に残す）
│   └── スタジオレンタル
├── PROFILE
├── ベリーダンス
│   └── レッスン体験
├── ヨガ&ピラティス
│   ├── Zoomオンラインスケジュール
│   └── レッスン体験
├── EVENT
│   ├── 出演イベント（直近）
│   └── History（2015〜直近の過去。年で開閉）
├── GALLERY
├── スタジオレンタル
│   └── お問い合わせフォーム
├── アクセス
│   └── お問い合わせフォーム
├── レッスン体験（ナビ外）
│   └── 体験申込フォーム → スプレッドシート
└── スケジュール（ナビ外）
    ├── レッスン体験
    └── スケジュールPDF
```

## 4. ユーザー動線

### 4.1 レッスンを探す / 体験する

```text
HOME
  → ベリーダンス or ヨガ＆ピラティス
  → クラス説明・曜日時間を読む
  → /trial レッスン体験フォーム
      → スプレッドシート「レッスン体験」タブに1行追加
  → スケジュール画像で日程確認
  → 通常予約が必要なら reserva.be（任意・現行維持）
  → 補足連絡は LINE（現行案内を残す）
```

体験はサイト内フォームが主経路です。Google フォームは使わない。

### 4.2 イベントを知る

```text
HOME「What's New / UPCOMING EVENT」
  → EVENT
      → 直近の出演イベント
      → History 枠（年を開いて過去公演を読む）
      → PDFチラシ
```

### 4.3 スタジオを借りる

```text
HOME フッター「スタジオレンタル」
  または ナビ「スタジオレンタル」
    → 広さ・住所・注意事項
    → お問い合わせフォーム送信
      → Google スプレッドシートに1行追加
```

アクセスページからも同じフォームで問い合わせできます。

### 4.4 教室の場所を確認する

```text
ナビ「アクセス」
  → 住所 + Google マップ
  → 電話 / フォーム / レンタル案内
```

### 4.5 教室の人を知る

```text
ナビ「PROFILE」
  → Eva.香陽の経歴
  → 公演写真スライダー
  → カンパニーダンサー写真
```

### 4.6 写真を見る

```text
ナビ「GALLERY」
  → 公演サムネイル
  → Show More で追加読み込み
  → 拡大表示（現行は Wix ギャラリー）
```

## 5. グローバルフッター（ほぼ全ページ）

- `Call : 070 3261 0512`
- `@2015 by Eva.K powered by kalcha`
- SNS: Facebook / Instagram / Twitter / Amebaブログ
- 関連: 和歌山オリエンタルダンス協会
- フッター導線: スタジオレンタル
- LINE: `@brc5102p`（「イベント、レッスン情報など配信してます♪」）

## 6. 外部サービス

| 用途 | 行き先 |
| --- | --- |
| レッスン体験 | 自サイト `/trial` → 指定スプレッドシート |
| 通常予約（現行維持） | https://reserva.be/evaspirits |
| 補足連絡 | LINE 公式 `@brc5102p` |
| Facebook | http://www.facebook.com/Eva5110 |
| Instagram | https://www.instagram.com/eva_oriental/ |
| Twitter | https://twitter.com/Eva_Oriental_/ |
| ブログ | http://ameblo.jp/eva-oriental/ |
| 協会サイト | https://orientalassociation.wixsite.com/oriental |
| 地図 | Google マップ埋め込み |
| チラシ・月間表 | Wix filesusr.com 上の PDF / PNG |
