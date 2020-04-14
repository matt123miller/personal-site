<template>
  <div id="nuxttoplevel">
    <div>
      <Header />
      <Nav />
    </div>
    <div
      class="mt-32 min-h-screen w-full pl-12 pr-12 lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 lg:pl-16 lg:pr-16 xl:w-4/5 float-right"
    >
      <div
        id="content-container"
        class="container flex-col"
      >
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

export default {
  components: {
    Header,
    Nav,
    // Footer
  },
  head() {
    return {
      title: "Matt Miller"
    };
  },
  async asyncData({ app }) {}
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
