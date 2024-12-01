<script setup>
import HeaderNav from "@/views/headerNav.vue";
import NavMenu from "@/views/navMenu.vue";
import Main from "@/views/main.vue";
import { ref } from "vue";
let title = ref("view/index.vue 首页");
</script>
<template>
  <el-container>
    <NavMenu />
    <el-container>
      <el-header>
        <HeaderNav />
      </el-header>
      <el-main>
        <Main />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped></style>
