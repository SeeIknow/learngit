<template lang="html">
  <div class="table">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="0">待分诊</el-menu-item>
      <el-menu-item index="1">待回复</el-menu-item>
      <el-menu-item index="2">已完成</el-menu-item>
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
      <span class="label-span">来源渠道:</span>
      <el-select v-model="sourceValue" clearable placeholder="请选择">
        <el-option
          v-for="item in sourceOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
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
        <span class="label-span">患者手机号:</span>
        <el-input
          placeholder="请输入患者手机号"
          v-model="phoneValue"
          prefix-icon="el-icon-search"
          clearable>
        </el-input>
    </div>
    <div class="grid-content bg-purple input-select-1">
      <el-button type="primary" icon="el-icon-search" @click="getData()">查询</el-button>
    </div>
  </div>
  <div class="tableBox">
      <el-table
        :data="list.list"
        border
        align="left"
        size="medium">
        <el-table-column
          prop="orderNo"
          label="订单号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="type"
          label="订单类型"
          width="80">
        </el-table-column>
        <el-table-column
          prop="consultQuestion"
          label="问题"
          width="240">
        </el-table-column>
        <el-table-column
          prop="diseaseName"
          label="疾病"
          width="140">
        </el-table-column>
        <el-table-column
          prop="diseaseTypeName"
          label="疾病类型"
          width="80">
        </el-table-column>
        <el-table-column
          prop="patientName"
          label="患者姓名"
          width="80">
        </el-table-column>
        <el-table-column
          prop="patientPhoneNum "
          label="联系人电话"
          width="120">
        </el-table-column>
        <el-table-column
          prop="doctorName "
          label="医生"
          width="80">
        </el-table-column>
        <el-table-column
          prop="needHelp "
          label="追问"
          width="200">
        </el-table-column>
        <el-table-column
          prop="status"
          v-if="colmu"
          :formatter="formatRole"
          label="结束类型"
          width="120">
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          width="60">
          <template slot-scope="scope">
            <el-button
              prop="id"
              @click.native.prevent="goDetial(scope.$index, list.list)"
              type="text"
              size="small">
              {{operation}}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination" v-if="showStatus">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="list.total">
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
      sourceOptions:[
        {value:'1',lable:'渠道1'},
        {value:'2',lable:'渠道2'},
        {value:'3',lable:'渠道3'}
      ],
      nameValue:'',
      cardValue:'',
      phoneValue:'',
      tableData4: [],
      showStatus:false,
      status:'',
      colmu:false,//多出的列
      statusBox:[],
      operation:'审核分诊',//操作按钮
    }
  },
  mounted(){
    this.getData();
  },
  computed:{
    ...mapGetters('order', [
      'list'
    ])
  },
  methods:{
    ...mapActions('order', [
      'getOrderList',
    ]),
    ...mapMutations('order', [
      'LIST.GET_LIST',
    ]),
    //参数对象
    outObj(status = 0,certificateNo='',inDateEnd='',inDateStart='',orderNo='',patientName='',phoneNum='') {
      const data = {
        certificateNo: this.cardValue,
        inDateEnd: this.dateValue[1],
        inDateStart: this.dateValue[0],
        orderNo: this.list.orderNo,
        patientName:this.nameValue,
        phoneNum:this.phoneValue,
        type:0,
        status:this.activeIndex
      }
      return data
    },
    formatRole(row,column){
      return row.authority == 0 ? "待分诊" : row.authority == 1 ? "待回复" : row.authority == 2 ? "已回复" : row.authority ==3 ? "已采纳" : row.authority ==4 ? "已关闭" :  "未通过";
    },
    // 跳转详情
    goDetial(index,table){
      // index:当前点击对象的下表
      // table:整个表格对象
      console.log(index);
      console.log(table[index].id)
      /**
       * [switch description]
       * @param  table[index].status  每一个点击对象所对应的状态值
       * @return routerName 路由名称       [description]
       */
      switch(table[index].status){
        case 0:
          var routerName = 'orderExmin';
          break;
        case 1||2:
          var routerName = 'orderExmin1';
          break;
        case 3:
          var routerName = 'orderExmin2';
          break;
        case 4:
          var routerName = 'orderExmin3';
          break;
        case 5:
          var routerName = 'orderExmin4';
          break;
      }
      this.$router.push({name:routerName,params:{id:table[index].id}})
    },
    // // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 获取数据
    getData(){
      console.log(this.dateValue);
      this.getOrderList(this.outObj())
    },
    getTime(){
      // 时间组件 清楚内容
      this.dateValue = (this.dateValue == null ? ['',''] : this.dateValue)
    },
    // 菜单切换
    handleSelect(key, keyPath) {
      this.activeIndex = key;
      if (this.activeIndex == 1){
        this.colmu = true
        this.operation = '审核分诊'
      }else if(this.activeIndex == 2){
        this.operation = '回复'
        this.colmu = false
      }else{
        this.operation = '查看'
        this.colmu = false
      }
      // 菜单切换 日期组件重新赋值
      this.dateValue = (this.dateValue == null ? ['',''] : this.dateValue)
       this.getOrderList(this.outObj())
     }
  }
}
</script>

<style lang="scss">
@import '../../../styles/table.scss';
</style>
