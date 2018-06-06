<template lang="html">
  <div class="table">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="0">待预约</el-menu-item>
      <el-menu-item index="1">待就诊</el-menu-item>
      <!-- <el-menu-item index="4">预约失败</el-menu-item>
      <el-menu-item index="5">已取消</el-menu-item>
      <el-menu-item index="3">未就诊</el-menu-item> -->
      <el-menu-item index="2">已结束</el-menu-item>
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
        :data="listYY.list"
        border
        align="left"
        size="medium">
        <el-table-column
          prop="orderNo"
          label="订单号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="patientName"
          label="患者姓名"
          width="80">
        </el-table-column>
        <el-table-column
          prop="patientCertificateNo"
          label="证件号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="patientPhoneNum"
          label="联系电话"
          width="100">
        </el-table-column>
        <el-table-column
          prop="doctorName"
          label="医生"
          width="80">
        </el-table-column>
        <el-table-column
          prop="doctorPosition"
          label="职称"
          width="60">
        </el-table-column>
        <el-table-column
          prop="doctorOrganization"
          label="出诊医院"
          width="100">
        </el-table-column>
        <el-table-column
          prop="departmentName"
          label="科室"
          width="80">
        </el-table-column>
        <el-table-column
          prop="clinicDate"
          label="就诊日期"
          width="120">
        </el-table-column>
        <el-table-column
          prop="ampm"
          label="就诊时段"
          :formatter="formatRole1"
          width="120">
        </el-table-column>
        <el-table-column
          prop="servicePrice"
          label="服务费"
          width="80">
        </el-table-column>
        <!-- <el-table-column
          prop="servicePrice"
          v-if="a1"
          label="陪诊"
          width="80">
        </el-table-column>
        <el-table-column
          prop="servicePrice"
          label="陪诊人"
          v-if="a2"
          width="80">
        </el-table-column> -->
        <!-- <el-table-column
          prop="serviceCategoryType"
          label="渠道"
          width="120">
        </el-table-column> -->
        <el-table-column
          prop="status"
          :formatter="formatRole2"
          v-if="a3"
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
              @click.native.prevent="goDetial(scope.$index, listYY.list)"
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
        :total="listYY.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
/**
 *
 * status 0 全部显示除了a1 a2 a3;
 * 1 全部显示 除了a3
 * 2 全部显示
 * @type {String}
 */
import { mapGetters, mapActions,mapMutations  } from 'vuex'
export default {
  data(){
    return{
      activeIndex: '0',//当前默认选中菜单
      a1:false,//表格列状态 显示与隐藏
      a2:false,
      a3:false,
      sourceValue:'',
      nameValue:'',
      cardValue:'',
      phoneValue:"",
      sourceOptions:[
        {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        },
      ],
      showStatus:false,
      dateValue:['',''],
      operation:'预约',//操作按钮
    }
  },
  mounted(){
    this.getData(1);
  },
  computed:{
    ...mapGetters('order', [
      'listYY'
    ])
  },
  methods:{
    ...mapActions('order', [
      'getOrderListYY',
    ]),
    ...mapMutations('order', [
      'LIST.GET_LIST_YY',
    ]),
    formatRole1(row,column){
      return row.ampm  == 1 ? "上午" : "下午";
    },
    formatRole2(row,column){
      return row.status == 2 ? "已就诊" : row.status == 3 ? "未就诊" :row.status == 4? "预约失败":"已取消"
    },
    //参数对象
    outObj(val) {
      const data = {
        patientCertificateNo: this.cardValue,
        inDateEnd: this.dateValue[1],//时间组件返回值为一个数组
        inDateStart: this.dateValue[0],
        orderNo: '',
        patientName:this.nameValue,
        patientPhoneNum:this.phoneValue,
        type:2,
        status:this.activeIndex,
        pageNum:val
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
          var routerName = 'orderOutpatientAppointment';
          break;
        case 1:
          var routerName = 'orderOutpatientAppointment3';//就诊新增
          break;
        case 2:
          var routerName = 'orderOutpatientAppointment4';//就诊新增
          break;
        case 3:
          var routerName = 'orderOutpatientAppointment4';//就诊新增
          break;
        case 4:
          var routerName = 'orderOutpatientAppointment4';//就诊新增
          break;
        case 5:
          var routerName = 'orderOutpatientAppointment4';//就诊新增
          break;
      }
      this.$router.push({name:routerName,query:{id:table[index].id,status:table[index].status}})
    },
    // 分页
    handleSizeChange(val) {
      //////console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      //////console.log(`当前页: ${val}`);
      this.getData(val)
    },
    // 获取数据
    getData(val){
        this.dateValue = (this.dateValue == null ? ['',''] : this.dateValue)
      this.getOrderListYY(this.outObj(val)).then(() =>{
        if(this.listYY.total>0){
          this.showStatus = true;
        }else{
          this.showStatus = false;
        }
      })
    },
    getTime(){
      // 时间组件 清楚内容
      this.dateValue = (this.dateValue == null ? ['',''] : this.dateValue)
    },
    // 菜单切换
    handleSelect(key, keyPath) {
      this.activeIndex = key;
      // 表格列 的显示与隐藏
      if(this.activeIndex == 0){
        this.a1 = false;
        this.a2 = false;
        this.a3 = false;
        this.operation = '预约'
      }else if(this.activeIndex == 1){
        this.a3 = false;
        this.a1 = true;
        this.a2 = true;
        this.operation = '就诊确认'
      }else{
        this.a3 = true;
        this.a1 = true;
        this.a2 = true;
        this.operation = '查看'
      }
      // 菜单切换 日期组件重新赋值
      this.dateValue = ['','']
       this.getData(1)
     }
  }
}
</script>

<style lang="scss">
@import '../../../styles/table.scss';
</style>
