import axios from 'axios'
import { Toast } from 'antd-mobile'

axios.defaults.timeout = 30000


// axios拦截器
let errorMsg = ''
axios.interceptors.response.use(res => {
  // 在这里你可以判断后台返回数据携带的请求码
  res = res.data || res
  if(res.errorCode) {
    const code = res.errorCode
    switch (code) {
      case 10007:
        errorMsg = 'Please input your phone number'
        break;
      case 10008:
        errorMsg = 'Please input invilid phone number'
        break;
      case 10006:
        errorMsg = 'Operate Frequently'
        break;
      default: errorMsg = 'Error, please try again'
        break;
    }
    Toast.fail(errorMsg,3,()=>{},true)
  } else {
    return res
  }
}, (error)=>{
   return error
})

export default axios