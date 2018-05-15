<template lang="html">
  <div class="adminList" style="text-align:left;padding:20px;">
    <el-button type="primary" size="small" @click="add()" >添加</el-button>
    <div class="tableBox">
      <el-table
        :data="depManList.list"
        border
        style="width: 100%">
        <el-table-column
          type="index"
          width="180">
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
           <el-button type="text" size="small" @click="goDetail(scope.$index,depManList.list)">编辑</el-button>
         </template>
       </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="depManList.total">
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
    this.getDate(1)
  },
  computed:{
    ...mapGetters('setting',[
      'depManList'
    ])
  },
  methods: {
    ...mapActions('setting',[
      'getDepManList'
    ]),
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.getData(val)
      },
      getDate(val){
        this.getDepManList({pageNum:val})
      },
      goDetail(index,table){
        console.log(index);
        console.log(table[index].id)
        this.$router.push({name:'depManageSetting',params:{id:table[index].id}})
      },
      add(){
        this.$router.push({name:'depManagerSettingAdd'})
      }
    },
}
</script>

<style lang="scss">
@import '../../../styles/table.scss';
</style>
