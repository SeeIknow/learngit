<template lang="html">
  <div class="index">
    <second-bar></second-bar>
    <!-- <el-button type="primary" style="float:right" icon="el-icon-search">刷新</el-button> -->
    <div class="flowBox">
      <div class="flowItem">
        <svg-icon name="stacked_column"></svg-icon>
        <div class="words-ammount">
          <p>今日订单总数</p>
          <p>{{topValue1}}</p>
        </div>
      </div>
      <div class="flowItem">
        <svg-icon name="money"></svg-icon>
        <div class="words-ammount">
          <p>今日成交总额</spapn>
          <p>{{topValue2}}</p>
        </div>
      </div>
      <div class="flowItem">
        <svg-icon name="trend"></svg-icon>
        <div class="words-ammount">
          <p>昨日成交总额</p>
          <p>{{topValue3}}</p>
        </div>
      </div>
      <div class="flowItem">
        <svg-icon name="calculate"></svg-icon>
        <div class="words-ammount">
          <p>近7日成交总额</p>
          <p>{{topValue4}}</p>
        </div>
      </div>
    </div>
    <div class="pending-order common_p">
      <p class="menu-title">待处理订单</p>
      <div class="order-menu clearfix">
        <!-- <el-menu
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
        </el-menu> -->
        <select-component :order-list="orderList"></select-component>
      </div>
    </div>
    <div class="common_p">
      <p class="menu-title">快捷添加</p>
      <div class="order-menu clearfix">
        <add-menu></add-menu>
      </div>
    </div>
    <!-- <div class="common_p">
      <p class="menu-title">订单量统计</p>
      <div class="echars" id="myChart":style="{width: '800px', height: '400px'}">

      </div>
    </div>


    <div class="common_p">
      <p class="menu-title">成交额统计</p>
      <div class="echars" id="myChart1":style="{width: '800px', height: '400px'}">

      </div>
    </div> -->
    <div class="common_p">
      <div class="trade-outer-box">
      <div class="trade-header-top">
        <span>交易统计</span>
        <el-radio-group v-model="radio3" @change="select()"style="margin-left:60px;">
          <el-radio-button label="本月"></el-radio-button>
          <el-radio-button label="昨日"></el-radio-button>
          <el-radio-button label="近7日"></el-radio-button>
          <el-radio-button label="近30日"></el-radio-button>
        </el-radio-group>
        <el-date-picker
         v-model="date"
         type="daterange"
         range-separator="至"
         @change = "dateChange"
         format="yyyy-MM-dd"
         start-placeholder="开始日期"
         end-placeholder="结束日期" style="margin-left:60px;">
       </el-date-picker>
       <!-- <el-button type="primary" style="margin-left:60px;">导出数据</el-button> -->
      </div>


      <!-- 内部数据 -->
      <div class="trade-inner-box">
        <div class="charts-b">
          <div class="table-trade">
            <span>统计类型:</span>
            <el-select v-model="statisticType" placeholder="请选择" @change="statistSelect">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span>订单类型:</span>
            <el-select v-model="orderType" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-button type="primary" style="margin-left:60px;" @click="search()">搜索</el-button>
          </div>
          <div id="main" style="width: 600px; height: 400px;"></div>
        </div>
      </div>
      <!-- 内部数据 -->
      <div class="trade-inner-box">
        <!-- <div class="charts-b">
          <div class="table-trade">
            <span>统计类型:</span>
            <el-select v-model="statisticType1" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span>订单类型:</span>
            <el-select v-model="orderType1" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-button type="primary" style="margin-left:60px;" @click="search()">搜索</el-button>
          </div> -->
          <div id="main2" style="width: 600px; height: 400px;"></div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import SecondBar from '@/components/secondBar/secondBar'
