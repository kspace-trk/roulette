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
          content: '幹事決めルーレットアプリ' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
