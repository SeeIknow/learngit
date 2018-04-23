<template lang="html">
  <div class="select">
      <div class="listItem" v-for="(item,$index) in list" @mouseover="show($index)" @mouseout="hide($index)">
        <div class="menu-title2">{{item.title}}<i>({{item.number}})</i></div>
        <div class="menu-content" :class="{show:(showStatus && $index == indexVla)}">
          <ul v-for="items in item.menu">
            <li :key="items.index">{{items.title}}</li>
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
      list:[
        {
          'title':'1',
          'number':'2',
          'menu':[
            {
              'title':'1-1',
              'index':'1-1-0'
            },
            {
              'title':'1-2',
              'index':'1-2-0'
            }
          ]
        },
        {
          'title':'2',
          'number':'3',
          'menu':[
            {
              'title':'2-1',
              'index':'2-1-0'
            },
            {
              'title':'2-2',
              'index':'2-2-0'
            }
          ]
        }
      ]
    }
  },
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
  }
  // props:["list"]
}
</script>

<style lang="scss">
@import './selectComponent.scss'
</style>
