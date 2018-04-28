<template lang="html">
  <div class="secondBar">
    <div class="menu-s-box">
      <el-menu
       default-active="0"
       class="el-menu-vertical-demo"
       background-color="#ccc"
       text-color="#333"
       active-text-color="#00abec">
       <template v-for="(item,$index) in menulist">
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
           <router-link :to="item.name" :key="item.name" class="route-link" >
             <el-menu-item :index="String($index)">
                 <span slot="title">{{ item.meta.title }}</span>
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
  mounted(){
    // alert(this.$route.path)
  },
  data () {
    return {
    }
  },
  props:['menulist'],
  mounted(){
    // console.log(this.menulist);
  }
}
</script>

<style lang="scss">
@import './secondBar.scss';
.secondBar .el-menu-item.is-active{
  background-color:rgb(103,103,103)!important;
  color:#00abec!important;
}
</style>
