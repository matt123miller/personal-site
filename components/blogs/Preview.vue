<template>
    <div class="mt-4">
        <h3>
            <a :href="url">{{title}}</a>
        </h3>
        <div>
            {{snippet}}
        </div>
        <img :src="src" :alt="alt">
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