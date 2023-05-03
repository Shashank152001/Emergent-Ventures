import {url} from '../Constant/Url'
export const fetchTimeSheet=async()=>{
      const response=await fetch(url+'user/timesheets/get-user-timesheets',{
        mode:'cors',
        headers:{ "Content-Type": "application/json" },
        credentials:'include'
      })
     
      if(!response.ok){
        throw new Error('Data could not be fetched')
      }else{
        return await response.json()
      }
}