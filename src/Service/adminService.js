import {url} from '../Constant/Url';


// admin/get-admin -GET
// admin/get-all-users - GET

export const adminData=async()=>{
    const response=await fetch(url+'admin/get-admin',{
        method: "GET",
        // mode: "cors",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
    })
   
    if(!response.ok){
        throw new Error('Data could not be fetched')
    }else{
        return await response.json()
    }
}

export const getAllEmployees=async()=>{
    const response=await fetch(url+'admin/get-all-users',{
        method: "GET",
        // mode: "cors",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
    })
   
    if(!response.ok){
        throw new Error('Data could not be fetched')
    }else{
        return await response.json()
    }
}