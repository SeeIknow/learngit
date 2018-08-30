<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position:relative;
   width:100%;
   min-height:100%;
   /*设置padding-bottom值大于等于footer的height值，以保证main的内容能够全部显示出来而不被footer遮盖；*/
   padding-bottom: 60px;
   box-sizing: border-box;
}
svg { fill: #369; }
html,body{
  margin:0;
  padding:0;
  height:100%;
}
body{
 height:100%;
}
a{
  text-decoration: none;
}
p,span{
  margin:0;
  padding:0;
  text-align: left;
}
.clearfix:after{
  display:block;
  clear:both;
  content:"";
  visibility:hidden;
  height:0
}
.clearfloat{
  zoom:1
}

</style>
