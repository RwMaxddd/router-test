<template>
  <div class="header">
    <div class="icon-box">
      <Expand class="icon-expand" @click="changeCollapse" v-show="isCollapse"></Expand>
      <Fold class="icon-fold" @click="changeCollapse" v-show="!isCollapse"></Fold>
    </div>
    <el-avatar shape="circle" :size="'default'">
      <img src="../assets/1.jpg">
    </el-avatar>
  </div>
</template>

<script setup>
import { Expand,Fold } from '@element-plus/icons-vue'
import { inject } from 'vue'
const isCollapse = inject('isCollapse')
const changeCollapse = inject('changeCollapse')

</script>

<style scoped lang="less">
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  .icon-fold,
  .icon-expand{
    height: 20px;
    width: 20px;
    cursor: pointer;
    &:hover{
      color: rgb(64,158,255);
    }
  }
}

</style>