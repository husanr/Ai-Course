<template>
  <div class="custom-tree-container">

  <div><TextTree textType='outline'></TextTree></div>
   
  </div>

  
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
import outlineData from '@/data/outlineData.js'
import {CourseNode} from '../../interface/CourseNode'
import TextTree from '@/components/content/TextTree.vue'


let id = 1000
const iconSize = 20
let editText = ""
let tempArray = []
var popoverTitle = '你喜欢的'
let showPopover = false
const arr1 = ['111','222','333']

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
    data.outlineReplace = []
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

const clickRefresh = (node: Node, data: CourseNode) => {
  data.isRefresh = true;
}

const outlineReplace  = (node: Node, data: CourseNode) => {
  tempArray = data.outlineReplace;
}


const dataSource = ref<CourseNode[]>(outlineData)

var popUpContent = '';

</script>

<style>
.custom-tree-node {
  flex: 0.2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
