import request from "./request"
export const createEvent=(data)=>{

    console.log(data);
    return request({
        url:'/api/users/search',
        method:'Post',
        data
    })
};