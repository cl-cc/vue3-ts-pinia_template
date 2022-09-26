/*
 * @Descripttion:
 * @version:
 * @Author: 程
 * @Date: 2022-09-26 09:25:07
 * @LastEditors: 程
 * @LastEditTime: 2022-09-26 11:24:22
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'

// 路由
import './permission'

// UI框架 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 注册icon组件
import * as ElIconsModules from '@element-plus/icons-vue'
// 全局注册element-plus icon图标组件
for (const [key, component] of Object.entries(ElIconsModules)) {
  app.component(key, component)
}

//布局容器
import UContainerLayout from '@/components/u-container-layout/index.vue'
app.component('u-container-layout', UContainerLayout)

app.use(pinia)
app.use(router)
app.use(ElementPlus).mount('#app')
