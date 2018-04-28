import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/Home.vue'
import middleRouter from '@/router/middle'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
console.log(middleRouter);

export default new Router({
  routes:middleRouter,
  scrollBehavior (to, from, savedPosition) {//滚动条回到页面初始位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
