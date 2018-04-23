<template lang="html">
  <div class="detail-c-box">
    <div class="trade-outer-box">
      <div class="trade-header-top">
        <span>运营数据</span>
        <el-radio-group v-model="radio3" style="margin-left:60px;">
          <el-radio-button label="本月"></el-radio-button>
          <el-radio-button label="昨日"></el-radio-button>
          <el-radio-button label="近7日"></el-radio-button>
          <el-radio-button label="近30日"></el-radio-button>
        </el-radio-group>
        <el-date-picker
         v-model="date"
         type="daterange"
         range-separator="至"
         start-placeholder="开始日期"
         end-placeholder="结束日期" style="margin-left:60px;">
       </el-date-picker>
       <el-button type="primary" style="margin-left:60px;">导出数据</el-button>
      </div>


      <!-- 内部数据 -->
      <div class="trade-inner-box">
        <div class="charts-b">
          <div class="table-trade">
            <div class="tabel-title-tr">
              <span>浏览人数</span>
              <span>下单数量</span>
              <span>下单金额</span>
              <span>预约数量</span>
              <span>就诊数量</span>
              <span>消费数量</span>
              <span>消费金额</span>
              <span>评价数量</span>
            </div>
            <div class="tabel-title-td">
              <span>11</span>
              <span>1</span>
              <span>4432</span>
              <span>1321</span>
              <span>131</span>
              <span>53</span>
              <span>131</span>
              <span>545</span>
            </div>
          </div>
          <div class="charts-p" id="muCharts" style="width:600px;height:400px;margin:20px;">

          </div>
        </div>
        <div class="account-b clearfix">
          <div class="doc-account">
            <p class="account-t">医生总览</p>
            <div class="account-p-b clearfix">
              <div class="item">
                <p class="num">1000</p>
                <p class="num-words">本月新增</p>
              </div>
              <div class="item">
                <p class="num">1000</p>
                <p class="num-words">认证总数</p>
              </div>
              <div class="item">
                <p class="num">1000</p>
                <p class="num-words">医生总数</p>
              </div>
            </div>
          </div>

          <div class="doc-account">
            <p class="account-t">会员总览</p>
            <div class="account-p-b clearfix">
              <div class="item">
                <p class="num">1000</p>
                <p class="num-words">本月新增</p>
              </div>
              <div class="item">
                <p class="num">1000</p>
                <p class="num-words">VIP总数</p>
              </div>
              <div class="item">
                <p class="num">1000</p>
                <p class="num-words">会员总数</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      radio3:'本月',
      date:''
    }
  },
  mounted(){
    this.charts();
  },
  methods:{
    charts(){
      let myChart = this.$echarts.init(document.getElementById('muCharts'));
      let option = {
          title: {
              text: '漏斗图',
              subtext: '纯属虚构'
          },
          tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c}%"
          },
          legend: {
              data: ['浏览人数','下单','预约','就诊','消费','评价']
          },
          calculable: true,
          series: [
              {
                  name:'漏斗图',
                  type:'funnel',
                  left: '10%',
                  top: 60,
                  //x2: 80,
                  bottom: 60,
                  width: '80%',
                  // height: {totalHeight} - y - y2,
                  min: 0,
                  max: 100,
                  minSize: '0%',
                  maxSize: '100%',
                  sort: 'descending',
                  gap: 2,
                  label: {
                      normal: {
                          show: true,
                          position: 'inside'
                      },
                      emphasis: {
                          textStyle: {
                              fontSize: 20
                          }
                      }
                  },
                  labelLine: {
                      normal: {
                          length: 10,
                          lineStyle: {
                              width: 1,
                              type: 'solid'
                          }
                      }
                  },
                  itemStyle: {
                      normal: {
                          borderColor: '#fff',
                          borderWidth: 1
                      }
                  },
                  data: [
                      {value: 60, name: '浏览人数'},
                      {value: 40, name: '下单'},
                      {value: 20, name: '预约'},
                      {value: 80, name: '就诊'},
                      {value: 100, name: '消费'},
                      {value: 70, name: '评价'}

                  ]
              }
          ]
      }
      myChart.setOption(option);
    }
  }
}
</script>

<style lang="scss">
@import '../../../styles/detailCommon.scss';
@import './tradeStatistics.scss'
</style>
