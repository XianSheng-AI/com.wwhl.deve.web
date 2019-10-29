import request from '../utils/request';

const prefix = '/common'; //前缀

//获取官网数据
export const getHomeData = (params) =>{
    return request ({
        // url: `${prefix}/https://api.myjson.com/bins/16q6l2`,
        url: "https://api.myjson.com/bins/16q6l2",
        method: 'GET',
        data: params,
    })
}