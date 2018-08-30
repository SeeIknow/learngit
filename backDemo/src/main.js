// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'babel-polyfill'

import SvgIcon from '@/components/SvgIcon/index'

import Moment from 'moment'
Vue.prototype.moment = Moment

import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'
NProgress.configure({ easing: 'ease', speed: 500 });

//一级菜单数组
import {getMenu} from '@/components/slideBar/sideBarConfig.js'
const menus = getMenu();

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
import {constantTouter} from '@/router/middle'

Vue.use(ElementUi)

Vue.config.productionTip = false
const permission = JSON.parse(localStorage.getItem('permission'))//获取本地存储
// 全局定义事件
window.eventBus = new Vue()

// 定一个变量 控制页面进入次数
var pageInAmount = true;
//console.log(router)
// 登陆拦截
router.beforeEach((to, from, next) => {
  // Util.opendPage(router.app, to.name, to.params, to.query, to.meta, to.path)
  NProgress.start();
  //console.log(to)
  const title = to.meta.title
  //console.log(store.state.permission.routers);
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
		if( to.name != null){
      // 调取接口 获取权限
      store.dispatch('permission/getUserPermission')

			router.addRoutes(AddRouteRootMap(JSON.parse(localStorage.getItem('permission')).menus))
			localStorage.setItem('router',to.name)
      store.commit('permission/ADD_MENU', JSON.parse(localStorage.getItem('permission')).menus)
      // 更新用户信息
      store.dispatch('updateUserInfo').then((response) =>{
        // 本地存储用户信息
        localStorage.setItem('userInfo',JSON.stringify(response.data))
        // 存储用户图像
        localStorage.setItem('adminPhoto',response.data.photoUrl )
      })
      store.state.user.imgUrl = localStorage.getItem('adminPhoto')
      setTimeout(() =>{
        next({...to,replace:true})
      },200)
		 }else if(to.name == null){
      next({
        name: 'index'
      })
		}
  }else{

  	//添加路由本地存储  一级菜单
  	//正则截取path中//之间的内容为一级菜单的内容
  	//   /order/consultionService
  	if(to.name === 'login'){
  		next()
  	}else{
  		//console.log(to.path.match(/\/(\S*)\//)[1])
  		store.state.routerActiveOne = to.path.match(/\/(\S*)\//)[1]
      if(store.state.routerActiveOne == 'index'){
        store.state.routerTwoBox = constantTouter[1].children;
      }else{
        // 循环遍历路由盒子 获取当前活跃的一级路由 所对应的二级路由
        const mapArr = [];
        const permissionRouter = store.state.permission.routers
        //console.log(permissionRouter)
        for(let i in permissionRouter){
          if(store.state.routerActiveOne == permissionRouter[i].routeName){
            for(let j = 0;j<permissionRouter[i].childrenMenuInfo.length;j++){
              const maps = {}
               maps.title = permissionRouter[i].childrenMenuInfo[j].menuName;
               maps.name = permissionRouter[i].childrenMenuInfo[j].routeName;
               maps.path = `/${permissionRouter[i].childrenMenuInfo[j].routeName}`;
               mapArr.push(maps)
            }
            store.state.routerTwoBox = mapArr;
          }
        }
      }
     	next() // 否则全部重定向到登录页
  	}

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
