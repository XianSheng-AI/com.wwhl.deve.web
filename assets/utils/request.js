/*
 * @Author: 蔡先佳 
 * @Date: 2019-03-01 16:08:32 
 * @Last Modified by: 蔡先佳
 * @Last Modified time: 2019-03-04 15:01:47
 */
import axios from 'axios';
import config from '~/config';
// 可以引入第三方ui库进行操作提示
// 例如 { Toast } from 'mint-ui';

// {  }
axios.defaults.baseURL = config.BASE_URL;
axios.defaults.timeout = config.TIMEOUT;
axios.defaults.headers = config.HEADERS;

// 请求拦截器
axios.interceptors.request.use( request => {
    if (!config.IS_RELEASE) {
        console.log(request.params || request.data,);
      }
      return request;
    }, error => {
      return Promise.reject(error);
});


export default async (options = { method: 'GET' }) => {
    let isdata = true;
    if (
      options.method.toUpperCase() !== 'POST'
      && options.method.toUpperCase() !== 'PUT'
      && options.method.toUpperCase() !== 'PATCH'
    ) {
      isdata = false;
    };
    const res = await axios({
      method: options.method,
      url: options.url,
      data: isdata ? options.data : null,
      params: !isdata ? options.data : null,
    });
    if (res.status >= 200 && res.status < 300) {
      if (!config.IS_RELEASE) {
        //测试接口响应
        // console.log(
        //   `${new Date().toLocaleString()}【接口响应：】`,
        //   res.data,
        // );

        //返回数据
        return res;
      }
      // 浏览器环境弹出报错信息
      if(typeof window !== "undefined" && res.data.code !== 0) {
        // Toast(res.data.msg);
        console.log('浏览器错误!')
      }
      return res.data;
    }else {
      if(typeof window !== "undefined" && res.data.code !== 0) {
        console.log('请求错误!')
      }
    }
  
  };
  



