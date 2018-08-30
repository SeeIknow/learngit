<template lang="html">
  <div class="table" v-loading="loading">
  <div class="select-p-1 clearfix">
    <div class="grid-content bg-purple input-select-1">
        <span class="label-span">公司名称:</span>
        <el-input
          placeholder="请输入公司名称"
          v-model="nameValue"
          prefix-icon="el-icon-search"
          clearable>
        </el-input>
    </div>
    <div class="grid-content bg-purple input-select-1">
        <span class="label-span">渠道名称:</span>
        <el-input
          placeholder="请输入渠道名称"
          v-model="placeValue"
          prefix-icon="el-icon-search"
          clearable>
        </el-input>
    </div>
    <div class="grid-content bg-purple input-select-1">
        <span class="label-span">联系人:</span>
        <el-input
          placeholder="请输入联系人"
          v-model="connectValue"
          prefix-icon="el-icon-search"
          clearable>
        </el-input>
    </div>
    <div class="grid-content bg-purple input-select-1">
        <span class="label-span">手机号:</span>
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
  </div>
  <div class="tableBox">
      <el-table
        :data="infoList.list"
        size="medium">
        <!-- <el-table-column
          prop="id"
          label="医生ID"
          width="80">
        </el-table-column> -->
        <el-table-column
          prop="id"
          label="渠道ID"
          header-align="center"
          width="80">
        </el-table-column>
        <el-table-column
          prop="channelName"
          label="渠道名称"
          header-align="center"
          width="200">
        </el-table-column>
        <el-table-column
          prop="companyName"
          label="公司名称"
          header-align="center"
          width="220">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱地址"
          header-align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="contact"
          label="联系人"
          header-align="center"
          width="100">
        </el-table-column>
        <el-table-column
          prop="areaName"
          label="所在地区"
          header-align="center"
          width="200">
        </el-table-column>
        <el-table-column
          label="操作"
          fixed=right
          header-align="center"
          width="120">
          <template slot-scope="scope">
            <el-button
              prop="id"
              @click.native.prevent="goDetial(scope.$index,infoList.list)"
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
        :current-page.sync="currentPage2"
        layout="prev, pager, next, jumper"
        :total="infoList.total">
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
      nameValue:'',
      phoneValue:'',
      connectValue:'',
      showStatus:false,
      placeValue:'',
      loading:false,
      currentPage2:1,
      infoList:'',
    }
  },
  mounted(){
    this.getData();
  },
  computed:{
    ...mapGetters('user', [
      'userList'
    ])
  },
  methods:{
    ...mapActions('user', [
      'postPlaceMangeList',
    ]),
    //参数对象
    outObj(val  = 1) {
      const data = {
        "channelName": this.placeValue,
        "companyName": this.nameValue,
        "contact": this.connectValue,
        "contactPhoneNum": this.phoneValue,
        "pageNum": this.currentPage2
      }
      return data
    },
    // 跳转详情
    goDetial(index,table){
      // index:当前点击对象的下表
      // table:整个表格对象
      //////console.log(index);
      //////console.log(table[index].id)
      this.$router.push({name:'placeManageEdit',query:{id:table[index].id}})
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
      this.postPlaceMangeList(this.outObj()).then( (res) =>{
        this.infoList = res.data
        if(res.data.total>0){
          this.showStatus = true;
        }else{
          this.showStatus = false;
        }
      })
    },
    add(){
      this.$router.push({name:'placeManageAdd'})
    },
    // 获取数据
    getData(val){
      //////console.log(this.dateValue);
      // this.currentPage2 = 1
      this.postPlaceMangeList(this.outObj(val)).then( (res) =>{
        this.infoList = res.data
        if(res.data.total>0){
          this.showStatus = true;
        }else{
          this.showStatus = false;
        }
      })
    },
  }
}
</script>

<style lang="scss">
@import '../../../styles/table.scss';
</style>
