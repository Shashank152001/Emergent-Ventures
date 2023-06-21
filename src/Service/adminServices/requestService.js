import { url } from '../../Constant/Url';

// admin/requests/get-monthly-requests?startDate=2023-06-01

export const getRequestData = async(startDate)=>{
    const response=await fetch(url+`admin/requests/get-monthly-requests?startDate=${startDate}`,{
        method:"GET",
        headers:{"Content-Type": "application/json" },
        credentials:"include"
    })

    if(!response.ok){
        throw new Error('Data could not be fetched')
    }else{
        return await response.json();
    }
}