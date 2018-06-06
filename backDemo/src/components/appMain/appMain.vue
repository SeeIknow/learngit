<template lang="html">
  <div class="appMain">
    <!-- <bread-crumb :nameP="nameP"></bread-crumb> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="key" style="padding:20px 40px"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="key" style="padding:20px 40px"></router-view>
  <!-- <router-view /> -->
  </div>
</template>

<script>
import BreadCrumb from '../Breadcrumb/Breadcrumb.vue';
export default {
  data (){
    return {
      nameP:{
        one:'',
        two:''
      },
    }
  },
  computed: {
    key () {
      //存储左侧一级菜单 二级菜单
      if(this.$route.params.name != undefined){
        this.$store.commit('menuBoxF',this.$route.params.name);
      }
      // this.nameP.two = ;
      this.$store.commit('menuBoxS',this.$route.meta.title);
      //添加时间戳 保证路由的唯一性
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  },
  components:{
    BreadCrumb
  }
}
</script>

<style lang="scss">
@import './appMain.scss'
</style>
