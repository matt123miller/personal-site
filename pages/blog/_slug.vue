<template>
  <div>hello world?</div>
</template>

<script>
export default {
  data () {
    return {
      story: { content: { body: '' } }
    }
  },
  async asyncData() {
    // get the full blog page and all that
    return {}
  }
}
</script>