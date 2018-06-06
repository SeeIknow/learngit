<template lang="html">
  <div class="secondBar">
    <div class="menu-s-box">
      <el-menu
       :default-active="$route.path"
       class="el-menu-vertical-demo"
       background-color="#ccc"
       text-color="#333"
       active-text-color="#00abec">
       <template v-for="(item,$index) in menuList">
        <!-- <template v-if="item.children && item.children.length >= 1">
           <el-submenu :index="item.name" :key="item.name">
             <template slot="title">
               <span>{{ item.meta.title }}</span>
             </template>
             <router-link :to="{name:items.name}" :key="items.name" class="route-link" v-for="items in item.children">
               <el-menu-item :index="items.name||items.path">
                 <span>{{ items.meta.title }}</span>
               </el-menu-item>
             </router-link>
           </el-submenu>
         </template> -->
         <!-- <template v-else> -->
           <router-link :to="item.name" :key="item.routeName" class="route-link" >
             <el-menu-item :index="String($index)">
                 <span slot="title">{{ item.title}}</span>
             </el-menu-item>
           </router-link>
         <!-- </template> -->

       </template>
     </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList:'',
    }
  },
  // props:['menulist'],
  mounted(){
    // ////console.log(this.menulist);
    // 初始化 赋值
      this.menuList = this.$store.state.routerTwoBox
  },
  methods:{
    getSecondBar(){
      this.menuList = this.$store.state.routerTwoBox
      //console.log(this.menuList);
    }
  },
  watch:{
    // 监听路由变化 重新获取二级导航
    '$route':'getSecondBar'
  }
}
</script>

<style lang="scss">
@import './secondBar.scss';
.secondBar .el-menu-item.is-active{
  background-color:rgb(103,103,103)!important;
  color:#00abec!important;
}
.router-link-exact-active .el-menu-item{
  background-color:rgb(103,103,103)!important;
  color:#00abec!important;
}
</style>
