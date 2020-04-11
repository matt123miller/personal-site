<template>
  <div>
    <h1 class="mb-8">Blogs</h1>
    <p
      class="big mb-4"
    >
    Here and there I write an article about tech and my hobbies. I want to focus on programming topics I think will be useful for other developers, especially juniors.
    </p>
    <Preview
      v-for="(item, index) in recentBlogs"
      :key="index"
      :url="item.url"
      :title="item.title"
      :snippet="item.snippet"
      :src="item.image.src"
      :alt="item.image.alt"
    />

  </div>
</template>

<script>
import Preview from "~/components/blogs/Preview.vue";
import sanityClient from "@sanity/client";
import blocksToHtml from "@sanity/block-content-to-html";

const client = sanityClient({
  projectId: "14mnylm0",
  dataset: "blog-content",
  useCdn: false
});

// Create a general purpose one? 
// OR is this only used in the blog page?
// const h = blocksToHtml.h;

// const serializers = {
//   types: {
//     code: props =>
//       h("pre", { className: props.node.language }, h("code", props.node.code))
//   }
// };

// const el = blocksToHtml({
//         blocks: res.body,
//         serializers: serializers,
//         projectId: "14mnylm0",
//         dataset: "blog-content"
//       });

export default {
  name: "Blogs",
  components: { Preview },
  async asyncData({ req }) {
    try {

      const query = "*[_type == 'post']";
      const params = {}; // provide some sort of limit?
      const posts = await client.fetch(query, params);

      const recentBlogs = posts.map(p => {
        return { 
          title: p.title,
          url: '/blogs/' + p.slug.current,
          title: p.title,
          snippet: 'work in progress...',
          image: {
            src: undefined,
            alt: undefined
          }
          //come back to image later. Do I need any parsing? Or a top level image?
          // How do i know the url?
        }
      })

      return {
        recentBlogs
      };
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style>
</style>