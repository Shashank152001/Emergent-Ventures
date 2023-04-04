import {url} from '../Constant/Url'
export async function userSignUp(data) {
    const response=await fetch(url+'signup/',{
        method:"PUT",
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