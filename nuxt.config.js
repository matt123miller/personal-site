import path from 'path';
import Mode from 'frontmatter-markdown-loader/mode';

import pkg from './package';
// import blogs from './content/blogs/blogs.js';

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
            // const rule = config.module.rules.find(
            //     r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i'
            // );
            // config.module.rules.splice(config.module.rules.indexOf(rule), 1);

            // config.module.rules.push({
            //     test: /\.md$/,
            //     loader: 'frontmatter-markdown-loader',
            //     include: path.resolve(__dirname, 'contents'),
            //     options: {
            //         mode: [Mode.VUE_RENDER_FUNCTIONS],
            //         vue: {
            //             root: "dynamicMarkdown"
            //         }
            //     }
            // }, {
            //     test: /\.(jpe?g|png)$/i,
            //     loader: 'responsive-loader',
            //     options: {
            //         placeholder: true,
            //         quality: 60,
            //         size: 1400,
            //         adapter: require('responsive-loader/sharp')
            //     }
            // }, {
            //     test: /\.(gif|svg)$/,
            //     loader: 'url-loader',
            //     query: {
            //         limit: 1000,
            //         name: 'img/[name].[hash:7].[ext]'
            //     }
            // });
        },
    },

    // generate: {
        // routes: [...blogs.map(w => `/blog/${w}`)],
    // },
};
