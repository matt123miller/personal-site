<template>
  <div>
    blog content here?
    {{ el }}
  </div>
</template>

<script>
import sanityClient from "@sanity/client";
import blocksToHtml from "@sanity/block-content-to-html";

const client = sanityClient({
  projectId: "14mnylm0",
  dataset: "blog-content",
  useCdn: false
});

// Create a general purpose one? 
// OR is this only used in the blog page?
const h = blocksToHtml.h;

const serializers = {
  types: {
    code: props =>
      h("pre", { className: props.node.language }, h("code", props.node.code))
  }
};


export default {
  name: "Blogs",
  async asyncData({ req }) {
    try {

      const query = "*[_type == 'post']";
      const params = {}; // provide some sort of limit?
      const posts = await client.fetch(query, params);

// need to not treat it as array, come back here

const el = blocksToHtml({
        blocks: posts[0].body,
        serializers: serializers,
        projectId: "14mnylm0",
        dataset: "blog-content"
      });

      return {
        el 
      };
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style>
</style>