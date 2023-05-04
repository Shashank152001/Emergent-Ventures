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
export const fetchReportingTimesheet=async()=>{
  const response=await fetch(url+'user/timesheets/get-user-subordinates-timesheets',{
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
export async function UpdateReportingTimesheet(data) {
    
  const response=await fetch(url+'user/timesheets/update-user-subordinate-timesheet',{
      method:"PUT",
      credentials:'include',
      body:new URLSearchParams(data)
  })
  return response.json() 
}