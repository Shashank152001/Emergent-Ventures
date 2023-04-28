import {url} from '../Constant/Url';

export const YourRequestGetdata=async()=>{
    const response=await fetch(url+'user/requests/get-user-requests',{
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
    })
    
    if(!response.ok){
        throw new Error('your Get Request Data not be fetched')
    }else{
        return await response.json()
    }
}
export async function EditUpdate(formData) {
    
    const response=await fetch(url+'user/requests/update-subordinate-request',{
        method:"PUT",
        credentials:'include',
        body:new URLSearchParams(formData)
    })
    return response.json() 
}
