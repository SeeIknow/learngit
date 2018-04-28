<template lang="html">
  <div class="table">
  <div class="select-p-1 clearfix">
    <div class="date-picker input-select-1">
      <span class="label-span">注册日期:</span>
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
      <span class="label-span">审核状态:</span>
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
        <span class="label-span">医生姓名:</span>
        <el-input
          placeholder="请输入姓名"
          v-model="nameValue"
          prefix-icon="el-icon-search"
          clearable>
        </el-input>
    </div>
    <div class="grid-content bg-purple input-select-1">
        <span class="label-span">医院名称:</span>
        <el-input
          placeholder="请输入医院名称"
          v-model="hospitalValue"
          prefix-icon="el-icon-search"
          clearable>
        </el-input>
    </div>
    <div class="grid-content bg-purple input-select-1">
        <span class="label-span">联系手机:</span>
        <el-input
          placeholder="请输入手机号"
          v-model="phoneValue"
          prefix-icon="el-icon-search"
          clearable>
        </el-input>
    </div>
    <div class="grid-content bg-purple input-select-1">
      <el-button type="primary" icon="el-icon-search" @click="getData()">查询</el-button>
      <el-button type="primary" icon="el-icon-plus" @click="add()">添加</el-button>
    </div>
  </div>
  <div class="tableBox">
      <el-table
        :data="userList.list"
        size="medium">
        <el-table-column
          fixed
          prop="id"
          label="医生ID"
          width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="医生姓名"
          width="80">
        </el-table-column>
        <el-table-column
          prop="phoneNum"
          label="手机号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="account"
          label="账户名"
          width="100">
        </el-table-column>
        <el-table-column
          prop="positionName"
          label="职称"
          width="80">
        </el-table-column>
        <el-table-column
          prop="hospitalName "
          label="所属医院"
          width="60">
        </el-table-column>
        <el-table-column
          prop="departmentName "
          label="科室"
          width="80">
        </el-table-column>
        <el-table-column
          prop="certificationStatus"
          label="资格认证"
          width="60">
        </el-table-column>
        <el-table-column
          prop="licenseStatus  "
          label="职业认证"
          width="120">
        </el-table-column>
        <el-table-column
          prop="levelName"
          label="级别"
          width="120">
        </el-table-column>
        <el-table-column
          prop="accountCheckStatus"
          label="审核状态"
          width="120">
        </el-table-column>
        <el-table-column
          prop="accountLockStatus"
          label="冻结状态"
          width="120">
        </el-table-column>
        <el-table-column
          label="操作"
          width="60">
          <template slot-scope="scope">
            <el-button
              prop="id"
              @click.native.prevent="goDetial(scope.$index,userList.list)"
              type="text"
              size="small">
              编辑
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
        :total="userList.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions,mapMutations  } from 'vuex'
export default {
  data(){
    return{
      activeIndex:0,
      dateValue:['',''],
      sourceValue:'',
      sourceOptions:[
        {value:'1',lable:'审核'},
        {value:'0',lable:'未审核'},
      ],
      nameValue:'',
      hospitalValue:'',
      phoneValue:'',
      // tableData4: [],//表格数据
      showStatus:false
    }
  },
  mounted(){
    this.getData();
    if(this.userList.total>0){
      this.showStatus = true;
    }
  },
  computed:{
    ...mapGetters('user', [
      'userList'
    ])
  },
  methods:{
    ...mapActions('user', [
      'getUserList',
    ]),
    ...mapMutations('user', [
      'LIST.GET_DOCTOR',
    ]),
    //参数对象
    outObj() {
      const data = {
          "accountCheckStatus": this.sourceValue,
          "doctorName": this.nameValue,
          "hospitalName": this.hospitalValue,
          "inDateEnd": this.dateValue[1],
          "inDateStart": this.dateValue[0],
          "phoneNum": this.phoneValue
        }
      return data
    },
    // 跳转详情
    goDetial(index,table){
      // index:当前点击对象的下表
      // table:整个表格对象
      console.log(index);
      console.log(table[index].id)
      this.$router.push({name:'doctorEdit',params:{id:table[index].id}})
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
      this.getUserList(this.outObj())
    },
    getTime(){
      // 时间组件 清楚内容
      this.dateValue = (this.dateValue == null ? ['',''] : this.dateValue)
    },
    // 菜单切换
    handleSelect(key, keyPath) {
      this.activeIndex = key;
      // 菜单切换 日期组件重新赋值
      this.dateValue = (this.dateValue == null ? ['',''] : this.dateValue)
       this.getData()
     },
     add(){
       this.$router.push({name:'doctorAdd'})
     },
     addHospitalList(){
       this.$router.push({name:'addHospitalList'})
     }
  }
}
</script>

<style lang="scss">
@import '../../../styles/table.scss';
</style>
