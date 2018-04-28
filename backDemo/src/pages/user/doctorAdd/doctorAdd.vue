<template lang="html">
  <div class="memberEdit detail-c-box">
    <div class="module-i">
      <el-button type="primary" plain @click="goBack()">返回</el-button>
      <p class="form-title">会员编辑</p>
      <div class="module-i">
        <p class="module-i-title">基本信息</p>
        <div class="form-box info">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="医生姓名">
              <el-input v-model="form.name" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="会员性别">
              <el-radio-group v-model="form.resource">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="职称">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="医生级别">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-form>
          <div class="peopleImg">
            <img src="https://avatars3.githubusercontent.com/u/15126380?s=88&v=4" alt="">
            <el-button size="small" type="primary">点击上传</el-button>
          </div>
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
              <el-form-item label="医学助理">
                <el-input v-model="form.name" :disabled="true"></el-input>
                <el-button type="text" @click="openUserAlt('user')">更改</el-button>
              </el-form-item>
              <el-form-item label="审核状态">
                <el-input v-model="form.name" :disabled="true"></el-input>
                <el-switch v-model="form.delivery"></el-switch>
              </el-form-item>
              <el-form-item label="冻结状态">
                <el-input v-model="form.name" :disabled="true"></el-input>
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
          <p class="module-i-title">擅长治疗</p>
          <div class="form-box">
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-button type="text" @click="openUserAlt('disease')">添加擅长疾病</el-button>
          </div>
        </div>

        <div class="module-i">
          <p class="module-i-title">社会标签</p>
          <div class="form-box">
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-button type="text" @click="openUserAlt('label')">添加社会标签</el-button>
          </div>
        </div>
        <div class="module-i doctorIntro">
          <p class="module-i-title">医生简介</p>
          <div class="form-box">
            <div class="introContent">
              dadsdsad
            </div>
            <el-button type="primary" plain class="prymaryBtn" @click="doctorIntro()">编辑简介</el-button>
          </div>
        </div>
        <!-- 出诊医院 -->
        <div class="module-i hospitalZ">
          <p class="module-i-title">出诊医院</p>
          <div class="form-box table">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="序号"
                width="60">
              </el-table-column>
              <el-table-column
                prop="name"
                label="医院名称"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="科室名称">
              </el-table-column>
              <el-table-column
                prop="address"
                label="门诊费用">
              </el-table-column>
              <el-table-column
                prop="address"
                label="出诊类型">
              </el-table-column>
              <el-table-column
                prop="address"
                label="取号地址">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
              <el-table-column
                prop="address"
                label="出诊类型">
              </el-table-column>
            </el-table>
            <el-button type="primary" plain class="prymaryBtn" @click="addHospitalList()">医院管理</el-button>
          </div>
        </div>

        <div class="module-i doctorIntro">
          <p class="module-i-title">就诊服务价格</p>
          <div class="form-box table">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="服务"
                width="300">
              </el-table-column>
              <el-table-column
                prop="name"
                label="价格"
                width="200">
              </el-table-column>
              <el-table-column
                prop="address"
                label="开通状态">
              </el-table-column>
            </el-table>
            <el-button type="primary" plain class="prymaryBtn" @click="serviceMange()">服务管理</el-button>
          </div>
        </div>
        <el-button type="primary" plain class="prymaryBtn set">保存</el-button>
  </div>


  <!--弹框组件  -->

  <el-dialog
    :visible.sync="userSelectAlt"
    width="30%"
    center>
    <el-form ref="form" :model="form2" label-width="110px">
      <el-form-item label="选择商务人员">
        <el-select v-model="form.region" placeholder="请选择商务人员">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeUserAlt('user')">取 消</el-button>
      <el-button type="primary" @click="closeUserAlt('user')">确 定</el-button>
    </span>
  </el-dialog>
  <!-- 擅长疾病 -->
  <el-dialog
    :visible.sync="diseaseSelectAlt"
    width="30%"
    center>
    <el-form ref="form" :model="form2" label-width="110px">
      <el-form-item label="一级疾病(必选)">
        <el-select v-model="form.region" placeholder="请选择一级疾病">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级疾病(可选)">
        <el-select v-model="form.region" placeholder="请选择二级疾病">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="三级疾病(可选)">
        <el-select v-model="form.region" placeholder="请选择三级疾病">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeUserAlt('disease')">取 消</el-button>
      <el-button type="primary" @click="closeUserAlt('disease')">确 定</el-button>
    </span>
  </el-dialog>
  <!--  社会标签-->
  <el-dialog
    :visible.sync="labelSelectAlt"
    width="30%"
    center>
    <el-form ref="form" :model="form3" label-width="110px">
      <el-form-item label="添加标签名">
        <el-input v-model="labelInput" placeholder="请输入内容"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeUserAlt('label')">取 消</el-button>
      <el-button type="primary" @click="closeUserAlt('label')">确 定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
export default {
  data(){
    return {
      dynamicTags:['标签一', '标签二', '标签三'],
      form:{},
      form1:{},
      form2:{},
      form3:{},
      tableData:[],
      // 用户弹窗
      userSelectAlt:false,
      diseaseSelectAlt:false,
      labelSelectAlt:false,
      //标签输入框
      labelInput:''


    }
  },
  methods:{
    handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    // 弹框
    closeUserAlt(val){
      switch(val){
        case 'user':
          this.userSelectAlt= false;
          break;
        case 'disease':
          this.diseaseSelectAlt= false;
          break;
        case 'label':
          this.labelSelectAlt= false;
          break;
      }
    },
    openUserAlt(val){
      switch(val){
        case 'user':
          this.userSelectAlt= true;
          break;
        case 'disease':
          this.diseaseSelectAlt= true;
          break;
        case 'label':
          this.labelSelectAlt= true;
          break;
      }
    },
    // 医生简介
    doctorIntro(){
      this.$router.push({name:'doctorIntroEdit'})
    },
    goBack(){
      this.$router.go(-1)
    },
  }
}
</script>

<style lang="scss">
@import '../../../styles/detailCommon.scss';
$border-color:#eee;
.introContent{
  width:600px;
  height:300px;
  border-radius:10px;
  overflow-y: scroll;
  border:1px solid $border-color;
  padding:20px;

}
.prymaryBtn{
  margin-top:20px;
}
.info{
  position:relative;
}
.peopleImg{
  position: absolute;
  right:-100px;
  top:20px;
  text-align: center;
  img{
    width:100px;
    height:100px;
    border-radius: 50%;
    border:1px solid $border-color;
    display:block;
    margin:10px auto;
  }
}
.set{
  margin:20px auto;
  display: block;
}
</style>
