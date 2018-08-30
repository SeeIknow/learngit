<template lang="html">
  <div class="table" v-loading="loading">
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
    <div class="source input-select-1">
      <span class="label-span">是否为推荐医生:</span>
      <el-select v-model="doctorValue" clearable placeholder="请选择">
        <el-option
          v-for="item in doctorOptions"
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
      <el-button type="primary" icon="el-icon-search" @click="search()">查询</el-button>
      <el-button type="primary" icon="el-icon-plus" @click="add()">添加</el-button>
    </div>
    <div class="grid-content bg-purple input-select-1">
      <el-button type="primary"  @click="downLoad()">医生模板下载</el-button>
      <el-button type="primary" >医生模板导入</el-button>
      <input type='file'  @change="addExcel" name="医生模板导入" style="opacity:0;margin-left:-130px;z-index:1000">
    </div>
  </div>
  <div class="tableBox">
      <el-table
        :data="userList.list"
        size="medium">
        <!-- <el-table-column
          prop="id"
          label="医生ID"
          width="80">
        </el-table-column> -->
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
          prop="hospitalName"
          label="所属医院"
          width="100">
        </el-table-column>
        <el-table-column
          prop="departmentName"
          label="科室"
          width="80">
        </el-table-column>
        <el-table-column
          prop="certificationStatus"
          label="资格认证"
          :formatter='formatRole2'
          width="60">
        </el-table-column>
        <el-table-column
          prop="licenseStatus"
          label="执业认证"
          :formatter="formatRole3"
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
          :formatter="formatRole"
          width="120">
        </el-table-column>
        <el-table-column
          prop="accountLockStatus"
          label="冻结状态"
          :formatter="formatRole1"
          width="80">
        </el-table-column>
        <el-table-column
          label="操作"
          fixed=right
          width="120">
          <template slot-scope="scope">
            <el-button
              prop="id"
              @click.native.prevent="goDetial(scope.$index,userList.list)"
              type="text"
              size="small">
              编辑
            </el-button>
          </br>
            <el-button
             @click="setDoctorActive(scope.row.recommend,scope.row.id)" type="text"
            title="设置为推荐医生"
            size="mini">{{scope.row.recommend | filtersMate}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination" v-if="showStatus">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="12"
        :current-page.sync="currentPage2"
        layout="prev, pager, next, jumper"
        :total="userList.total">
      </el-pagination>
    </div>
    <el-dialog
      title="下载"
      :visible.sync="dialogVisible"
      width="30%">
      <span><a :href="aa">下载链接</a></span>
    </el-dialog>
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
        {value:'',label:'全部订单'},
        {value:'1',label:'审核'},
        {value:'0',label:'未审核'}
      ],
      doctorOptions:[
        {value:0,label:'全部医生'},
        {value:'1',label:'是'},
        {value:'2',label:'否'},
      ],
      doctorValue:0,
      nameValue:'',
      hospitalValue:'',
      phoneValue:'',
      // tableData4: [],//表格数据
      showStatus:false,
      dialogVisible:false,
      aa:'',
      loading:false,
      currentPage2:1
    }
  },
  mounted(){
    this.getData();
  },
  filters:{
    filtersMate(val){
      if(val == 1){
        return '取消推荐'
      }else{
        return '设置为推荐'
      }
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
      'doctorExcelDown',
      'doctorExcelUp',
      'postRecommendDoctor'
    ]),
    ...mapMutations('user', [
      'LIST.GET_DOCTOR',
    ]),
    formatRole(row,column){
      return row.accountCheckStatus  == 1 ? "已审核" : "未审核";
    },
    formatRole1(row,column){
      return row.accountLockStatus == 1 ? "已锁定" : "未锁定";
    },
    formatRole2(row,column){
      return row.certificationStatus  == 1 ? "已认证" : "未认证";
    },
    formatRole3(row,column){
      return row.licenseStatus   == 1 ? "已认证" : "未认证";
    },
    downLoad(){
      this.doctorExcelDown().then((res) =>{
        console.log(res.data)
        this.aa = res.data.excelPath
        this.dialogVisible= true
      })
    },
    addExcel(e){
      debugger
      this.loading = true
      var formData = new FormData();
      let files = e.target.files[0]
      formData.append("excelfile",files,files.name);
      this.doctorExcelUp({data:formData}).then( () =>{
        this.$message({
          type:'success',
          message:'导入成功'
        })
        // 医生列表重新获取
        this.getData(1)
        setTimeout(() =>{
            this.loading = false
        },1000)

      })
    },
    //参数对象
    outObj(val  = 1) {
      const data = {
          "accountCheckStatus": this.sourceValue,
          "doctorName": this.nameValue,
          "hospitalName": this.hospitalValue,
          "inDateEnd": this.dateValue[1],
          "inDateStart": this.dateValue[0],
          "phoneNum": this.phoneValue,
          'pageNum':this.currentPage2,
          'recommend':this.doctorValue
        }
      return data
    },
    // 跳转详情
    goDetial(index,table){
      // index:当前点击对象的下表
      // table:整个表格对象
      //////console.log(index);
      //////console.log(table[index].id)
      this.$store.state.user.doctorId = table[index].id
      this.$router.push({name:'doctorEdit',query:{id:table[index].id}})
    },
    // // 分页
    handleSizeChange(val) {
      // ////console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage2 = val
      this.getData(val)
    },
    search(){
      this.currentPage2 = 1
      this.getUserList(this.outObj()).then( () =>{

        if(this.userList.total>0){
          this.showStatus = true;
        }else{
          this.showStatus = false;
        }
      })
    },
    // 获取数据
    getData(val){
      //////console.log(this.dateValue);
      // this.currentPage2 = 1
      this.getUserList(this.outObj(val)).then( () =>{

        if(this.userList.total>0){
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
      // 菜单切换 日期组件重新赋值
      this.dateValue = (this.dateValue == null ? ['',''] : this.dateValue)
       this.getData()
     },
     add(){
       this.$router.push({name:'doctorAdd'})
     },
     addHospitalList(){
       this.$router.push({name:'addHospitalList'})
     },
     // 设置推荐医生 取消推荐医生
     setDoctorActive(recommend,id){
       if(recommend == 1){
         recommend = 2
        var  message = '取消推荐医生成功'

       }else{
         recommend = 1
         var message = '设置推荐医生成功'
       }
      this.postRecommendDoctor({id:id,recommend:recommend}).then(() =>{
        this.$message({
          type:'success',
          message:message
        })
        // this.currentPage2 = 1
        this.getData(this.currentPage2)
      })
     }
  }
}
</script>

<style lang="scss">
@import '../../../styles/table.scss';
</style>
