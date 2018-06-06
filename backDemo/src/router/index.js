import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/Home.vue'
import {constantTouter} from '@/router/middle'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
////console.log(constantTouter);

export default new Router({
  routes:constantTouter,
  scrollBehavior (to, from, savedPosition) {//滚动条回到页面初始位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
