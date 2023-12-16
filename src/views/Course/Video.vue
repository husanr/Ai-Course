<template>
  <div class="course_video_wrapper" style="height: 690px;" v-loading="loading">
    <div class="ai_talk">
      <p class="AI_avatar">
        <img src="@/assets/svg/chat3.png" alt="">
      </p>
      <span>根据内容和PPT，推荐讲稿如下，如需调整，可直接点击直接调整</span>
    </div>
    <div class="content_wrapper">
      <div class="content_con">
        <h3 class="outline_head">讲稿</h3>
        <div class="lecture_text" @click="handleClickLecture" v-show="!isEdit">
          <article>
            <ul class="outline_ul">
              <li v-for="item in lectureTxtArr" :class="isTit(item) ? 'content_tit' : ''">{{ item }}</li>
            </ul>
          </article>
          <button class="submit_btn" @click="next">课程制作完毕，点击下载</button>
        </div>
        <div class="edit_lecture_wrapper" v-show="isEdit">
          <!-- <el-input
              v-model="textarea" 
              type="textarea" 
              autosize="true" 
              placeholder="Please input content" 
              @input="handleTextInp"/> -->
          <textarea
              v-model="textarea"
              placeholder="Please input content"
              @input="handleTextInp"
            ></textarea>
          <el-button type="success" @click="handleOver">完成</el-button>
        </div>
      </div>
      <div class="tag_wrapper">
        <div class="tag_wrap">
          <div class="tag_tit"><p>PPT加配音</p></div>
          <div class="tags_box">
            <div class="tags">
              <p>配音风格</p>
              <el-button type="success" plain>女声</el-button>
              <el-button type="success" plain>男声</el-button>
              <el-button type="success" plain>童声</el-button>
            </div>
            <div class="tags">
              <p>配音风格</p>
              <el-button type="primary" plain>商务</el-button>
              <el-button type="primary" plain>卡通</el-button>
            </div>
          </div>
        </div>
        <div class="tag_wrap">
          <div class="tag_tit"><p>数字人讲解</p></div>
          <div class="tags_box">
            <div class="tags">
              <p>选择形象</p>
              <el-button type="info" plain @click="imgDialogVisible = true">PS: 多个形象人物</el-button>
            </div>
            <div class="tags">
              <p>上传自定义形象</p>
<!--              <el-button type="info" plain>PS: 支持自定义形象</el-button>-->
              <el-upload
                  v-model:file-list="fileList"
                  class="upload-demo"
                  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                  multiple
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  :limit="3"
                  :on-exceed="handleExceed"
              >
                <el-button type="primary">Click to upload</el-button>
                <template #tip>
                  <div class="el-upload__tip">
                  </div>
                </template>
              </el-upload>
            </div>
          </div>
        </div>
      </div>
      <div class="video_wrapper">
        <h3 class="outline_head">视频</h3>
        <div class="video_box">
          <video src="@/assets/images/v1.mp4" controls :hidden="isHidden"></video>
        </div>
      </div>

    </div>
    <el-dialog v-model="imgDialogVisible" title="人物形象" width="15%" center>
      <div class="demo-type">
        <el-button>
          <el-avatar :icon="UserFilled" />
        </el-button>
        <el-button>
          <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </el-button>
        <el-button>
          <el-avatar>user</el-avatar>
        </el-button>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="imgDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="imgDialogVisible = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { UserFilled } from '@element-plus/icons-vue'
const imgDialogVisible = ref(false)
const isHidden = ref(true);
import { ref, computed } from "vue"
import { store } from "@/store"
import router from "@/router";
// const textarea = ref('第一章：课题1\n\t第一节：节目1\n\t第二节：节目2\n\t第三节：节目3\n\n第二章：课题2\n\t第一节：节目1\n\t第二节：节目2\n\t第三节：节目3')
const textarea = ref(store.lectureText)
const lectureTxtArr = computed(() => {
  return textarea.value.split(/\n\t|\n\n/)
})
const isTit = (v) => {
  // 检查是否是章节标题
  return v.indexOf("讲稿") >= 0
}
const handleTextInp = (e) => {
  store.lectureText = e
}
const isEdit = ref(false)

const handleClickLecture = () => {
  isEdit.value = true
}

const handleOver = () => {
  isEdit.value = false
}

const loading = ref(false)
const next = () => {
  /*loading.value = true*/
  isHidden.value=false
/*  setTimeout(() => {
    store.activeIndex += 1
    router.push('/course/else')
  }, 2000)*/

}
</script>

<style scoped>
.demo-type {
  display: flex;
}
.demo-type > div {
  flex: 1;
  text-align: center;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}
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
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}
.AI_avatar img {
  width: 40px
}
.content_wrapper {
  display: flex;
  padding-left: 40px;
}
.outline_content {
  width: 40%;
}
.outline_head {
  display: inline-block;
  padding: 10px 30px;
  border-radius: 10px;
  background: #ccc;
  margin-bottom: 10px;
}
article {
  color: #000;
  background: #aaa;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  line-height: 30px;
  height: 500px;
  box-sizing: border-box;
  overflow: auto;
}
article>p:not(.content_tit) {
  margin-left: 10px;
}

.content_con {
   width: 30%;
   margin-right: 20px;
}

.edit_lecture_wrapper button{
  margin-top: 20px;
}

.edit_lecture_wrapper textarea {
  width: 100%;
  height: 500px;
  padding: 10px;
  color: #333;
  border: 1px solid #aaa;
  border-radius: 3px;
  outline: none;
  box-sizing: border-box;
}

.video_wrapper {
  flex: 1;
  margin-left: 30px;
}
.video_box video{
  /* width: 90%; */
  height: 320px;
  border-radius: 20px;
}

.tag_tit {
  text-align: center;
}
.tag_tit>p {
  display: inline-block;
  padding: 10px 20px;
  background: #8faadc;
  border-radius: 10px;
  margin-bottom: 20px;
}
.tags {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.tags>p {
  padding: 10px 20px;
  background: #f0bc5b;
  border-radius: 10px;
  margin-right: 10px;
  width: 70px;
  text-align: center;
}

.outline_ul {
  margin-bottom: 10px;
  padding: 0 10px;
}
.outline_ul>li:not(.content_tit) {
  margin-left: 20px;
  list-style-type:circle;
}
</style>