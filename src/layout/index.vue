<!--
 * @Descripttion: 
 * @version: 
 * @Author: 程
 * @Date: 2022-09-26 10:47:30
 * @LastEditors: 程
 * @LastEditTime: 2022-09-26 11:01:19
-->
<template>
  <div class="g-container-layout">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <u-header />
      <div class="m-container-content">
        <u-main />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Sidebar from './Sidebar/index.vue'
import UHeader from './Header/index.vue'
import UMain from './Main/index.vue'
</script>
<style lang="scss" scoped>
.g-container-layout {
  height: 100%;
  width: 100%;
  .main-container {
    display: flex;
    flex: 1;
    box-sizing: border-box;
    flex-direction: column;
  }
}
.sidebar-container {
  display: flex;
  flex-direction: column;
}
.m-container-content {
  display: flex;
  flex: 1;
  position: relative;
  box-sizing: border-box;
}
</style>
