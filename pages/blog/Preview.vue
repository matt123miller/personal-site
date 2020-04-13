<template>
  <div class="mt-4">
    <h3 class="mb-4">
      <nuxt-link :to="url">{{ title }}</nuxt-link>
      <a :href="url">{{ title }}</a>
    </h3>
    <div class="mb-8">{{ snippet }}</div>
    <nuxt-link v-if="src" :to="url">
      {{ title }}
      <img :src="src" :alt="alt" />
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: "BlogPreview",
  props: {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    snippet: {
      type: String,
      required: true
    },
    src: String,
    alt: String
  },
  data() {
    return {};
  }
};
</script>