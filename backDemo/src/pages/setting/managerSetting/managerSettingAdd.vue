<template lang="html">
  <div class="managerSetting">
    <div class="button-box">
      <el-button type="danger" plain @click="deleteInfo()">删除</el-button>
      <el-button type="primary" plain>返回</el-button>
    </div>
    <p class="form-title">管理员设置</p>
    <div class="form-box">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="账号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="部门">
            <el-select v-model="form.region" placeholder="请选择" @change="bmSelect(form.region)">
              <el-option
                v-for="item in bmList"
                :key="item.id"
                :label="item.deptName"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="角色">
            <el-select v-model="form.region1" placeholder="请选择">
              <el-option
                v-for="item in roleList"
                :key="item.id"
                :label="item.roleName"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
          </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  data(){
    return{
      form:{}
    }
  },
  computed:{
    ...mapGetters('setting',[
      'bmList',
      'roleList'
    ])
  },
  mounted(){
    this.getData();
  },
  methods:{
    ...mapActions('setting',[
      'getBMlist',
      'getRolelist',
      'setAddDoctor'
    ]),
    onSubmit() {
      const data ={
          "deptId": 0,
          "id": 0,
          "refId": 0,
          "roleName": "string",
          "status": 0
        }
      this.setAddDoctor(data).then(() =>{
        this.$router.replace({name:'administerList'})
      })
    },
    getData(){
      // 或者
      this.getBMlist()
    },
    bmSelect(val){
      console.log(val);
      this.getRolelist({'id':val})
    }
  }
}
</script>

<style lang="scss">
@import './managerSetting.scss'
</style>
