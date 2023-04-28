import {url} from '../Constant/Url';

export const ReportingGetdata=async()=>{
    const response=await fetch(url+'user/requests/get-subordinates-requests',{
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
    })
    
    if(!response.ok){
        throw new Error('Reporting Get Request Data not be fetched')
    }else{
        return await response.json()
    }
}