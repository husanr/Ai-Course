<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav> -->
        <LayoutHeader />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Menu />
        </el-aside>
        <el-container>
          <el-main>
            <RouterView />
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from "@/components/aside/menu.vue"
import LayoutHeader from "@/components/header/index.vue"
</script>
<style>
.common-layout {
  width: 100%;
  height: 100%;
  padding: 30px;
  background: #fa998d;
  border-radius: 50px;
}
</style>