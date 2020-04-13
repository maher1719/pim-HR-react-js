import request from './request';


export const createEvent=(data)=>{

console.log(data);
    return request({
        url:'/api/event/create',
        method:'Post',
        data
    })
};

export const listEvents=()=>{
    return request({
        url:"/api/event",
        method:'POST',
    }).then(function(data){
        return data;
    })
};