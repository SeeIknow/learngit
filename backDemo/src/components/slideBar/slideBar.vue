<template lang="html">
  <div class="slideBar">
    <!-- <el-menu
    default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse">
    <template v-for="item in routers">
      <template v-if="item.children && item.children.length > 1">
        <el-submenu :index="item.name" :key="item.name">
          <template slot="title">
            <svg-icon :name="item.icon"></svg-icon>
            <span>{{ item.title }}</span>
          </template>
          <router-link :to="item.path+'/'+items.path" :key="items.path" class="route-link" v-for="items in item.children">
            <el-menu-item :index="items.name||items.path">
              <span>{{ items.meta.title }}</span>
            </el-menu-item>
          </router-link>
        </el-submenu>
      </template>
    </el-menu> -->

    <!-- <el-menu
      default-active="2"
      class="el-menu-vertical-demo" background-color="#545c64">
      <router-link :to="{ name: 'home'}">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </router-link>
      <router-link :to="{ name: 'order'}">
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">订单管理</span>
        </el-menu-item>
      </router-link>
      <router-link :to="{ name: 'user'}">
        <el-menu-item index="3" >
          <i class="el-icon-document"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
      </router-link>
    </el-menu> -->
    <!-- <div class="slideBox">
      <router-link :to="{ name: 'index'}">
        <div class="menuItem">
          <div class="svgBox">
            <svg-icon name="home"></svg-icon>
          </div>
          <span>首页</span>
        </div>
      </router-link>
      <router-link :to="{ name: 'table'}">
        <div class="menuItem">
          <div class="svgBox">
            <svg-icon name="order"></svg-icon>
          </div>
          <span>订单管理</span>
        </div>
      </router-link>
      <router-link :to="{ name: 'userManage'}">
        <div class="menuItem">
          <div class="svgBox">
            <svg-icon name="userFrom"></svg-icon>
          </div>
          <span>用户管理</span>
        </div>
      </router-link>
      <router-link :to="{ name: 'departmentManage'}">
        <div class="menuItem">
          <div class="svgBox">
            <svg-icon name="content"></svg-icon>
          </div>
          <span>内容管理</span>
        </div>
      </router-link>
      <router-link :to="{ name: 'accoutsSettle'}">
        <div class="menuItem">
          <div class="svgBox">
            <svg-icon name="count"></svg-icon>
          </div>
          <span>统计结算</span>
        </div>
      </router-link>
      <router-link :to="{ name: 'operationalData'}">
        <div class="menuItem">
          <div class="svgBox">
            <svg-icon name="setting"></svg-icon>
          </div>
          <span>综合设置</span>
        </div>
      </router-link>
      <second-bar></second-bar>
    </div> -->
    <div class="slideBox">
      <div class="menuItem" v-for="item in sidebarRoute" :key="item.title" @click="jump(item)" :class="{'active':$store.state.routerActiveOne == item.name}">
        <div class="svgBox">
          <svg-icon :name="item.icon"></svg-icon>
        </div>
        <span>{{item.title}}</span>
      </div>
    </div>
    <second-bar :menulist="routesFilter"></second-bar>
  </div>
</template>
<script>
import SecondBar from '../secondBar/secondBar'
import {filterTwoName,constantTouter} from '@/router/middle'
import { getMenu } from './sidebarConfig'
export default {
  data () {
    return {
      sidebarRoute: '',//一级菜单盒子
      routesFilter: [],//二级菜单盒子过滤
      currentName:'index'
    }
  },
  updated(){
  },
  mounted () {
  	////console.log(constantTouter);
    this.sidebarRoute = getMenu()


    // 默认是首页
    this.routesFilter = constantTouter[1].children;
    // 初始化赋值二级导航
    this.$store.state.routerTwoBox = this.routesFilter
    // this.$router.push({
    //   name:this.routesFilter[0].name
    // })
  },
  methods:{
  	setCurrentName(){
  		this.currentName = this.$store.state.routerActiveOne
  		//console.log(this.currentName)
  	},
    jump (item) {
    	const menus = JSON.parse(localStorage.getItem('permission'));
    	////console.log(menus);
      if(item.name == 'index'){
        this.currentName = item.name
        this.routesFilter = constantTouter[1].children;
        this.$store.state.routerTwoBox = this.routesFilter
        this.$router.push({
          name:this.routesFilter[0].name
        })
      }else{
        this.routesFilter= filterTwoName(menus.menus,item.name)
        // this.$store.state.routerTwoBox = this.routesFilter
        // this.$message.success('即将去'+ item.name + item.title + '路由模块')
         ////console.log(this.routesFilter);
        this.currentName = item.name
        this.$router.push({
          name:this.routesFilter[0].name,
          params:{
            name:item.title
          }
        })
      }
    }
  },
  components:{
    SecondBar
  },
  watch:{
  	"$route": "setCurrentName"
  }

}
</script>

<style lang="scss">
@import './slideBar.scss';
</style>
