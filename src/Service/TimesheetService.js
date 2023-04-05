import {url} from '../Constant/Url'
export const fetchTimeSheet=async()=>{
      const response=await fetch(url+'user/get-user-latest-timesheets/',{
        mode:'cors',
        headers:{ "Content-Type": "application/json" },
        credentials:'include'
      })
      console.log(response)
      if(!response.ok){
        throw new Error('Data could not be fetched')
      }else{
        return await response.json()
      }
}