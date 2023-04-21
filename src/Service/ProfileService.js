

import {url} from '../Constant/Url';

export const ProfileFormData=async()=>{
    const response=await fetch(url+'user/account/get-user-profile',{
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
    })
    // console.log(response);
    if(!response.ok){
        throw new Error('Data could not be fetched')
    }else{
        return await response.json()
    }
}
export async function userDetail(data) {
    const response=await fetch(url+'user/account/add-user-profile',{
        method:"POST",
        mode:'cors',
        credentials:'include',
        body:new URLSearchParams(data)
    }) 
    return response.json()
}
export async function userUpdate(data) {
    // console.log(data);
    const response=await fetch(url+'user/account/update-user-profile',{
        method:"PUT",
        credentials:'include',
        body:new URLSearchParams(data)
    })
    return response.json() 
}