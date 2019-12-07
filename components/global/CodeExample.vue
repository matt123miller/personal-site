<template>
  <div>
    <pre v-highlightjs>
        <code class="csharp">
          {{snippet}}
        </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: "CodeExample",
  props: ["snippet"],
  data() {
    return {};
  }
};
</script>

<style>
</style>