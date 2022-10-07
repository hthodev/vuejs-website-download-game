export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'webstore',
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
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'~/plugins/vuelidate'},
    { src: '~/plugins/sweetalert2', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    //nuxt/auth
    "@nuxtjs/auth",
    //
    "vue2-editor/nuxt"

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: "http://localhost:5000/api",
    proxyHeaders: false,
    credentials: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'account/signin',
            method: 'post',
            propertyName: 'token',
          },
          user: {
            url: 'account/user',
            method: 'get',
            propertyName: false,
          },
        },
        tokenType: '',
        logout: false,
      },
    },
    watchLoggedIn: true,
    redirect:{
      login:'/signin',
      logout:'/signin',
      callback: "/signin"
    }
  },
}
