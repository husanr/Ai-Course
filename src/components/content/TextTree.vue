<template>
  <div class="custom-tree-container">

    
    <el-tree
      :data="dataSource"
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span @click="edit(node, data)" @blur="saveEdit(node, data)" :contenteditable = 'data.isEditing'>
                {{ data.outline }}
          </span>
          <span>
            <span></span>
            <span>
                <el-popover
                  placement="bottom"
                  title="换一换"
                  :width="400"
                  trigger="click"
                  >
                  <div>
                    <div>第一种大纲修改</div>
                    <div><el-button @click="data.outline = '第一种大纲修改'">确定</el-button></div>
                    <div><br></div>
                    <div>第二种大纲修改</div>
                    <div><el-button @click="data.outline = '第二种大纲修改'">确定</el-button></div>
                    <div><br></div>
                    <div>第三种大纲修改</div>
                    <div><el-button @click="data.outline = '第三种大纲修改'">确定</el-button></div>
                    <div><br></div>
                    <el-input value="都不满意？重提要求"></el-input>
                    <div><el-button @click="data.outline = '第四种大纲修改'">确定</el-button></div>
                  </div>
                <template #reference>
                  <el-icon :size="iconSize"><Refresh /></el-icon>
                </template>
                
              </el-popover>
            </span>
            
            <span><el-icon @click="append(data)" :size="iconSize"><CirclePlusFilled /></el-icon></span>
            <span><el-icon  @click="remove(node, data)" :size="iconSize"><RemoveFilled /></el-icon></span>
            
            
          </span>
        </span>

      </template>
    </el-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
import outlineData from '@/data/outlineData.js'
import {CourseNode} from '../../interface/CourseNode'

const data = () => {
  return {
    courseNode: {
      children: [],
      outline: '111',
      outlineRefresh: '222',
      outlineReplace: [],
      content: '333',
      contentRefresh: '444',
      contentReplace: [],
      isEditing: false,
    } as CourseNode,
  };
}

const props = () => {
  textType: {
    type: String
    required: true
  }
}

let id = 1000
const iconSize = 20
let editText = ""
let showPopover = false

const append = (data: CourseNode) => {
  const newChild = { id: id++, children: [], isEditing: false, isRefresh: false, outline: '请输入内容', 
              outlineRefresh:'', outlineReplace: [], content:'', contentRefresh:'', contentReplace: [] }
  if (!data.children) {
    data.children = []
  }
  if(!data.outlineReplace) {
    data.outlineReplace = []
  }
  if(!data.contentReplace) {
    data.contentReplace = []
  }

  data.children.push(newChild)
  dataSource.value = [...dataSource.value]
}

const remove = (node: Node, data: CourseNode) => {
  const parent = node.parent
  const children: CourseNode[] = parent.data.children || parent.data
  const index = children.findIndex((d) => d.id === data.id)
  children.splice(index, 1)
  dataSource.value = [...dataSource.value]
}

const edit = (node: Node, data: CourseNode) => {
  let editText = data.outline;
  data.isEditing = true;
}

const saveEdit = (node: Node, data: CourseNode) => {
  save(node, data, editText);
  data.isEditing = false;
  editText = '';
  dataSource.value = [...dataSource.value]
}

const save = (node: Node, data: CourseNode, newText: string) => {
  if(newText === '') {
    return;
  }
  data.outline = newText;
}


const dataSource = ref<CourseNode[]>(outlineData)

var popUpContent = '';

</script>

<style>
.custom-tree-node {
  flex: 0.4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
