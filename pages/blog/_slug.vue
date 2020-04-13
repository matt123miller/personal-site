<template>
  <div>
    <h1 class="mb-8">{{ title }}</h1>
    <img class="mb-4" :src="mainImage" />
    <div class="mb-4" v-html="postHTML"></div>
    <div>return to blogs?</div>
  </div>
</template>

<script>
import {
  getPostWithSlug,
  transformContentToHtml,
  imageFromSource
} from "./APIClient";

export default {
  asyncData({ params, error }) {
    return getPostWithSlug(params.slug)
      .then(post => {
        const postHTML = transformContentToHtml(post.body);

        return {
          postHTML,
          title: post.title,
          mainImage: imageFromSource(post.mainImage).url()
        };
      })
      .catch(e => {
        error({ message: "Post not found", statusCode: 404 });
      });
  }
};
</script>