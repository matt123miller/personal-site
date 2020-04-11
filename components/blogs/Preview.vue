<template>
  <div class="mt-4">
    <h3 class="mb-4">
      <a :href="url">{{ title }}</a>
    </h3>
    <div class="mb-8">{{ snippet }}</div>
    <a v-if="src" :href="url">
      <img :src="src" :alt="alt" />
    </a>
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