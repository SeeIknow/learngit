<template lang="html">
  <div class="addMenu">
    <div class="menu-box" >
      <template v-for="(item ,$index) in menuList">
        <router-link :to="{ name: item.name}">
          <div class="menu-item-addMenu">
            <svg-icon :name="item.icon" class="icon"></svg-icon>
            <p>{{item.title}}</p>
          </div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      menuList:[
        // {
        //   icon:'add',
        //   title:'基金会'
        // },
        // {
        //   icon:'add_4',
        //   title:'添加疾病'
        // },
        // {
        //   icon:'bank_institutio',
        //   title:'添加科室'
        // },
        // {
        //   icon:'bengkuiqushi',
        //   title:'添加症状'
        // },
        // {
        //   icon:'calendar_add',
        //   title:'家族病史'
        // },
        // {
        //   icon:'clinic_history',
        //   title:'添加病因'
        // },
        {
          icon:'doc',
          title:'添加医生',
          name:'doctorAdd'
        },
        // {
        //   icon:'downtown',
        //   title:'医学中心'
        // },
        {
          icon:'nav_channel_man',
          title:'添加渠道',
          name:'placeManageAdd'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
@import './addMenu.scss'
</style>
