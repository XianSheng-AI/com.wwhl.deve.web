/* 
    验证方法类
 */


export default class validates {
    //字段验证 支持非空，手机，邮箱 格式 验证
    static validate (value, type) {
        // 去除左右空格
        let valu = value.replace(/(^\s*)|(\s*$)/g,"");
        if ('require' === type) {
            return !!valu; //强制转布尔型
        }
        //密码大于等于6位
        if('password'===type){
          return valu.length>=6;
        }
        //手机号验证
        if ('phone' === type) {
            return /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/.test(valu);
        }
        //邮箱格式验证
        if ('email' === type) {
            return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(valu);
        }
    }
 }