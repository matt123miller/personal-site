<template>
  <div v-html="content">
  </div>
</template>

<script>

import { getPostWithId } from "./APIClient";

export default {
  data () {
    return {
      story: { content: { body: '' } }
    }
  },

 async asyncData ({ params, error }) {
    try {
      const content = await getPostWithId(params.slug);
      return { content };
    } catch (e) {
      error({ message: 'Post not found', statusCode: 404 })
    }
  }
}
</script>