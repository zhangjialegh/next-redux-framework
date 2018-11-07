
import axios from './axios.js' // 导入我们封装好的axios对象
import baseURL from './ips.js'
const prefix = 'ip1'   //默认api test.fanglimei.cn
const apolyse = 'ip2'


/******** Login ********/
export function getCountryCodeFetch (params = {}, ip = apolyse) {
  return axios.get(baseURL[ip]+'/api/get_countries', {params})
}