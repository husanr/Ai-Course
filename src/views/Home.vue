<template>
  <div class="home_wrapper">
    <el-card class="box-card" v-loading="loading">
      <div class="ai_talk">
        <p class="AI_avatar">
          <img src="@/assets/svg/chat.svg" alt="">
        </p>
        <span>你好，欢迎来到“AI”做课平台，输入一些基本信息，开启你的AI做课之旅吧！</span>
      </div>
      <div class="ai_talk AI_content">
        <p class="AI_avatar">
          <img src="@/assets/svg/chat.svg" alt="">
        </p>
        <ul class="AI_content_ul">
          <li class="text_item">
            <p>您的课程主题是？</p> <el-input v-model="input1" placeholder="如：“AI”做课使用实操" />
          </li>
          <li class="text_item">
            <p>您的课程对象是？</p> <el-input v-model="input2" placeholder="建议描述方式：在什么水平/具备什么经验的，什么岗位/群体，示例：入司3年内的证券公司财富顾问" />
          </li>
          <li class="text_item">
            <p>您的课程目标是？</p> <el-input v-model="input3" placeholder="当学员学完课程后，能够发生哪些知识/态度/技能改变" />
          </li>
          <li class="text_item">
            <p>您预计的课程时长</p> <el-input v-model="input4" placeholder="建议1小时内，学员学习体验更好" />
          </li>
          <li class="text_item">
            <p>其他补充说明</p> <el-input v-model="input5" placeholder="比如您希望包含的主要内容、案例等，您补充的细节越多，AI输出的内容越精准" />
          </li>
          <li class="text_item upload_item">
           <p @click="uploadFile">附件上传</p>
            <!-- <p @click="">附件上传<input type="file" ></p> -->
            <!-- 隐藏的文件输入元素 -->
            <input type="file" ref="fileInputRef" style="display:none">
            <el-input v-model="input6" placeholder="上传课程相关文档内容，或附上内容网址链接" />
          </li>
          <li class="text_item">
            <button class="submit_btn" @click="handleCreateOutline">生成课程大纲</button>
          </li>
          
        </ul>
      </div>
    </el-card>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const loading = ref(false)
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
const input5 = ref('')
const input6 = ref('')
sessionStorage.setItem('isCollapse', false)

const fileInputRef = ref(null);
const uploadFile = () => {
  // 通过ref获取文件输入元素并触发点击事件
  fileInputRef.value.click();
}

const handleCreateOutline = () => {
  sessionStorage.setItem('isCollapse', true)
  loading.value = true
  // 模拟加载中的状态 2s
  setTimeout(() => {
    router.push('/course')
  }, 2000)
}
</script>

<style scoped>
.ai_talk {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
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
  width: 80%;
  line-height: 40px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.upload_item {
  cursor: pointer;
}
.upload_item>.upload_wrap {
  width: 45%;
}

.text_item p {
  width: 45%;
  border-radius: 10px;
  text-align: center;
  margin-right: 30px;
  color: #fff;
  background: rgb(91,155,213);
}

</style>