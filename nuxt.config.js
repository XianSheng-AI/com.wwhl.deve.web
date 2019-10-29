const pkg = require('./package')


module.exports = {
  // mode: 'universal',
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      // {src:'https://cdn.bootcss.com/velocity/2.0.5/velocity.js'}
      {src:'https://unpkg.com/better-scroll/dist/bscroll.min.js'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },

  /*
  ** Global CSS
  */
  css: [
    { src:'~assets/styles/normailze.css' },
    { src:'swiper/dist/css/swiper.css' }],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{src:'~plugins/vue-swiper',ssr:false},
  {src:'~plugins/velocity',ssr:false},
  // {src: '~plugins/better-scroll',ssr:false}
],
  // { src: "~/plugins/vue-swiper.js", ssr: false }],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */


    // extend(config, ctx) {
    //
    // }
  }
}
