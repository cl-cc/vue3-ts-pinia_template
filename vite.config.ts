/*
 * @Descripttion:
 * @version:
 * @Author: 程
 * @Date: 2022-09-26 09:25:07
 * @LastEditors: 程
 * @LastEditTime: 2022-09-26 09:41:56
 */
import { defineConfig, ConfigEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import viteCompression from 'vite-plugin-compression'
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  console.log('mode================', mode)
  return {
    plugins: [
      vue(),
      vueSetupExtend(),
      mode === 'production' &&
        viteCompression({
          verbose: true,
          disable: false,
          threshold: 10240,
          algorithm: 'gzip',
          ext: '.gz'
        })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/styles/index.scss" as *;`
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve('src'),
        static: resolve('public/static')
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    server: {
      host: '0.0.0.0',
      port: 8100,
      open: true,
      https: false,
      cors: true,
      proxy: {
        // "/api": {
        //   target: "", // easymock
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/api/, "")
        // }
      }
    }
  }
})
