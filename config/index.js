/*
 * @Author: 蔡先佳 
 * @Date: 2019-03-01 16:01:04 
 * @Last Modified by: 蔡先佳
 * @Last Modified time: 2019-03-04 14:04:11
 */

export default {
    IS_RELEASE: false, // true线上，false测试
  
    BASE_URL: 'http://localhost:3000/api', // 测试
  
    // BASE_URL: '//cai-p-s.net/api', // 生产 
  
    IMG_URL: 'http://localhost:9000/', // 测试 
  
    // IMG_URL: 'https://cai-p-i/wwhl-api/public/', // 生产
  
    HEADERS: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
  
    TIMEOUT: 12000, // api超时时间
  
  };