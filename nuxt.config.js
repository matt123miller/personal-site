import path from 'path';
import Mode from 'frontmatter-markdown-loader/mode';

import pkg from './package';

const builtAt = new Date().toISOString();

const baseUrl = 'https://matt123miller.dev';

export default {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description,
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    /*
     ** Customize the progress-bar color
     */
     loading: { color: '#fff' },

     /*
     ** Global CSS
     */
    css: ['~/assets/css/tailwind.css'],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~/plugins/lazyload', '~/plugins/globalComponents'],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
    ],
    // modules: ['@nuxtjs/style-resources', 'nuxt-webfontloader'],
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, { isDev, isClient }) {
            // Run ESLint on save
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });
            }
        },
    },

    // generate: {
        // routes: [...blogs.map(w => `/blog/${w}`)],
    // },
};
