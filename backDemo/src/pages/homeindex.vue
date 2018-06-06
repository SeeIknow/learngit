<template lang="html">
  <div class="home">
    <header-top></header-top>
    <side-bar></side-bar>
    <app-main></app-main>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
import AppMain from '@/components/appMain/appMain'
import SideBar from '@/components/slideBar/slideBar'
import HeaderTop from '@/components/header/header'
import FooterBottom from '@/components/footer/footer'

import {AddRouteRootMap} from '@/router/middle'

import {mapGetters,mapActions} from 'vuex'
export default {
  data () {
    return {
    }
  },
  components: {
    AppMain,
    SideBar,
    HeaderTop,
    FooterBottom
  },
  computed:{
  	...mapGetters('permission',[
  		'routers'
  	])
  },
  created(){
  	const menus = JSON.parse(localStorage.getItem('permission'));
  	this.$router.addRoutes(AddRouteRootMap(menus.menus))
  	
  	const routerActiveOne = this.$store.state.routerActiveOne
    //console.log(routerActiveOne)
  }
}
</script>

<style lang="scss">
</style>
