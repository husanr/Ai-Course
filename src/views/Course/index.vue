<template>
    <div class="course_wrapper">
        <div class="link_btns">
            <ul>
                <li><RouterLink to="/course/outline">课程大纲</RouterLink></li>
                <li><RouterLink to="/course/content">课程内容</RouterLink></li>
                <li><RouterLink to="/course/ppt">课程PPT</RouterLink></li>
                <li><RouterLink to="/course/lecture">课程讲稿</RouterLink></li>
                <li><RouterLink to="/course/video">课程视频</RouterLink></li>
                <li><RouterLink to="/course/else">其他</RouterLink></li>
            </ul>
        </div>

        <el-card class="box-card">
            <RouterView />
        </el-card>
    </div>
</template>

<script setup>

</script>

<style scoped>
.course_wrapper {
    display: flex;
}
.link_btns {
    margin-right: 20px;
}
.link_btns ul li {
    background: rgb(255, 242, 204);
    padding: 10px 30px;
    border-radius: 10px;
    margin-bottom: 20px;
}
.box-card {
    flex: 1;
}
</style>