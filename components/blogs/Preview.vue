<template>
    <div class="mt-4">
        <h3 class="mb-4">
            <a :href="url">{{title}}</a>
        </h3>
        <div class="mb-8">
            {{snippet}}
        </div>
        <a :href="url">
            <img :src="src" :alt="alt">
        </a>
    </div>
</template>
<script>
export default {
    name: 'BlogPreview',
    props: ['title', 'url', 'snippet', 'src', 'alt'],
    data() {
        return {}
    }
}
</script>