<template lang="html">
  <div class="detail-c-box">
    <p class="form-title">管理员设置</p>
    <div class="module-i">
      <p class="role-b-top">
        <span>角色名称：管理员</span>
        <span>所属部门：产品部</span>
      </p>
      <div class="limit-outer-box">
        <!-- 操作功能权限 -->
        <div class="limit-item">
          <p class="limit-title">操作功能权限</p>
          <div class="limit-inner-box">
            <el-checkbox-group v-model="checkboxGroup1" size="small">
              <el-checkbox label="创建" border></el-checkbox>
              <el-checkbox label="编辑" border></el-checkbox>
              <el-checkbox label="删除" border></el-checkbox>
              <el-checkbox label="查看" border></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <!-- 订单管理 -->
        <div class="limit-item">
          <p class="limit-title">订单管理</p>
          <div class="limit-inner-box">
            <el-checkbox-group v-model="checkboxGroup2" size="small">
              <el-checkbox label="疾病救助" border></el-checkbox>
              <el-checkbox label="体检服务" border></el-checkbox>
              <el-checkbox label="图文咨询" border></el-checkbox>
              <el-checkbox label="门诊预约" border></el-checkbox>
              <el-checkbox label="就诊服务" border></el-checkbox>
              <el-checkbox label="远程会诊" border></el-checkbox>
              <el-checkbox label="陪诊服务" border></el-checkbox>
              <el-checkbox label="私人医生" border></el-checkbox>
              <el-checkbox label="会员服务" border></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>

        <!-- 用户管理 -->
        <div class="limit-item">
          <p class="limit-title">用户管理</p>
          <div class="limit-inner-box">
            <el-checkbox-group v-model="checkboxGroup3" size="small">
              <el-checkbox label="会员管理" border></el-checkbox>
              <el-checkbox label="医生管理" border></el-checkbox>
              <el-checkbox label="医学中心" border></el-checkbox>
              <el-checkbox label="渠道管理" border></el-checkbox>
              <el-checkbox label="基金会" border></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <!-- 内容管理 -->
        <div class="limit-item">
          <p class="limit-title">内容管理</p>
          <div class="limit-inner-box">
            <el-checkbox-group v-model="checkboxGroup4" size="small">
              <el-checkbox label="科室管理" border></el-checkbox>
              <el-checkbox label="疾病管理" border></el-checkbox>
              <el-checkbox label="针状管理" border></el-checkbox>
              <el-checkbox label="病因管理" border></el-checkbox>
              <el-checkbox label="家族病史" border></el-checkbox>
              <el-checkbox label="用户级别" border></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <!-- 统计管理 -->
        <div class="limit-item">
          <p class="limit-title">统计管理</p>
          <div class="limit-inner-box">
            <el-checkbox-group v-model="checkboxGroup5" size="small">
              <el-checkbox label="运营数据" border></el-checkbox>
              <el-checkbox label="财务报表" border></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <el-button type="primary" style="margin:20px auto;display:block;">保存</el-button>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      checkboxGroup1:[],
      checkboxGroup2:[],
      checkboxGroup3:[],
      checkboxGroup4:[],
      checkboxGroup5:[]
    }
  }
}
</script>

<style lang="scss">
@import '../../../styles/detailCommon.scss';
 @import './limitEdit.scss'
</style>
