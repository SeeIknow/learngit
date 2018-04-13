// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import SvgIcon from '@/components/SvgIcon/index'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts



console.log(process.env);
/*
* 全局注册svg-icon
*/
Vue.component('svg-icon', SvgIcon)

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUi)

Vue.config.productionTip = false


// 登陆拦截
router.beforeEach((to, from, next) => {
  // Util.opendPage(router.app, to.name, to.params, to.query, to.meta, to.path)
  // NProgress.start()
  const title = to.meta.title
  // Util.title(title)
  if (!localStorage.getItem('userInfo') && to.name !== 'login') {
    next({
      replace: true,
      name: 'login'
    })
  } else if (localStorage.getItem('userInfo') && to.name === 'login') {
    next({
      name: 'home'
    })
  }else {
      next() // 否则全部重定向到登录页
      // NProgress.done()
    }
  })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
