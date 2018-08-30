import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'
// import Cookie from 'js-cookie'
/**
* 封装基于axios的ajax请求
*
*
*/
// http response 拦截器
// 401 返回登录页
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    localStorage.removeItem('userInfo')
                    Message.error(error.response.data.errorMessage)
                    setTimeout(function(){
                      router.replace({
                          path: 'login'
                      })
                    },1500)
                    break;
                default:
                //console.log(error.response);
                Message.error(error.response.data.errorMessage)
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
});


export const AjaxRequest = function (url, param, payload) {
  this.url = url
  this.param = param
  this.callback = payload.callback
  this.error = payload.error
  this.status = 200
  this.response = {}
  this.getAjaxMethod = () => {
    axios({
      method: 'GET',
      url: this.url,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': localStorage.getItem('userToken')
      },
      param: this.param
    }).then(res => {
      this.callback(res)
    }).catch(res => {
      this.error(res)
    })
  }
  this.postAjaxMethod = () => {
    axios({
      method: 'POST',
      url: this.url,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': localStorage.getItem('userToken')
      },
      data: this.param
    }).then(res => {
      this.callback(res)
    }).catch(res => {
      this.error(res)
    })
  }
  this.putAjaxMethod = async () => {
    await axios({
      method: 'PUT',
      url: this.url,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': localStorage.getItem('userToken')
      },
      data: this.param
    }).then(res => {
      this.callback(res)
    }).catch(res => {
      this.error(res)
    })
  }
  this.deleteAjaxMethod = async () => {
    await axios({
      method: 'DELETE',
      url: url,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': localStorage.getItem('userToken')
      },
      params: this.param
    }).then(res => {
      this.callback(res)
    }).catch(res => {
      this.error(res)
    })
  }
}
