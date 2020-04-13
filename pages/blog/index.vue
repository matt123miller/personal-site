<template>
  <div>
    <h1 class="mb-8">
      Blogs
    </h1>
    <p
      class="mb-4"
    >
      Here and there I write an article about tech and my hobbies. I want to focus on programming topics I think will be useful for other developers, especially juniors.
    </p>
    <p class="mb-4">
      You can expect to see posts about what I do behind the keyboard and away from it. This includes 
      JavaScript, C#, miniature painting, Dungeons & Dragons and whatever else I want to write about.
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
import { getAllPosts } from "./APIClient";


export default {
  name: "Blogs",
  components: { Preview },
  async asyncData({ req }) {
    try {

      const posts = await getAllPosts();

      const recentBlogs = posts.map(p => {
        return { 
          title: p.title,
          url: '/blog/' + p.slug.current,
          title: p.title,
          snippet: p.snippet,
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