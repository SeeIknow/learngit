<template lang="html">
  <div class="table">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="0">待初审</el-menu-item>
      <el-menu-item index="1">待复审</el-menu-item>
      <el-menu-item index="2">待分诊</el-menu-item>
      <el-menu-item index="3">待面诊</el-menu-item>
      <el-menu-item index="4">待治疗</el-menu-item>
      <el-menu-item index="5">待验证</el-menu-item>
      <el-menu-item index="6">已结束</el-menu-item>
    </el-menu>
  <div class="select-p-1 clearfix">
    <div class="date-picker input-select-1">
      <span class="label-span">申请日期:</span>
      <el-date-picker
        v-model="dateValue"
        type="daterange"
        @change="getTime"
        format="yyyy-MM-dd"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </div>

    <div class="source input-select-1">
      <span class="label-span">订单号:</span>
      <el-input
        placeholder="请输入订单号"
        v-model="orderValue"
        prefix-icon="el-icon-search"
        clearable>
      </el-input>
    </div>
  </div>
  <div class="select-p-1 clearfix">
    <div class="grid-content bg-purple input-select-1">
        <span class="label-span">联系人:</span>
        <el-input
          placeholder="请输入联系人"
          v-model="nameValueConnect"
          prefix-icon="el-icon-search"
          clearable>
        </el-input>
    </div>
    <div class="grid-content bg-purple input-select-1">
        <span class="label-span">联系人手机号:</span>
        <el-input
          placeholder="请输入联系人手机号"
          v-model="phoneValueConnect"
          prefix-icon="el-icon-search"
          clearable>
        </el-input>
    </div>
  </div>
  <div class="select-p-1 clearfix">
    <div class="grid-content bg-purple input-select-1">
        <span class="label-span">患者姓名:</span>
        <el-input
          placeholder="请输入内容"
          v-model="nameValue"
          prefix-icon="el-icon-search"
          clearable>
        </el-input>
    </div>
    <div class="grid-content bg-purple input-select-1">
        <span class="label-span">证件号码:</span>
        <el-input
          placeholder="请输入证件号码"
          v-model="cardValue"
          prefix-icon="el-icon-search"
          clearable>
        </el-input>
    </div>
    <div class="grid-content bg-purple input-select-1">
        <span class="label-span">申请人手机号:</span>
        <el-input
          placeholder="请输入患者手机号"
          v-model="phoneValue"
          prefix-icon="el-icon-search"
          clearable>
        </el-input>
    </div>
    <div class="grid-content bg-purple input-select-1">
      <el-button type="primary" icon="el-icon-search" @click="getData(1)">查询</el-button>
    </div>
  </div>
  <div class="tableBox">
      <el-table
        :data="jzList.list"
        border
        align="left"
        size="medium">
        <el-table-column
          prop="orderNo"
          label="订单号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="patientName"
          label="患者姓名"
          width="80">
        </el-table-column>
        <el-table-column
          prop="firstDiseaseName"
          label="疾病"
          width="240">
        </el-table-column>
        <el-table-column
          prop="patientCertificateNo"
          label="身份证号"
          width="140">
        </el-table-column>
        <!-- <el-table-column
          prop="diseaseTypeName"
          label="疾病类型"
          width="80">
        </el-table-column> -->
        <el-table-column
          prop="contact"
          label="联系人"
          width="80">
        </el-table-column>
        <el-table-column
          prop="contactPhoneNum"
          label="联系人电话"
          width="120">
        </el-table-column>
        <el-table-column
          prop="provinceName"
          label="所在省份"
          width="80">
        </el-table-column>
        <el-table-column
          prop="cityName"
          label="所在城市"
          width="80">
        </el-table-column>
        <el-table-column
          prop="indate"
          label="订单申请时间"
          width="120">
        </el-table-column>
        <el-table-column
          prop="patientPhoneNum"
          label="申请人电话"
          width="80">
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          width="60">
          <template slot-scope="scope">
            <el-button
              prop="id"
              @click.native.prevent="goDetial(scope.$index, jzList.list)"
              type="text"
              size="small">
              {{scope.row.status | formatStata}}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination" v-if="showStatus">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="12"
        layout="prev, pager, next, jumper"
        :total="jzList.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions,mapMutations  } from 'vuex'
