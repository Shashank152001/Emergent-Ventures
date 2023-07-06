export const validateForm = (data)=>{

    const errors = {};


    if (!data.name && 'name' in data) {
        errors.name = 'Please enter your name';
    }

    if (!data.email) {
        errors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {

        errors.email = 'Please enter a valid email address';
    }

    if (!data.password) {
        errors.password = 'Please enter a password';
    } else if (data.password.length < 3) {
        errors.password = 'Password must be at least 3 characters';
    }
    
    
    
    
   return Object.keys(errors).length>0 ? [errors,true] : [errors,false];
}


