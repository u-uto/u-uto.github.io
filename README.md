# u-uto.github.io

LP(ランディングページ)制作のポートフォリオサイトです。GitHub Pages で公開しています。

公開URL: https://u-uto.github.io/

## 掲載作品

| ジャンル | ブランド(架空) | コンバージョン | パス |
| --- | --- | --- | --- |
| エステサロン | SORA | 初回体験の来店予約 | [`lp/beauty/salon/`](lp/beauty/salon/) |
| 化粧品(ファンデーション) | NUANCE | お試しセット購入 | [`lp/beauty/cosmetics/`](lp/beauty/cosmetics/) |
| スキンケア(美容液) | MINAMO | 定期便の初回申込 | [`lp/beauty/skincare/`](lp/beauty/skincare/) |
| サプリメント(機能性表示食品) | YORUNE | 定期便の初回申込 | [`lp/beauty/supplement/`](lp/beauty/supplement/) |
| 脱毛サロン | LISSE | 体験の来店予約 | [`lp/beauty/hair-removal/`](lp/beauty/hair-removal/) |
| ダイエット(パーソナルジム) | STEP | 無料カウンセリング予約 | [`lp/beauty/diet/`](lp/beauty/diet/) |

## ディレクトリ構成

```
.
├── index.html            # ポートフォリオのトップ
├── 404.html              # GitHub Pages 用の404ページ
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── .nojekyll             # Jekyll処理を無効化
├── assets/
│   └── css/style.css     # トップ・一覧・404の共通スタイル
└── lp/
    └── beauty/
        ├── index.html    # 美容LPの一覧
        ├── salon/
        ├── cosmetics/
        ├── skincare/
        ├── supplement/
        ├── hair-removal/
        └── diet/
```

各LPは `index.html` 1ファイルで完結しています(CSS・JSはインライン、外部依存は Google Fonts のみ)。

## 新しいLPを追加するとき

1. `lp/<ジャンル>/<業態>/index.html` を作成
2. `lp/<ジャンル>/index.html` とトップの `index.html` にカードを追加
3. `sitemap.xml` にURLを追加

## ローカルで確認

```bash
python -m http.server 8000
```

http://localhost:8000/ を開きます。

## 注意

掲載しているブランド・店舗・お客様の声・実績はすべてポートフォリオ用の架空のものです。
