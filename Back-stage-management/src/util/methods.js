/* 
    方法库
 */



 /**
 * 获取DOM元素工具类
 */

export default class Methods {
    // 获取标签元素
    static getElem (doc,el=null) {
        // alert(arguments.length)
        if(el){
            return document.querySelector(doc).querySelector(el)
        }
        
        return document.querySelector(doc)
    }
    // 获取一堆标签元素集合
    static getAllElem (doc,el=null) {
        if(el){
            return document.querySelector(doc).querySelectorAll(el);
        }
        return document.querySelectorAll(doc);
    }
 }