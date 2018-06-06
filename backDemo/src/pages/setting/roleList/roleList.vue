<template lang="html">
  <div class="adminList" style="text-align:left;padding:20px;">
    <el-button type="primary" size="small" @click="add()" >添加</el-button>
    <div class="tableBox">
      <el-table
        :data="roleTable.list"
        border
        style="width: 100%">
        <el-table-column
          type="index"
          width="180">
        </el-table-column>
        <el-table-column
          prop="roleName"
          label="角色名称">
        </el-table-column>
        <el-table-column
          prop="deptName"
          label="部门名称">
        </el-table-column>
        <el-table-column
         fixed="right"
         label="操作"
         width="100">
         <template slot-scope="scope">
           <el-button type="text" size="small" @click="goDetail(scope.$index,roleTable.list)">编辑</el-button>
         </template>
       </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-size="12"
          layout="prev, pager, next, jumper"
          :total="roleTable.total">
        </el-pagination>
      </div>
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
    this.getData(1)
  },
  computed:{
    ...mapGetters('setting',[
      'roleTable'
    ])
  },
  methods: {
    ...mapActions('setting',[
      'getRole'
    ]),
      handleSizeChange(val) {
        ////console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        // ////console.log(`当前页: ${val}`);
        this.getData(val)
      },
      getData(val){
        this.getRole({pageNum:val})
      },
      goDetail(index,table){
        ////console.log(index);
        ////console.log(table[index].id)
        this.$router.push({name:'roleManageSetting',query:table[index]})
      },
      add(){
        this.$router.push({name:'roleManagerSettingAdd'})
      }
    },
}
</script>

<style lang="scss">
@import '../../../styles/table.scss';
</style>
