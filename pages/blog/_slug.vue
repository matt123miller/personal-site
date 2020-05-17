/* eslint-disable vue/no-v-html */

<template>
  <div>
    <h1 class="mb-8">{{ title }}</h1>
    <img
      class="centered block mb-4"
      :src="mainImage"
    >
    <div 
      class="mb-4 blog-text" 
      v-html="postHTML"
    />
    <nuxt-link :to="'/blog'">
      Go Back
    </nuxt-link>
  </div>
</template>

<script>
import {
  getPostWithSlug,
  transformContentToHtml,
  imageFromSource
} from "./APIClient";

export default {
  head() {
    return {
      title: this.title
    };
  },
  asyncData({ params, error }) {
    return getPostWithSlug(params.slug)
      .then(post => {
        const postHTML = transformContentToHtml(post.body);

        return {
          postHTML,
          title: post.title,
          mainImage: imageFromSource(post.mainImage)
            .width(200) // TODO: Dyanimc image sizing? Probably send full image and let css do it? Or srcset?
            .url()
        };
      })
      .catch(e => {
        error({ message: "Post not found", statusCode: 404 });
      });
  }
};
</script>
