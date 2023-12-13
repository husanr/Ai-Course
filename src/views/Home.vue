<template>
  <div class="home_wrapper">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>AI  </span>
          <span>你好，欢迎来到“AI”做课平台，输入一些基本信息，开启你的AI做课之旅吧！</span>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
      <template #footer>Footer content</template>
    </el-card>
    
  </div>
</template>

<script>

</script>