// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import SvgIcon from '@/components/SvgIcon/index'

import Moment from 'moment'
Vue.prototype.moment = Moment

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

import {AddRouteRootMap} from '@/router/middle'
/*
* 全局注册svg-icon
*/
Vue.component('svg-icon', SvgIcon)

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUi)

Vue.config.productionTip = false

const permission = JSON.parse(localStorage.getItem('permission'))

// 定一个变量 控制页面进入次数
var pageInAmount = true;
// 登陆拦截
router.beforeEach((to, from, next) => {
  // Util.opendPage(router.app, to.name, to.params, to.query, to.meta, to.path)
  NProgress.start();
  const title = to.meta.title
  console.log(store.state.permission.routers);
  // Util.title(title)
  if (!localStorage.getItem('userInfo')&&to.name!== 'login') {
    //debugger
    next({
      replace: true,
      name: 'login'
    })
  } else if (localStorage.getItem('userInfo')&&to.name === 'login') {
    debugger
    next({
      name: 'home'
    })
  }else if( permission && store.state.permission.routers.length == 0){
  	 debugger

		// if( to.name == null && pageInAmount){
			router.addRoutes(AddRouteRootMap(permission.menus))
			localStorage.setItem('router',to.name)
      store.commit('permission/ADD_MENU', permission.menus)
      setTimeout(() =>{
        next({...to,replace:true})
      },500)
		// }else if(to.name == null && !pageInAmount){
    //   next({
    //     name: 'home'
    //   })
		// }else{
    //   next()
    // }
  }else{
    debugger
     next() // 否则全部重定向到登录页
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
