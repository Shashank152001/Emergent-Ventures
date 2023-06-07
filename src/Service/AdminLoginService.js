import {url} from '../Constant/Url'
export async function adminLogin(data) {
    
    const response=await fetch(
        url+'admin-login/' ,{
        method:"POST",
        mode:'cors',
        headers:{"Content-Type": "application/x-www-form-urlencoded" },
        credentials:'include',
        body:new URLSearchParams(data)
    })
   
    // return response.json()
    return response;

    
}