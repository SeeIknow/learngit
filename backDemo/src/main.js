// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import SvgIcon from '@/components/SvgIcon/index'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ easing: 'ease', speed: 500 });

import axios from 'axios'
// if(process.env.NODE_ENV == 'development'){
//   axios.defaults.baseURL = 'http://192.168.2.200:8080/ccyl'
// }else{
//   axios.defaults.baseURL = 'http://192.168.2.200:8080/ccyl'
// }
Vue.prototype.$http = axios


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
  NProgress.start();
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

router.afterEach(transition => {
  NProgress.done()
  NProgress.remove();

});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
