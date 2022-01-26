module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Qaz Bio Medical',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/index.scss',
    '~assets/styles/spacer.scss',
  ],

  // GLOBAL SCSS
  styleResources: {
    scss: [
      '~assets/styles/variables.scss',
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/base',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  ssr: true,

  target: 'static',

  //  Are you interested in participating? No
  telemetry: false,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'qazbiomedical@mail.ru',
      },
      smtp: {
        host: "smtp.example.com",
        port: 587,
      },
    }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

