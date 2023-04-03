import {url} from '../Constant/Url'
export async function userLogin(data) {
    const response=await fetch(url,{
        method:"POST",
        mode:'cors',
        headers:{"Content-Type": "application/x-www-form-urlencoded" },
        credentials:'include',
        body:new URLSearchParams(data)
    })
    console.log(response)
    // if(!response.ok){
    //   throw new Error('Data could not be fetched')
    // }else{
    //   return response.json()
    // }
    return response.json()

    
}