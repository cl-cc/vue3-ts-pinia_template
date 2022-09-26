<!--
 * @Descripttion: 
 * @version: 
 * @Author: 程
 * @Date: 2022-09-26 09:25:07
 * @LastEditors: 程
 * @LastEditTime: 2022-09-26 10:10:00
-->
<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts" setup>
// 配置element中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<style lang="scss">
#app {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,
body {
  height: 100%;
}
body {
  background: #f6f8f9;
}
* {
  margin: 0;
  padding: 0;
}
</style>
