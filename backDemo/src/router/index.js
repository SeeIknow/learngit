import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/pages/login/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: () => import('@/pages/home/home.vue'),
      children: [
        {
          path: '/index',
          name: 'index',
          meta: {
            title: '首页'
          },
          component: () => import('@/pages/index/index.vue')
        },
        {
          path: '/order',
          name: 'order',
          meta: {
            title: '订单管理'
          },
          component: () => import('@/pages/orderManage/orderManage.vue'),
          children:[
            {
              path: 'table',
              name: 'table',
              meta: {
                title: '表格'
              },
              component: () => import('../components/table/table.vue')
            },
            {
              path: 'orderExmin',
              name: 'orderExmin',
              meta: {
                title: '订单审核'
              },
              component: () => import('@/pages/orderExmin/orderExmin.vue')
            }
          ]
        },
        {
          path: '/user',
          name: 'user',
          meta: {
            title: '用户管理'
          },
          component: () => import('@/pages/userManage/userManage.vue')
        },
        {
          path: '/setting',
          name: 'setting',
          meta: {
            title: '设置'
          },
          component: () => import('@/pages/userSetting/userSetting.vue')
        },
      ]
    },
  ]
})
