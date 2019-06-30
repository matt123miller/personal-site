<template>
  <div>
    <h1 class="title">Lorem ipsum dolor sit amet</h1>
    <h2 class="subtitle">consectetur adipiscing elit</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <SocialLinks/>
  </div>
</template>

<script>
import SocialLinks from "~/components/SocialLinks.vue";
export default {
  name: "about",
  components: {
    SocialLinks
  }
};
</script>
