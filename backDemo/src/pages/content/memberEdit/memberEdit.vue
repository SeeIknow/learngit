<template lang="html">
  <div class="memberEdit detail-c-box">
    <el-button type="primary" plain>主要按钮</el-button>
    <p class="form-title">管理员设置</p>
    <div class="module-i">
      <p class="module-i-title">基本信息</p>
      <div class="form-box">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="会员姓名">
            <el-input v-model="form.name" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="会员性别">
            <el-radio-group v-model="form.resource">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="所在地区">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="证件类型">
            <el-input v-model="form.name" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="证件号码">
            <el-input v-model="form.name" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="出生年月">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
      </div>
      </div>
      <!--  -->
      <div class="module-i">
        <p class="module-i-title">账户信息</p>
        <div class="form-box">
          <el-form ref="form" :model="form1" label-width="80px">
            <el-form-item label="账户名">
              <el-input v-model="form.name" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="账户密码">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="头像图片">
              <img src="" alt="">
            </el-form-item>
            <el-form-item label="冻结状态">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="注册时间">
              <el-input v-model="form.name" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="来源渠道">
              <el-input v-model="form.name" :disabled="true"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <!--  -->
      <div class="module-i">
        <p class="module-i-title">会员信息</p>
        <div class="form-box">
          <el-form ref="form" :model="form1" label-width="80px">
            <el-form-item label="会员级别">
              <el-input v-model="form.name" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="开通时间">
              <el-input v-model="form.name" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="有效日期">
              <el-input v-model="form.name" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="订单号">
              <el-input v-model="form.name" :disabled="true"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>



      <!--  -->
      <div class="module-i" >
        <p class="module-i-title">就诊人信息</p>
        <div class="form-box" style="width:600px">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <el-button type="primary" style="margin:10px auto;display:block;width:160px">保存</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        form1: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
  }
}
</script>

<style lang="scss">
@import '../../../styles/detailCommon.scss'
</style>
