# 動的ルーレットアプリ

y軸を中心に回転するネタのルーレットアプリです。
Canvas APIを使用して動的にルーレット盤を生成し、項目の追加・削除が可能です。

## 特徴

- 🎯 **動的な項目管理**: ルーレット項目をリアルタイムで追加・削除可能
- 🎨 **自動カラーリング**: 項目数に応じて自動的に色分けされたセクション
- 📱 **レスポンシブ対応**: スマートフォンでも快適に操作可能
- 🎪 **y軸回転**: 通常のz軸ではなく、y軸を中心とした回転でネタ要素満載
- ⚡ **軽量**: Vue 3 + Nuxt 3による高速な動作
- 🎯 **正確な結果**: 針が指している項目が確実に結果として表示

## 使い方

1. **項目の追加**: 入力フィールドに項目名を入力して「追加」ボタンをクリック
2. **項目の削除**: 各項目の「×」ボタンで個別削除、または「デフォルトに戻す」で初期状態に戻す
3. **ルーレット実行**: 「ルーレットスタート！！！！」ボタンでルーレット開始
4. **結果確認**: 2秒後に針が指している項目が結果として表示

## 技術仕様

- **フレームワーク**: Vue 3 + Nuxt 3
- **描画**: Canvas API
- **アニメーション**: CSS Transform + Keyframes
- **レスポンシブ**: CSS Media Queries

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```
<http://localhost:3000> でアクセス可能

### 本番用ビルド

```bash
npm run build
npm run start
```

### 静的生成

```bash
npm run generate
```

## プロジェクト構成

```
roulette/
├── pages/
│   └── index.vue          # メインのルーレットページ
├── nuxt.config.ts         # Nuxt設定
├── app.vue               # アプリケーションのルート
└── package.json          # 依存関係
```

## ブラウザサポート

- Chrome (推奨)
- Firefox
- Safari
- Edge

Canvas APIを使用しているため、比較的新しいブラウザが必要です。

## ライセンス

MIT License
