import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 动态加载pages中所有的路由文件
const files = require.context('@/pages', true, /router\.js$/);
const routes = files.keys().map(key => {
  const page = require('@/pages' + key.replace('.', ''));
  return page.default;
})

// 路由重定向
const redirect = {
  path: '/',
  redirect: '/home'
}

routes.push(redirect)

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
