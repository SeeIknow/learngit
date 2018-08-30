<template lang="html">
  <div class="select">
      <div class="listItem" v-for="(item,$index) in orderList" @mouseover="show($index)" @mouseout="hide($index)">
        <div class="menu-title2">{{item.name}}<i>({{item.num}})</i></div>
        <div class="menu-content" :class="{show:(showStatus && $index == indexVla)}">
          <ul v-for="items in item.list">
            <li :key="items.index">{{items.status}}<i>({{items.count}})</i></li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      showStatus:false,
      indexVla:-1,
    }
  },
  props:['orderList'],
  methods:{
    show(index){
      // alert(1);
      this.showStatus = !this.showStatus
      this.indexVla = index;
    },
    hide(index){
      this.showStatus = !this.showStatus
      this.indexVla = index;
    }
  },
  mounted(){
    console.log(this.orderList)
  }
  // props:["list"]
}
</script>

<style lang="scss">
@import './selectComponent.scss'
</style>