export default {
  data(){
    return{
      activeIndex: '0',//当前默认选中菜单
      dateValue:['',''],
      sourceValue:'',
      nameValue:'',
      cardValue:'',
      phoneValue:'',
      orderValue:'',
      nameValueConnect:'',
      phoneValueConnect:'',
      tableData4: [],
      showStatus:false,
      status:'',
      colmu:false,//多出的列
      statusBox:[],
      operation:'审核',//操作按钮
      targetFlag:'a',//默认订单状态值
    }
  },
  mounted(){
    this.getData(1);
    if(this.jzList.total>0){
      this.showStatus = true;
    }
  },
  computed:{
    ...mapGetters('order', [
      'jzList'
    ])
  },
  filters:{
    // 状态显示转换
    formatStata(status) {
      const statusMap = {
        0: '审核',
        1: '审核',
        2: '审核',
        3: '预约',
        4: '到院',
        5: '治疗确认',
        6: '验证',
        7: '查看',
        8: '查看',
        9: '查看',
        10: '查看',
        11: '查看',
        12: '查看'
      }
      return statusMap[status]
    },
  },
  methods:{
    ...mapActions('order', [
      'getOrderListJz',
    ]),

    //参数对象
    outObj(val) {
      const data = {
        "contact": this.nameValueConnect,
        "contactPhoneNum": this.phoneValueConnect,
        "inDateEnd": this.dateValue[1],
        "inDateStart": this.dateValue[0],
        "orderNo": this.orderValue,
        "pageNum": val,
        "patientCertificateNo": this.cardValue,
        "patientName": this.nameValue,
        "patientPhoneNum": this.phoneValue,
        "targetFlag": this.targetFlag
      }
      return data
    },
    // 跳转详情
    goDetial(index,table){
      // index:当前点击对象的下表
      // table:整个表格对象
      //////console.log(index);
      //////console.log(table[index].id)
      /**
       * [switch description]
       * @param  table[index].status  每一个点击对象所对应的状态值
       * @return routerName 路由名称       [description]
       */
      switch(table[index].status){
        case 0:
          var routerName = 'healthServiceDetail';
          break;
        case 1:
          var routerName = 'healthServiceDetail1';
          break;
        case 2:
          var routerName = 'healthServiceDetail2';
          break;
        case 3:
          var routerName = 'healthServiceDetail3';
          break;
        case 4:
          var routerName = 'healthServiceDetail4';
          break;
        case 5:
          var routerName = 'healthServiceDetail6';//待治疗状态 页面对应
          break;
        case 6:
          var routerName = 'healthServiceDetail5';//待验证状态 页面对应
          break;
        case 7:
          var routerName = 'healthServiceDetail7';
          break;
        case 8:
          var routerName = 'healthServiceDetail7';
          break;
        case 9:
          var routerName = 'healthServiceDetail7';
          break;
        case 10:
          var routerName = 'healthServiceDetail7';
          break;
        case 11:
          var routerName = 'healthServiceDetail7';
          break;
        case 12:
          var routerName = 'healthServiceDetail7';
          break;
        default:
        break;
      }
      this.$router.push({name:routerName,query:{id:table[index].id}})
    },
    // // 分页
    handleSizeChange(val) {
      // ////console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      //console.log(val)
      this.getData(val)
    },
    // 获取数据
    getData(val){
      this.dateValue = (this.dateValue == null ? ['',''] : this.dateValue)
      console.log(this.dateValue);
      this.getOrderListJz(this.outObj(val)).then(()=>{
        if(this.jzList.total>0){
          this.showStatus = true;
        }else{
          this.showStatus = false;
        }
        console.log(this.jzList.list)
        for(let i in this.jzList.list){
          if(this.jzList.list[i].status == 3){
            this.operation = '预约'
          }else if(this.jzList.list[i].status == 4){
            this.operation = '到院'
          }
        }
      })
    },
    getTime(){
      console.log(this.dateValue)
      // 时间组件 清楚内容
      this.dateValue = (this.dateValue == null ? ['',''] : this.dateValue)
      console.log(this.dateValue)
      console.log(this.dateValue[0],this.dateValue[1])
    },
    // 菜单切换
    handleSelect(key, keyPath) {
      this.activeIndex = key;
      if (this.activeIndex == 0){
        this.targetFlag = 'a'
        this.operation = '审核'
      }else if(this.activeIndex == 1){
        this.targetFlag = 'b'
        this.operation = '审核'
      }else if(this.activeIndex == 2){
        this.targetFlag = 'c'
        this.operation = '分诊'
      }else if(this.activeIndex == 3){
        this.targetFlag = 'd'
        this.operation = '预约'
      }else if(this.activeIndex == 4){
        this.targetFlag = 'e'
        this.operation = '治疗确认'
      }else if(this.activeIndex == 5){
        this.targetFlag = 'f'
        this.operation = '验证'
      }else{
        this.targetFlag = 'g'
        this.operation = '查看'
      }
      // 菜单切换 日期组件重新赋值
      this.dateValue =['','']
      this.getData(1)
     }
  }
}
</script>

<style lang="scss">
@import '../../../styles/table.scss';
</style>
