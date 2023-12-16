<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
  </el-radio-group>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1">
      <el-icon style="color:white;"><icon-menu /></el-icon>
      <template #title><h3>新建课程</h3></template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon style="color:white;"><document /></el-icon>
      <template #title><h3>课程中心</h3></template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon style="color:white;"><setting /></el-icon>
      <template #title><h3>素材中心</h3></template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref, computed } from 'vue'
import { store } from "@/store"
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import router from "@/router"

// const isCollapse = ref(store.collapse)
const isCollapse = computed(() => {
  return store.collapse
})
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

const toHome = () => {
  router.push('/')
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  background-color:transparent;
  margin-top: 30px
}

h3 {
  font-size: 19px;
  color: #fff
}
</style>
