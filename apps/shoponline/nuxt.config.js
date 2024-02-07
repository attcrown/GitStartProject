import colors from "vuetify/es5/util/colors";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Global",
    title: "ExchengeShop",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    // link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      { rel: "icon", type: "image/jpg", href: "/logoex.jpg" },
      { rel: "apple-touch-icon", href: "/logoex.jpg" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/bootstrap.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    '@nuxtjs/google-fonts'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyBCuqdFQ2p8c-l7B2_aUgAxAIFI4FS76tI",
          authDomain: "goshop-9e571.firebaseapp.com",
          databaseURL: "https://goshop-9e571-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "goshop-9e571",
          storageBucket: "goshop-9e571.appspot.com",
          messagingSenderId: "895114201754",
          appId: "1:895114201754:web:ce1eed14ad14b377ad2d23",
          measurementId: "G-PX5QWDYQE7"
        },
        services: {
          auth: true,
          firestore: true,
          functions: true,
          storage: true,
          database: true,
          messaging: true,
          performance: true,
          appCheck: true,
          analytics: true,
          remoteConfig: true
        },
      },
    ]   
    
  ],
  

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
    proxy: true,
  },
  proxy: {
    '/document-api/': { target: 'http://localhost:3001/', pathRewrite: {'^/document-api/': ''} }
  },  
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  googleFonts: {
    families: {
      Prompt: true, // โหลดสไตล์ทั้งหมดของ Roboto
      'Moirai One':true,
      Kanit: true,
      'Dancing Script': true
    } // กำหนดการแสดงผลเมื่อโหลด Font
  }
};
