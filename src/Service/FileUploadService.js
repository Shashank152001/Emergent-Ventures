import {url} from '../Constant/Url'
export async function bulkData(data) {
    const response=await fetch(url+'admin/upload-user-details',{
        method:"POST",
        mode:'cors',
        // headers:{"Content-Type": "multipart/form-data" },
        credentials:'include',
        body:data
    })
    // console.log(response)
    // if(!response.ok){
    //   throw new Error('Data could not be fetched')
    // }else{
    //   return response.json()
    // }
    return response.json()

    
}