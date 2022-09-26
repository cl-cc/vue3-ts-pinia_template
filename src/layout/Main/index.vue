<!--
 * @Descripttion: 
 * @version: 
 * @Author: 程
 * @Date: 2022-09-26 11:01:14
 * @LastEditors: 程
 * @LastEditTime: 2022-09-26 11:17:29
-->
<template>
  <div class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-slide" mode="out-in" appear>
        <keep-alive v-if="route.meta && route.meta.keepAlive">
          <component :is="Component" :key="route.path" />
        </keep-alive>
        <component :is="Component" :key="route.path" v-else />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.app-main {
  flex: 1;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
}
</style>
