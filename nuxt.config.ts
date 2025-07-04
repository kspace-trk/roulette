  // https://nuxt.com/docs/api/configuration/nuxt-config
  export default defineNuxtConfig({
    devtools: { enabled: false },
    ssr: false, // SPAモードを維持
    app: {
      head: {
        title: 'ルーレットアプリ',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { 
            name: 'description', 
            content: '幹事決めや抽選に最適なルーレットアプリ！項目を自由に追加・削除してオリジナルのルーレットを作成できます。' 
          },
          { 
            name: 'keywords', 
            content: 'ルーレット,幹事決め,抽選,くじ引き,決定,ランダム,選択,ゲーム,web app' 
          },
          { name: 'author', content: 'Roulette App' },
          
          // Open Graph
          { property: 'og:title', content: 'ルーレットアプリ | 幹事決めや抽選に最適' },
          { 
            property: 'og:description', 
            content: '幹事決めや抽選に最適なルーレットアプリ！項目を自由に追加・削除してオリジナルのルーレットを作成できます。' 
          },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://roulette-woad.vercel.app/' },
          { property: 'og:image', content: 'https://roulette-woad.vercel.app/og-image.svg' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:site_name', content: 'ルーレットアプリ' },
          { property: 'og:locale', content: 'ja_JP' },
          
          // Twitter Card
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'ルーレットアプリ | 幹事決めや抽選に最適' },
          { 
            name: 'twitter:description', 
            content: '幹事決めや抽選に最適なルーレットアプリ！項目を自由に追加・削除してオリジナルのルーレットを作成できます。' 
          },
          { name: 'twitter:image', content: '/og-image.svg' },
          
          // 追加のメタ情報
          { name: 'theme-color', content: '#FF6B6B' },
          { name: 'mobile-web-app-capable', content: 'yes' },
          { name: 'apple-mobile-web-app-capable', content: 'yes' },
          { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
          { name: 'apple-mobile-web-app-title', content: 'ルーレットアプリ' }
        ],
        link: [
          { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
          { rel: 'manifest', href: '/manifest.json' },
          { rel: 'canonical', href: 'https://roulette-woad.vercel.app/' },
          { rel: 'apple-touch-icon', href: '/favicon.svg' }
        ]
      }
    },
    css: [],
    plugins: [],
    modules: [],
    nitro: {
      preset: 'static'
    }
  })
