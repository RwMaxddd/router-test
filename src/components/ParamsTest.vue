<template>
  <div>测试params</div>
  <div>/:params: {{$route.params.Params}}</div>
  <div>/:test: {{$route.params.Test}}</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import {watch} from "vue";
console.log('----------ParamsTest组件开始----------')
const route = useRoute()
console.log(route.params)
console.log(route.params.Params)
console.log(route.params.Test)
watch(() => route.params,() => {
  console.log("1111")
})
console.log('----------ParamsTest组件结束----------\n')
</script>

<style scoped>

</style>