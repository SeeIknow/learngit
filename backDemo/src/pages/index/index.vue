<template lang="html">
  <div class="index">
    <second-bar></second-bar>
    <el-button type="primary" style="float:right" icon="el-icon-search">刷新</el-button>
    <div class="flowBox">
      <div class="flowItem">
        <svg-icon name="stacked_column"></svg-icon>
        <div class="words-ammount">
          <p>今日订单总数</p>
          <p>12</p>
        </div>
      </div>
      <div class="flowItem">
        <svg-icon name="money"></svg-icon>
        <div class="words-ammount">
          <p>今日成交总额</spapn>
          <p>12</p>
        </div>
      </div>
      <div class="flowItem">
        <svg-icon name="trend"></svg-icon>
        <div class="words-ammount">
          <p>昨日成交总额</p>
          <p>12</p>
        </div>
      </div>
      <div class="flowItem">
        <svg-icon name="calculate"></svg-icon>
        <div class="words-ammount">
          <p>近7日成交总额</p>
          <p>12</p>
        </div>
      </div>
    </div>
    <div class="pending-order common_p">
      <p class="menu-title">待处理订单</p>
      <div class="order-menu clearfix">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#f5f5f5"
          text-color="#333"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <el-button type="info">疾病救助(<i>11</i>)</el-button>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <el-button type="info">体验服务(<i>11</i>)</el-button>
            </template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <el-button type="info">图文咨询(<i>11</i>)</el-button>
            </template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <el-button type="info">门诊预约(<i>11</i>)</el-button>
            </template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
            <el-menu-item index="4-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <el-button type="info">就诊服务(<i>11</i>)</el-button>
            </template>
            <el-menu-item index="5-1">选项1</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
            <el-menu-item index="5-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <el-button type="info">远程会诊(<i>11</i>)</el-button>
            </template>
            <el-menu-item index="5-1">选项1</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
            <el-menu-item index="5-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <el-button type="info">陪诊服务(<i>11</i>)</el-button>
            </template>
            <el-menu-item index="5-1">选项1</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
            <el-menu-item index="5-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
              <el-button type="info">私人医生(<i>11</i>)</el-button>
            </template>
            <el-menu-item index="5-1">选项1</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
            <el-menu-item index="5-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <div class="common_p">
      <p class="menu-title">订单量统计</p>
      <div class="echars" id="myChart":style="{width: '800px', height: '400px'}">

      </div>
    </div>


    <div class="common_p">
      <p class="menu-title">成交额统计</p>
      <div class="echars" id="myChart1":style="{width: '800px', height: '400px'}">

      </div>
    </div>
  </div>
</template>

<script>
import SecondBar from '../../components/secondBar/secondBar'
export default {
  data() {
    return{}
  },
  mounted(){
    this.drawLine();
  },
  components:{
    SecondBar
  },
  methods:{
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          color:'#00abec',
            // title: { text: '' },
            tooltip: {},
            xAxis: {
              type: 'category',
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });

        // 基于准备好的dom，初始化echarts实例
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
        // 绘制图表
        myChart1.setOption({
          color:'#00abec',
            // title: { text: '成交额统计' },
            tooltip: {},
            xAxis: {
              type: 'category',
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
  }
}
</script>

<style lang="scss">
@import './index.scss'
</style>
