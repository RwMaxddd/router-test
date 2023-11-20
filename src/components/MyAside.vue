<template>
  <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
  >
<!--    <el-sub-menu index="1">-->
<!--      <template #title>-->
<!--        <el-icon><Location /></el-icon>-->
<!--        <span>Navigator One</span>-->
<!--      </template>-->
<!--      <el-sub-menu index="1-4">-->
<!--        <template #title><span>item four</span></template>-->
<!--        <el-menu-item index="1-4-1">item one</el-menu-item>-->
<!--      </el-sub-menu>-->
<!--    </el-sub-menu>-->
    <el-menu-item index="1" @click="toHome">
      <el-icon><icon-menu /></el-icon>
      <template #title >Home</template>
    </el-menu-item>
    <el-menu-item index="2" @click="toParams">
      <el-icon><icon-menu /></el-icon>
      <template #title >Params</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><Setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import {
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isCollapse = inject('isCollapse')
function toParams(){
  router.push({ name:'ParamsTest', params:{Test:'cyc',Params:'1706'} })
  // let routeUrl = router.resolve({
  //   name:'ParamsTest',
  //   params:{Test:'cyc',Params:'1706'},
  //   query: {id:96}
  // });
  // window.open(routeUrl.href, '_blank');
}
function toHome(){
  router.push({ path:'/Personal/MyHome' })
}


</script>

<style scoped>
.el-menu{
  height: 100%;
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>