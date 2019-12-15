<template>
  <div>
    <h1 class="mb-8">Blogs</h1>
    <p class="big mb-4">
        Here and there I write an article about tech and my hobbies. I want to focus on programming topics I think will be useful for other developers, especially juniors.
    </p>

    <Preview
    v-for="(item, index) in recentBlogs"
    v-bind:key="index"
    v-bind:url="item.url"
    v-bind:title="item.title"
    v-bind:snippet="item.snippet"
    v-bind:src="item.image.src"
    v-bind:alt="item.image.alt"
    />

  </div>
</template>

<script>

import Preview from '~/components/blogs/Preview.vue'

const recentBlogs = [
    {
        url:'/blogs',
        title: 'Example blog preview',
        snippet: 'Currently I have no posts, but if I did the preview might look like this! ',
        image: {
            src: 'https://placeimg.com/480/480/tech', // url
            alt: 'a sample image'
        }
    },
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
];
export default {
    name: 'blogs',
    components : { Preview },
    data() {
        return {
            recentBlogs
        }
    }
}
</script>

<style>
</style>