/*
 * @Descripttion:
 * @version:
 * @Author: 程
 * @Date: 2022-09-26 10:14:16
 * @LastEditors: 程
 * @LastEditTime: 2022-09-26 10:15:53
 */
import { defineStore, createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
export const Store = defineStore({
  id: 'globalState',
  state: () => ({}),
  getters: {},
  actions: {},
  persist: {
    key: 'globalState',
    storage: window.sessionStorage
  }
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia
