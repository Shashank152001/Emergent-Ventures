import {url} from '../Constant/Url'
export const fetchSkills=async()=>{
      const response=await fetch(url+'user/skills/get-user-skills/',{
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