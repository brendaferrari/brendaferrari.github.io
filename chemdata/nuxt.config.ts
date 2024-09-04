// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: { 
    baseURL: "/brendaferrari.github.io/",
    pageTransition: {name: 'page', mode: 'out-in'},
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  }

  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  content: { 
    highlight: { 
      langs: ['python'],
      theme: { 
        default: 'min-light',
        dark: 'min-dark'
      } 
    }
  },
  css: ['~/assets/styles/main.css'],
  colorMode: {
    classSuffix: ''
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  generate:{
    nojekyll: true, //not working on this version
    fallback: '404.html',
  },
  ssr: false, //When false
  target: "static", // and static, nuxt generates a SPA
  
})
