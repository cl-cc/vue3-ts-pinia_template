/*
 * @Descripttion:
 * @version:
 * @Author: 程
 * @Date: 2022-09-26 10:16:14
 * @LastEditors: 程
 * @LastEditTime: 2022-09-26 10:18:20
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'userState',
  state: () => ({
    // 登录token
    token: null,
    // 登录用户信息
    userInfo: {},
    // 角色
    roles: []
  }),
  getters: {},
  actions: {
    // 登录
    login(userInfo) {
      const { username, password } = userInfo
      return new Promise(async (resolve, reject) => {
        this.token = username
        this.userInfo = userInfo
        await this.getRoles()
        resolve(username)
      })
    },
    // 获取用户授权角色信息
    getRoles() {
      return new Promise((resolve, reject) => {
        this.roles = ['admin']
        resolve(this.roles)
      })
    },
    // 获取用户信息 ，如实际应用中 可以通过token通过请求接口在这里获取用户信息
    getInfo(roles) {
      return new Promise((resolve, reject) => {
        this.roles = roles
        resolve(roles)
      })
    },
    // 退出
    logout() {
      return new Promise((resolve, reject) => {
        this.token = null
        this.userInfo = {}
        this.roles = []
        resolve(null)
      })
    }
  },
  // 进行持久化存储
  persist: {
    // 本地存储的名称
    key: 'userState',
    //保存的位置
    storage: window.localStorage
  }
})
