# Eva.Oriental サイトリプレース準備資料

調査日: 2026-09-02  
現行サイト: https://evakoriental.wixsite.com/belly

Wix 上の現行サイトを、**伝える内容・デザインベース・文言・アイコンは変えず**、UI/UX を Next.js で置き換えるための準備一式です。写真は後工程で、現行に近いテイストの AI 生成を想定しています。

## 資料一覧

| 資料 | 内容 |
| --- | --- |
| [01-content-inventory.md](./01-content-inventory.md) | ページごとの動線・文言・外部リンクの全文メモ |
| [02-sitemap-and-user-flows.md](./02-sitemap-and-user-flows.md) | サイトマップとユーザー動線 |
| [03-wireframes.md](./03-wireframes.md) | ページ別ワイヤーフレーム |
| [04-business-definition.md](./04-business-definition.md) | 業務定義書 |
| [05-technical-requirements.md](./05-technical-requirements.md) | 技術要件書 |

## 確定している前提

- 文言・伝える内容・デザインベース・アイコンは変更しない
- 写真は現時点で差し替え用がないため、後工程で AI 生成する
- お問い合わせとレッスン体験は DB ではなく、指定の Google スプレッドシートへ追記する
- イベント年別アーカイブは独立ページにせず、EVENT 内の History 枠にまとめる
- レイアウトはレスポンシブ（目安: 375 / 768 / 1280）
- デプロイ先は Vercel

## コーディング開始前に確認すること

1. スプレッドシートの URL（「こちらを使う」とのことだが、この会話には未添付）
2. レッスン体験フォームの項目案でよいか（業務定義書 3.3）
3. 既存の誤字・表記ゆれをそのまま残すか
4. 独自ドメインの有無
5. フォーム到着時のメール通知の要否
