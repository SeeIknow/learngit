import axios from 'axios'
import {LIST} from './mutation-type.js'
export const actions = {
  getMembers({commit}){
    axios.get('http://192.168.2.200:8080/ccyl/inquiryOrder/departments?hospitalId=1',{
      headers: {
      "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbk5hbWUiOiJhZG1pbiIsInVzZXJJZCI6MSwiaWF0IjoxNTI0MTIzNTEwfQ.fMFRKJCqnkgIoA6b1ue7Lnh0gLBILlcIYDGPfgnRLqA"
      }
    }).then(function (response) {
      console.log('----------'+response.data[0]);
            commit(LIST.GET_MEMEBER, JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error)
          })
  },
}
