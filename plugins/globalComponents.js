import Vue from 'vue'
// import ImageResponsive from "~/components/global/ImageResponsive.vue";
import CodeExample from "~/components/global/CodeExample.vue"
import VueHighlightJS from 'vue-highlightjs';

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)
// Vue.component('ImageResponsive', ImageResponsive)
Vue.component('CodeExample', CodeExample)