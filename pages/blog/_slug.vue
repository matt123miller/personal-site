<template>
  <div v-html="postHTML">
  </div>
</template>

<script>

import { getPostWithSlug, transformContentToHtml } from "./APIClient";

export default {
  data () {
    return {
      story: { content: { body: '' } }
    }
  },

 async asyncData ({ params, error }) {
    try {
      const post = await getPostWithSlug(params.slug);
      const postHTML = transformContentToHtml(post.body);

      return { postHTML };
    } catch (e) {
      error({ message: 'Post not found', statusCode: 404 })
    }
  }
}
</script>