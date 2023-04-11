import {url} from '../Constant/Url';

export async function leaveRequest(data){
    const response=await fetch(url+'user/requests/add-user-request',{
        method:"POST",
        mode:"cors",
        headers:{"Content-Type": "application/x-www-form-urlencoded" },
        credentials:'include',
        body:new URLSearchParams(data)
    })
    return response.json();
}
export const leaveUser=async()=>{
    const response=await fetch(url+'user/get-user',{
        method: "GET",
        // mode: "cors",
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