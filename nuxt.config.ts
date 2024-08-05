import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },

  css: [
    '@/assets/css/style.global.css'
  ],
  app: {
    head: {
      title: 'BiggerThanthesun', // Set the default title
      link: [
        { rel: 'icon', type: 'image/png', href: 'https://i.ibb.co/dGZBzpp/profile2.png' } // External favicon link
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@vueuse/motion/nuxt', // Add VueUse Motion module
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error 
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    // ...
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  devServer: {
    port: 4000
  }
})
