import {url} from '../Constant/Url';

export const UserCheckIn = async (formData)=>{
   
    const response =await fetch(url+'user/check-in',{
        method:'POST',
        mode:'cors',
        credentials:'include',
        headers:{ "Content-Type": "application/x-www-form-urlencoded" },
        body:new URLSearchParams(formData)
    });

    if(!response.ok){
        throw new Error('not checked in')
    }
    else{
        localStorage.setItem('checkInTime',JSON.stringify((
            formData.checkInTime).substr(0,8)
            ));
        return response.json();
    }

}

export const UserCheckOut = async (formDataOut)=>{
   
    const response =await fetch(url+'user/check-out',{
        method:'PUT',
        mode:'cors',
        credentials:'include',
        headers:{ "Content-Type": "application/x-www-form-urlencoded" },
        body:new URLSearchParams(formDataOut)
    });

    if(!response.ok){
        throw new Error('not checked out')
    }
    else{
        localStorage.removeItem('checkInTime');
        return response.json();
    }

}

