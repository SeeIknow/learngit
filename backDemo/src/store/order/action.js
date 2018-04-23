import axios from 'axios'
import {LIST} from './mutation-type.js'
export const actions = {
  getList({commit},status,param){
    axios.post(`/inquiryOrder/orders?status=${status}`,{},{
      headers: {
        "Content-Type": "application/json" ,
      "Authorization": JSON.parse(localStorage.getItem('userInfo')).token
      }
    }).then(function (response) {
            commit(LIST.GET_LIST, response.data);
          })
          .catch(function (error) {
            console.log(error)
          })
  },
  searchFromList({commit},status,param){
    axios.post(`/inquiryOrder/orders?status=${status}`,param,{
      headers: {
        "Content-Type": "application/json" ,
      "Authorization": JSON.parse(localStorage.getItem('userInfo')).token
      }
    }).then(function (response) {
      console.log(response.data);
            commit(LIST.GET_LIST, response.data);
          })
          .catch(function (error) {
            console.log(error)
          })
  },
  getListDetail({commit},id){
    console.log(id);
    axios.get(`http://192.168.2.200:8080/ccyl/inquiryOrder/${id}/order`,{
      headers: {
      "Authorization": "eeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbk5hbWUiOiJhZG1pbiIsInVzZXJJZCI6MSwiaWF0IjoxNTI0NDYyMzM1fQ._VBaTukNBvs9Gir4HkUfz5dBIHtlzRGJzH_leE50ofg"
      }
    }).then(function (response) {
      commit(LIST.GET_LISTITEM, response.data);
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}
