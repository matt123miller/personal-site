<template>
  <div>
    <h1 class="mb-8">
      Blogs
    </h1>
    <p class="big mb-4">
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
    <div>{{ block }}</div>
  </div>
</template>

<script>

import Preview from '~/components/blogs/Preview.vue';
import  sanityClient from  '@sanity/client';
import blocksToHtml from '@sanity/block-content-to-html';

// let recentBlogs = [
    // {
    //     url:'/blogs',
    //     title: 'Example blog preview',
    //     snippet: 'Currently I have no posts, but if I did the preview might look like this! ',
    //     image: {
    //         src: 'https://placeimg.com/480/480/tech', // url
    //         alt: 'a sample image'
    //     }
    // },
    // {
    //     url:'/blogs/2',
    //     title: 'Hello World',
    //     snippet: 'this is a preview of the post. Max 100 characters?',
    //     image: {
    //         src: 'https://placeimg.com/480/480/tech', // url
    //         alt: 'a sample image'
    //     }
    // },
    // {
    //     url:'/blogs/3',
    //     title: 'Hello World',
    //     snippet: 'this is a preview of the post. Max 100 characters?',
    //     image: {
    //         src: 'https://placeimg.com/480/480/tech', // url
    //         alt: 'a sample image'
    //     }
    // },
// ];



const client = sanityClient({
  projectId: '14mnylm0',
  dataset: 'blog-content',
  token: 'ken', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})


const h = blocksToHtml.h

const serializers = {
  types: {
    code: props => (
      h('pre', { className: props.node.language },
        h('code', props.node.code)
      )
    )
  }
}

export default {
  name: 'Blogs',
    components : { Preview },
    async asyncData ({ req }) {
      
      
      const res = await client.fetch("*[_type == 'post'][0]")
      const el = blocksToHtml({
        blocks: res.body,
        serializers: serializers,
        projectId: '14mnylm0',
        dataset: 'blog-content'
      })
    
      return {
        // recentBlogs
        block: el
      }
    }
}
</script>

<style>
</style>