<template lang="html">
  <div class="adminList" style="text-align:left;padding:20px;">
    <el-button type="primary" size="small" @click="add()" >添加</el-button>
    <div class="tableBox">
      <el-table
        :data="userList.list"
        border
        style="width: 100%">
        <el-table-column
          type="index"
          width="180">
        </el-table-column>
        <el-table-column
          prop="loginname"
          label="管理员账号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="username"
          label="使用者姓名">
        </el-table-column>
        <el-table-column
          prop="roleName "
          label="角色分组">
        </el-table-column>
        <el-table-column
          prop="indate"
          label="注册时间">
        </el-table-column>
        <el-table-column
          prop="deptName"
          label="所属部门">
        </el-table-column>
        <el-table-column
         fixed="right"
         label="操作"
         width="100">
         <template slot-scope="scope">
           <el-button type="text" size="small" @click="goDetail(scope.$index,userList.list)">编辑</el-button>
         </template>
       </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="userList.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  data(){
    return {
      tableData:[]
    }
  },
  mounted(){
    this.getDate()
  },
  computed:{
    ...mapGetters('setting',[
      'userList'
    ])
  },
  methods: {
    ...mapActions('setting',[
      'getUserList'
    ]),
      handleSizeChange(val) {
        //console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        //console.log(`当前页: ${val}`);
        this.getData(val)
      },
      getDate(val=1){
        this.getUserList({pageNum:val})
      },
      goDetail(index,table){
        //console.log(index);
        //console.log(table[index].id)
        this.$router.push({name:'managerSetting',params:{id:table[index].id}})
      },
      add(){
        this.$router.push({name:'managerSettingAdd'})
      }
    },
}
</script>

<style lang="scss">
@import '../../../styles/table.scss';
</style>
