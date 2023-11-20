<template>
  <el-container>
    <el-aside>
      <MyAside></MyAside>
    </el-aside>
    <el-container>
      <el-header>
        <MyHeader></MyHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import MyAside from '../components/MyAside'
import MyHeader from '../components/MyHeader'
import { provide, ref } from 'vue'
const isCollapse = ref(false)
function changeCollapse(){
  isCollapse.value = !isCollapse.value
}
provide('isCollapse', isCollapse)
provide('changeCollapse', changeCollapse)

</script>

<style scoped lang="less">
.el-aside{
  height: 100vh;
  width: auto;
}
.el-header{
  background-color: antiquewhite;
}
.el-main{
  background-color: darkgrey;
}
</style>