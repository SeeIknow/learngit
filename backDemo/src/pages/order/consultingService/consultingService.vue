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
      <el-button type="primary" icon="el-icon-search">查询</el-button>
    </div>
  </div>
  <div class="tableBox">
      <el-table
        :data="tableData4"
        size="medium">
        <el-table-column
          fixed
          prop="orderNo"
          label="订单号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="type"
          label="订单类型"
          width="80">
        </el-table-column>
        <el-table-column
          prop="consultQuestion"
          label="问题"
          width="120">
        </el-table-column>
        <el-table-column
          prop="diseaseName"
          label="疾病"
          width="100">
        </el-table-column>
        <el-table-column
          prop="diseaseTypeName"
          label="疾病类型"
          width="80">
        </el-table-column>
        <el-table-column
          prop="patientName"
          label="患者姓名"
          width="60">
        </el-table-column>
        <el-table-column
          prop="patientPhoneNum "
          label="联系人电话"
          width="80">
        </el-table-column>
        <el-table-column
          prop="doctorName "
          label="医生"
          width="60">
        </el-table-column>
        <el-table-column
          prop="needHelp "
          label="追问"
          width="120">
        </el-table-column>
        <el-table-column
          label="操作"
          width="60">
          <template slot-scope="scope">
            <el-button
              prop="id"
              @click.native.prevent="goDetial(scope.$index, tableData4)"
              type="text"
              size="small">
              查看
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  <div class="pagination" v-if="showStatus">
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="pagesize"
      layout="prev, pager, next, jumper"
      :total="pagesize">
    </el-pagination>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentPage3:1,
      activeIndex: '0',//当前默认选中菜单
      dateValue:'',
      sourceValue:'',
      sourceOptions:[
        {value:'1',lable:'渠道1'},
        {value:'2',lable:'渠道2'},
        {value:'3',lable:'渠道3'}
      ],
      pagesize:'',
      nameValue:'',
      cardValue:'',
      phoneValue:'',
      tableData4: [],
      showStatus:false
    }
  },
  mounted(){
    this.getData(0);
  },
  methods:{
    goDetial(index,table){
      // index:当前点击对象的下表
      // table:整个表格对象
      console.log(index);
      console.log(table[index].id)
      this.$router.push({name:'orderExmin',params:{id:table[index].id}})
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    getData(status){
      this.$store.dispatch('order/getList',status).then(() => {
        this.tableData4 = this.$store.state.order.list.list;
        console.log(this.tableData4)
        this.pagesize = this.$store.state.order.list.size;
        if(this.pagesize == 0){
          this.showStatus = false
        }else{
          this.showStatus = true;
        }
      })
    },
    handleSelect(key, keyPath) {
       this.getData(key)
     }
  }
}
</script>

<style lang="scss">
@import '../table.scss'
</style>
