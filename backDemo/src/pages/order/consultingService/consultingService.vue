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

    <!-- <div class="source input-select-1">
      <span class="label-span">来源渠道:</span>
      <el-select v-model="sourceValue" clearable placeholder="请选择">
        <el-option
          v-for="item in sourceOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div> -->
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
      <el-button type="primary" icon="el-icon-search" @click="getData(1)">查询</el-button>
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
          :formatter="formatRole1"
          width="80">
        </el-table-column>
        <el-table-column
          prop="consultQuestion"
          label="问题"
          width="240">
        </el-table-column>
        <el-table-column
          prop="diseaseLabel"
          label="咨询疾病"
          width="140">
        </el-table-column>
        <!-- <el-table-column
          prop="diseaseTypeName"
          label="疾病类型"
          width="80">
        </el-table-column> -->
        <el-table-column
          prop="patientName"
          label="患者姓名"
          width="80">
        </el-table-column>
        <el-table-column
          prop="patientPhoneNum"
          label="联系人电话"
          width="120">
        </el-table-column>
        <el-table-column
          prop="patientAge"
          label="患者年龄"
          width="80">
        </el-table-column>
        <el-table-column
          prop="doctorName"
          label="医生"
          width="80">
        </el-table-column>
        <el-table-column
          prop="doctorPosition"
          label="医生职称"
          width="80">
        </el-table-column>
        <el-table-column
          prop="indate"
          label="咨询时间"
          width="115">
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
        :page-size="12"
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
    this.getData(1);
    if(this.list.total>0){
      this.showStatus = true;
    }
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
    outObj(val) {
      const data = {
        certificateNo: this.cardValue,
        inDateEnd: this.dateValue[1],
        inDateStart: this.dateValue[0],
        orderNo: this.list.orderNo,
        patientName:this.nameValue,
        phoneNum:this.phoneValue,
        status:this.activeIndex,
        pageNum:val
      }
      return data
    },
    formatRole(row,column){
      return row.status  == 0 ? "待分诊" : row.status == 1 ? "待回复" : row.status == 2 ? "已回复" : row.status ==3 ? "已采纳" : row.status ==4 ? "已关闭" :  "未通过";
    },
    formatRole1(row,column){
      return row.type  == 0 ? "免费订单" : "专家问诊";
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
          var routerName = 'orderExmin';
          break;
        case 1:
          var routerName = 'orderExmin1';
          break;
        case 2:
          var routerName = 'orderExmin1';
          break;
        case 3:
          var routerName = 'orderExmin4';
          break;
        case 4:
          var routerName = 'orderExmin3';
          break;
        case 5:
          var routerName = 'orderExmin2';
          break;
      }
      eventBus.$emit('transmit',table[index].id)
      this.$router.push({name:routerName,query:{id:table[index].id,type:table[index].status}})
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
      this.getOrderList(this.outObj(val)).then(()=>{
        if(this.list.total>0){
          this.showStatus = true;
        }else{
          this.showStatus = false;
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
        this.colmu = true
        this.operation = '审核分诊'
      }else if(this.activeIndex == 1){
        this.operation = '回复'
        this.colmu = false
      }else{
        this.operation = '查看'
        this.colmu = false
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
