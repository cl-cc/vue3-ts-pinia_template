/*
 * @Descripttion:
 * @version:
 * @Author: 程
 * @Date: 2022-09-26 09:55:15
 * @LastEditors: 程
 * @LastEditTime: 2022-09-26 10:43:18
 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useUserStore } from '@/store/modules/user'

import router from './router/index'
import { RouteLocationNormalized } from 'vue-router'

NProgress.configure({ showSpinner: false })

//设置路由白名单
const whileList = ['/login']

router.beforeEach(async (to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
  const UserStore = useUserStore()
  const hasToken = UserStore.token
  if (whileList.includes(to.path) || hasToken) {
    next()
  } else {
    next('/login')
  }
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})
