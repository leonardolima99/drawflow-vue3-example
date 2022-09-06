<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import drawflow from "./components/drawflow.vue";
</script>

<template>
  <drawflow />
</template>

<style>
*,
:after,
:before {
  box-sizing: border-box;
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
html {
  padding: 0;
  margin: 0;
  overflow: hidden;
  background: transparent;
}
body {
  max-width: 100vw;
  max-height: 100vh;
  padding: 0;
  background: #6e6e6e;
  color: #f5f5f5;
}

#app {
  min-height: 100vh;
}
.el-main {
  padding: 0;
}
</style>
