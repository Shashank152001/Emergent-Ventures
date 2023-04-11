import {url} from '../Constant/Url'

export const logOut=async()=>{
    const response=await fetch(url+'user/logout',{
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
export const userData=async()=>{
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