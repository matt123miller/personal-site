<template>
  <div>
    <pre v-highlightjs>
        <code class="csharp">
          {{ snippet }}
        </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: "CodeExample",
  props: {
    snippet: {
      type: String,
      required: true,
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>