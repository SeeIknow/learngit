<template lang="html">
  <div class="secondBar">
    <div class="menu-s-box">
      <el-menu
       default-active="2"
       class="el-menu-vertical-demo"
       background-color="#ccc"
       text-color="#fff"
       active-text-color="#00abec">
       <template v-for="item in menulist">
        <template v-if="item.children && item.children.length >= 1">
           <el-submenu :index="item.name" :key="item.name">
             <template slot="title">
               <span>{{ item.name }}</span>
             </template>
             <router-link :to="{name:items.name}" :key="items.path" class="route-link" v-for="items in item.children">
               <el-menu-item :index="items.name||items.path">
                 <span>{{ items.name }}</span>
               </el-menu-item>
             </router-link>
           </el-submenu>
         </template>
         <template v-else>
           <router-link :to="item.path" :key="item.path" class="route-link">
             <el-menu-item :index="item.name||item.path">
                 <span slot="title">{{ item.name }}</span>
             </el-menu-item>
           </router-link>
         </template>

       </template>
     </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menulist:[
        {
          path:'./',
          name:'系统首页',
          children:[{
            path:'./1',
            name:'table'
          }]
        },
        {
          path:'./2',
          name:'账户设置'
        },
        {
          path:'./3',
          name:'我的钱包'
        },
        {
          path:'./4',
          name:'修改密码'
        },
        {
          path:'./5',
          name:'修改头像'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import './secondBar.scss'
</style>
