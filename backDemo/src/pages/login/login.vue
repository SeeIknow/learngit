<template>
  <div class="login">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" size="medium" class="demo-ruleForm">
      <h3 class="login-title">慈诚名医汇业务后台管理系统</h3>
    <el-form-item label="用户名" prop="username">
      <el-input type="text" v-model="ruleForm2.username" class="inputM" placeholder="请输入用户名"auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密　码" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" class="inputM" placeholder="请输入密码" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"  style="width:80%;margin-top:20px" round :loading="loadingStatus" @click="submitForm('ruleForm2')">登录</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>
<script>
import qs from 'qs'
import {AddRouteRootMap} from '@/router/middle'
import {mapActions,mapGetters,mapMutations} from 'vuex'
export default {
  data () {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('姓名不能为空'));
      }else {
        callback()
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }else {
        callback()
      }
    };
    return {
     ruleForm2: {
       pass: '',
       username: '',
     },
     rules2: {
       pass: [
         { validator: validatePass, trigger: 'blur' }
       ],
       username: [
         { validator: checkName, trigger: 'blur' }
       ]
     },
     loadingStatus:false
   };
  },
  computed:{
    ...mapGetters('permission',[
      'items'
    ])
  },
  methods:{
    ...mapActions('permission',[
      'getUserPermission'
    ]),
    ...mapMutations('permission',[
      'ADD_MENU'
    ]),
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        ////console.log(valid);
        // 验证成功
          if (valid) {
            // 按钮加载中
            this.loadingStatus = true;
            setTimeout(() =>{
              this.loadingStatus = false;
              // this.$http.post('http://www.doctormdt.com/ccyl/login',null,{headers:{'loginname':this.ruleForm2.username,'password':this.ruleForm2.pass}}).then(response => {
              this.$http.post('http://172.16.4.10:8080/ccyl/login',null,{headers:{'loginname':this.ruleForm2.username,'password':this.ruleForm2.pass}}).then(response => {
                  // success callback
                  ////console.log(response);

                  localStorage.setItem('userToken',response.data.token)
                  // 获取用户信息
                  this.$store.dispatch('updateUserInfo').then((res) =>{
                    // 本地存储用户信息
                    localStorage.setItem('userInfo',JSON.stringify(res.data))
                  })
                  // 存储用户图像
                  localStorage.setItem('adminPhoto',response.data.userModelResponse.photoUrl )
                  // 获取用户菜单权限
                  this.getUserPermission().then((data) =>{
                    // // 本地存储菜单权限
                    // localStorage.setItem('permission',JSON.stringify(data.data))
                    this.$router.addRoutes(AddRouteRootMap(data.data.menus))
                    ////console.log(AddRouteRootMap(data.data.menus))
                    // vuex存储permission
                    this.$store.state.user.imgUrl = response.data.userModelResponse.photoUrl
                     this.ADD_MENU(data.data.menus)
                    this.$router.replace({
                      name: 'index'
                    })
                  })
              }, response => {
                  // error callback
                  ////console.log(response);
              })
            },1000)
          } else {
            ////console.log('error submit!!');
            return false;
          }
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './login.scss';
</style>
