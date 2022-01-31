module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ТОО "Qaz Bio Medical"',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Поверка средств измерений и мединцинского оборудывания' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }
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
        to: 'manager@qazbm.kz',
      },
      smtp: {
        host: "qazbm.kz",
        port: 465,
        auth: {
          user: 'manager@qazbm.kz',
          pass: 'xojb_GBiOCb2',
        },
      },
    }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

