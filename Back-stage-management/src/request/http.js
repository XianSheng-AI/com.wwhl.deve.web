/*2019-3-19 by 蔡先佳*/
/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */

//需求


import axios from 'axios';
import QS from 'qs';
import NProgress from 'nprogress';
import store from '../store/index'
import router from '../router/index'
import {LOGOUT} from "../store/mutation_type";
// import store from '../store/index'

// 环境的切换
// console.log(process.env.NODE_ENV)
// if (process.env.NODE_ENV == 'development') {
//   axios.defaults.baseURL = 'https://www.zhihu.com';
//   // axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'debug') {
//   axios.defaults.baseURL = 'https://www.zhihu.com';
// } else if (process.env.NODE_ENV == 'production') {
//   // axios.defaults.baseURL = 'http://api.zhisheng.com/';
//   axios.defaults.baseURL = 'https://www.zhihu.com';
// }

// 请求超时时间
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:8080'
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(

  config => {
    NProgress.start();
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = store.state.token;
    config.headers.Authorization = `token ${store.state.token}`
    // token && (config.headers.Authorization = token);
    return config;
  },
  error => {

    return Promise.error(error);
  });
// 响应拦截器
axios.interceptors.response.use(
  response => {
    NProgress.done()
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况
  error => {
    // 请求结束，蓝色过渡滚动条消失
    // 即使出现异常，也要调用关闭方法，否则一直处于加载状态很奇怪
    NProgress.done();
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。

        case 401:
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          })
          // 401 清除token信息并跳转到登录页面
          store.commit(LOGOUT)
          // alert('未登录')
          break;
          
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          // 清除token
          // alert('登录过期，请重新登录')
          // localStorage.removeItem('token');
          // store.commit('loginSuccess', null);
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }, 1000);
          break;
        // 404请求不存在
        case 404:
          alert('网络请求不存在')

          break;
        // 其他错误，直接抛出错误提示
        default:
          console.log('其他错误')
        // alert('有其他错误')
      }
      return Promise.reject(error.response);
    }
  }
);
// console.log(3);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    // console.log()
    axios.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}
