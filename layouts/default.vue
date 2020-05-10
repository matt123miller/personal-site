<template>
  <div id="nuxttoplevel">
    <div>
      <Header />
      <Nav />
    </div>
    <div class="mt-32 min-h-screen w-full pl-12 pr-12 lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 lg:pl-16 lg:pr-16 xl:w-4/5 float-right">
      <div id="content-container" class="container flex-col">
        <nuxt />
      </div>
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>
import { EventBus, Events } from "../components/EventBus";
import Header from "../components/Header.vue";
import Nav from "../components/Nav.vue";
// import Footer from "../components/Footer.vue";

// <!-- For Google -->
// <meta name="description" content="" />
// <meta name="keywords" content="" />

// <meta name="author" content="" />
// <meta name="copyright" content="" />
// <meta name="application-name" content="" />

// <!-- For Facebook -->
// <meta property="og:title" content="" />
// <meta property="og:type" content="article" />
// <meta property="og:image" content="" />
// <meta property="og:url" content="" />
// <meta property="og:description" content="" />

// <!-- For Twitter -->
// <meta name="twitter:card" content="summary" />
// <meta name="twitter:title" content="" />
// <meta name="twitter:description" content="" />
// <meta name="twitter:image" content="" />

export default {
  components: {
    Header,
    Nav
    // Footer
  },
  head() {
    const title = 'Matt Miller';
    return {
      title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        // By providing a hid field it means that children components won't be able to overwrite that field in the head?
        // { hid: 'description', name: 'description', content: 'My custom description' },
        { name: "og:title", content: title },
        { name: "og:type", content: "website" },
        { name: "og:description", content: "Matt Miller's personal website and blog" },
        { name: "og:Image", content: "/_nuxt/assets/images/selfie-og.png" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: "Matt Miller's personal website and blog" },
        { name: "twitter:image", content: "/_nuxt/assets/images/selfie-og.png" },
        { name: 'twitter:url', content: this.$nuxt.$route.fullPath }
      ]
    };
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--twitter {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid var(--twitter-blue);
  color: var(--twitter-blue);
  text-decoration: none;
  padding: 10px 30px;
}

.button--twitter:hover {
  color: #fff;
  background-color: var(--twitter-blue);
}

.button--github {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid var(--github-charcoal);
  color: var(--github-charcoal);
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--github:hover {
  color: #fff;
  background-color: var(--github-charcoal);
}
</style>
