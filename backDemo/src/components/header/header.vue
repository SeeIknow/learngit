<template lang="html">
  <div class="header">
    <div class="headerInner">
      <span class="title">慈城名医汇后台管理系统</span>
      <img src="../../assets/logo.png" alt="" class="logo">
      <div class="rightBox">

        <div class="item" title="李白">
          <img :src="photo" alt="">
          <span class="userName">{{userName}}</span>
        </div>
        <router-link :to="{ name: 'index'}">
          <div class="item" title="首页">
            <svg-icon name="home"></svg-icon>
            <span>首页</span>
          </div>
        </router-link>
        <router-link :to="{ name: 'userSetting'}">
          <div class="item" title="设置">
            <svg-icon name="setting"></svg-icon>
            <span>设置</span>
          </div>
        </router-link>
        <div class="item" title="退出" @click="loginOut">
          <svg-icon name="sign_out"></svg-icon>
          <span>退出</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName:'',
      photo:''
    }
  },
  mounted(){
    this.getInfo()
  },
  methods: {
    loginOut(){
       localStorage.removeItem('userInfo');
       setTimeout(() =>{
         location.reload();
       },500)
    },
    // 获取用户信息
    getInfo(){
      const info = JSON.parse(localStorage.getItem('userInfo'));
      const photo = localStorage.getItem('adminPhoto')
      this.userName = info.username
      this.photo = photo;
      console.log(info.username);
    }
  }
}
</script>

<style lang="scss">
@import './header.scss'
</style>