import SelectComponent from '@/components/selectComponent/selectComponent'
import addMenu from '@/components/addMenu/addMenu'
import {mapActions} from 'vuex'
import {getMonthDays} from '@/utils'
export default {
  data(){
    return{
      radio3:'本月',
      date:['',''],
      options: [{
          value: 1,
          label: '订单数量'
        }, {
          value: '2',
          label: '订单金额'
        }],
    options1: [{
        value: 0,
        label: '全部订单'
      },{
        value: '1',
        label: '专家问诊'
      },{
        value: '2',
        label: '门诊预约'
      },{
        value: '3',
        label: '就诊服务'
      }],
        value:'',
        value1:'',
        statisticType:'',
        statisticType1:'',
        orderType:'',
        orderType1:'',
        startDate:'',
        endDate:'',
        val:'',
        topValue1:'',
        topValue2:"",
        topValue3:'',
        topValue4:'',
        orderList:[]
    }
  },
  mounted(){
  //初始化赋值
  this.statisticType = 1
  this.orderType = 0
  this.statisticType1 = 1
  this.orderType1 = 0
  this.startDate = getMonthDays().firstdate
  this.endDate = getMonthDays().lastdate
  this.charts();
  this.getPendingOrder().then((res) =>{
    this.orderList = res.data
  })
  this.getPaymentOrder().then((res) =>{
    this.topValue1 = res.data.count
    this.topValue2 = res.data.amounts
    this.topValue3 = res.data.yamounts
    this.topValue4 = res.data.wamounts
  })
  },
  methods:{
    ...mapActions([
      'getTradeStatic',
      'getOrderStatic',
      'getPaymentOrder',
      'getPendingOrder'
    ]),
    search(){
      //console.log(111)
      this.charts()
    },
    statistSelect(){

      if(this.statisticType ==2){
        this.val = '元'
      }else{
        this.val = ''
      }
    },
    select(){
      //console.log(this.radio3)
      switch(this.radio3){
        case '本月':
          this.startDate  = getMonthDays().firstdate
          this.endDate = getMonthDays().lastdate
          break;
        case '昨日':
          this.startDate  = getMonthDays().zuotian
          this.endDate = getMonthDays().zuotian
          break;
        case '近7日':
          this.startDate  = getMonthDays().sevenDaysF
          this.endDate = getMonthDays().sevenDaysL
          break;
        case '近30日':
          this.startDate  = getMonthDays().thirtyDaysF
          this.endDate = getMonthDays().thirtyDaysL
          break;
      }
      //console.log(this.exportData())
      this.charts()
    },
    dateChange(val){
      //console.log(this.moment(this.date[0]).format('YYYY-MM-DD'))
      this.startDate = this.moment(this.date[0]).format('YYYY-MM-DD')
      this.endDate = this.moment(this.date[1]).format('YYYY-MM-DD')
    },
    exportData(){
      const data = {
        'statisticType':this.statisticType,
        'orderType':this.orderType,
        'startDate':this.startDate,
        'endDate':this.endDate
      }
      const data1 = {
        'statisticType':this.statisticType,
        'orderType':this.orderType,
        'startDate':this.startDate,
        'endDate':this.endDate
      }
      const dataA = {
        'data':data,
        'data1':data1
      }
      return dataA;
    },
    charts(){
      let myChart = this.$echarts.init(document.getElementById('main'));
      let myChart1 = this.$echarts.init(document.getElementById('main2'));
      var option = {
			title : {// 图表标题，可以通过show:true/false控制显示与否，还有subtext:'二级标题',link:'http://www.baidu.com'等
				text : '订单统计实例'
			},
			tooltip : {// 这个是鼠标浮动时的工具条，显示鼠标所在区域的数据，trigger这个地方每种图有不同的设置，见官网吧，一两句说不清楚
				trigger : 'axis'
			},
			legend : {// 这个就是图例，也就是每条折线或者项对应的示例，就是这个<a target=_blank href="https://img-blog.csdn.net/20160622094820180?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center">图例</a>
				data : [],
			},
			toolbox : {
				feature : {
					saveAsImage : {}
				// 工具，提供几个按钮，例如动态图表转换，数据视图，保存为图片等
				}
			},
			grid : {
				left : '3%',
				right : '4%',
				bottom : '3%',// 这几个属性可以控制图表上下左右的空白尺寸，可以自己试试。
				containLabel : true
			},
			xAxis : [ {
				type : 'category',
				boundaryGap : false,
				data : []
			// X轴的定义
			} ],
			yAxis : [ {
				type : 'value',// Y轴的定义
        axisLabel : {
            formatter: '{value}'+this.val
        }
			}],
			series : []
		};
    var option1 = {
		    backgroundColor: 'white',
			title : {// 图表标题，可以通过show:true/false控制显示与否，还有subtext:'二级标题',link:'http://www.baidu.com'等
				text : '来源渠道实例',
				x:'left'
			},
			tooltip : {// 这个是鼠标浮动时的工具条，显示鼠标所在区域的数据，trigger这个地方每种图有不同的设置，见官网吧，一两句说不清楚  7
				trigger: 'item',
				 formatter: '{b} : {c} ({d}%)'
			},
			legend : {// 这个就是图例，也就是每条折线或者项对应的示例，就是这个<a target=_blank href="https://img-blog.csdn.net/20160622094820180?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center">图例</a>
				orient: 'vertical',
			    left: 'right',
				data : ['百度','京东','新浪']
			},
			series : [ {
	            name: '来源渠道',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[],
	            itemStyle: {
	            	normal:{
	                    label:{
	                      show: true,
	                      formatter: '{b} : {c} ({d}%)'
	                    },
	                    labelLine :{show:true}
	                  },
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }]
		};
    // 交易统计折线图
    this.getTradeStatic(this.exportData().data1).then((res) =>{
      const jsons = res.data;
      const Item = function() {
					return {
						name : '',
						type : 'line',
						data : []
					}
				};
				var legends = [];
				var Series = [];
				var json = jsons.data;
				for (var i = 0; i < json.length; i++) {
					var it = new Item();
					it.name = json[i].name;
					legends.push(json[i].name);
					it.data = json[i].ydata;
					Series.push(it);
				}
        // 横轴坐标
				option.xAxis[0].data = jsons.xcontent;
				option.legend.data = legends;
				option.series = Series;
        myChart.setOption(option);
    })
    myChart1.showLoading();// 加载动画
    this.getOrderStatic(this.exportData().data).then((res) =>{
      //console.log(res);
      myChart1.setOption({
				       series:[{
				           data:  res.data
				       }],
               legend:{
                 data:res.data.name
               }
				   });
				 myChart1.hideLoading();
    })
      myChart1.setOption(option1);
    }
  },
  components:{
    SelectComponent,
    addMenu,
    SecondBar
  }
}
</script>

<style lang="scss">
@import './index.scss';
.trade-outer-box{
  text-align:left;
  .trade-header-top{
    margin:20px 0;
  }
  .table-trade{
    margin-bottom:20px;
  }
  .el-select{
    margin-left:60px;
  }
}
// @import '@/pages/count/tradeStatistics/tradeStatistics.scss'
</style>
