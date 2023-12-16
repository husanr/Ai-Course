<template>
  <div class="common-layout">
    <el-container>
      <el-header height="40px">
        <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav> -->
        <LayoutHeader />
      </el-header>
      <el-container>
        <el-aside  :width="sideWidth" >
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
import { ref, computed } from "vue"
import { RouterLink, RouterView } from 'vue-router'
import Menu from "@/components/aside/menu.vue"
import LayoutHeader from "@/components/header/index.vue"
import { store } from "./store";

const sideWidth = computed(() => {
  return store.collapse ? "80px" : "200px"
})
</script>
<style>
.common-layout {
  width: 100%;
  height: 100%;
  padding: 20px;
  /* background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%); */
  background-image: linear-gradient(-225deg, #375FE6 0%, #df32bc 100%);
  /* border-radius: 50px; */
  box-sizing: border-box;
}
.submit_btn {
  width: 220px;
  line-height: 40px;
  color: #fff;
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  /* margin-top: 20px; */
  font-size: medium;
  margin: 14px auto;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
#el-id {
  border-right: solid 1px var(--el-menu-border-color);
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  background-color: transparent;
  box-sizing: border-box;
}

.el-aside {
  overflow: hidden !important;
}
</style>