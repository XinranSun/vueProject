<script setup lang="ts">
import { ref } from "vue";
let title = ref("App.vue - 首页");
</script>
<template>
  <div>
    {{ title }}
  </div>
  <router-view></router-view>
</template>
<style scoped></style>
