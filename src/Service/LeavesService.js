
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
        headers: { "Content-Type": "application/json" },
        credentials: "include",
    })
   
    if(!response.ok){
        throw new Error('Data could not be fetched')
    }else{
        return await response.json()
    }
}

export const YourRequestGetdata=async()=>{
    const response=await fetch(url+'user/requests/get-user-requests',{
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
    })
    
    if(!response.ok){
        throw new Error('your Get Request Data not be fetched')
    }else{
        return await response.json()
    }
}
export async function EditUpdate(data) {
    
    const response=await fetch(url+'user/requests/update-subordinate-request',{
        method:"PUT",
        credentials:'include',
        body:new URLSearchParams(data)
    })
    return response.json() 
}
export const ReportingGetdata=async()=>{
    const response=await fetch(url+'user/requests/get-subordinates-requests',{
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
    })
    if(!response.ok){
        throw new Error(' Data not be fetched')
    }else{
        return await response.json()
    }
}
