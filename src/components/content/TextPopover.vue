<template>
    <div>
      <!-- 触发 popover 的按钮 -->
      <el-button type="primary" @click="showPopover = true">
        点击查看数组
      </el-button>
  
      <!-- popover 内容 -->
      <el-popover
        v-model="showPopover"
        placement="bottom"
        width="400"
        title="换一换"
      >
        <div v-for="(row, rowIndex) in displayedArray" :key="rowIndex" class="popover-row">
          <div v-for="(item, colIndex) in row" :key="colIndex" class="popover-item">
            {{ item }}
          </div>
        </div>
      </el-popover>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      array: {
        type: Array,
        required: true,
      },
      columnCount: {
        type: Number,
        default: 3,
      },
    },
    data() {
      return {
        showPopover: false,
      };
    },
    computed: {
      displayedArray() {
        let result = [];
        for (let i = 0; i < this.array.length; i += this.columnCount) {
          result.push(this.array.slice(i, i + this.columnCount));
        }
        return result;
      },
    },
  };
  </script>