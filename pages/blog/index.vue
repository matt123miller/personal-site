<template>
  <div>
    <h1 class="mb-16">
      Blog
    </h1>
  
    <p class="text-loud mb-4">
      You can expect to see posts about what I do behind the keyboard and away from it. This includes 
      programming, miniature painting, Dungeons & Dragons and whatever else I want to write about. 
      I want to focus on programming topics I think will be useful for other developers, especially juniors.
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
import Preview from "./Preview";
import { getAllPosts, imageFromSource } from "./APIClient";


export default {
  name: "Blog",
  components: { Preview },
  head() {
    return 'Matt Miller - Blog';
  },
  async asyncData({ req }) {
    try {

      const posts = await getAllPosts();

      const recentBlogs = posts.map(p => {

        const image = imageFromSource(p.mainImage);
        
        return { 
          title: p.title,
          url: '/blog/' + p.slug.current,
          title: p.title,
          snippet: p.snippet,
          image: {
            src: image.width(200).height(200).url(),
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