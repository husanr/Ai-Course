<template>
  <div class="home_wrapper">
    <el-card class="box-card">
      <!-- <template #header>
        <div class="card-header">
          <p class="AI_avatar">
            <img src="@/assets/svg/chat.svg" alt="">
          </p>
          <span>你好，欢迎来到“AI”做课平台，输入一些基本信息，开启你的AI做课之旅吧！</span>
        </div>
      </template> -->
      <div class="card-header">
        <p class="AI_avatar">
          <img src="@/assets/svg/chat.svg" alt="">
        </p>
        <span>你好，欢迎来到“AI”做课平台，输入一些基本信息，开启你的AI做课之旅吧！</span>
      </div>
      <div class="card-header AI_content">
          <p class="AI_avatar">
            <img src="@/assets/svg/chat.svg" alt="">
          </p>
          <ul class="AI_content_ul">
            <li v-for="o in 4" :key="o" class="text_item">
              <p>您的课程主题是？</p> <el-input v-model="input1" placeholder="Please input" />
            </li>
          </ul>
        </div>
      <template #footer>Footer content</template>
    </el-card>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
const input1 = ref('如：“AI”做课使用实操')
</script>

<style>
.card-header {
  display: flex;
  align-items: center;
}
.AI_avatar {
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background: rgb(25, 195, 125);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}
.AI_content {
  align-items: start;
}
.AI_content_ul {
  width: 100%;
  list-style: none;
}
.text_item {
  width: 50%;
  line-height: 30px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.text_item p {
  min-width: 50%;
}
</style>