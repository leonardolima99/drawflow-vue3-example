<template>
  <div class="header">{{ title }}</div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["title"],
});
</script>

<style scoped>
div {
  background: #494949;
  margin-top: -16px;
  margin-left: -16px;
  margin-right: -16px;
  padding: 8px 16px;
  margin-bottom: 16px;
}
</style>
