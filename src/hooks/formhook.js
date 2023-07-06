import { useState } from "react";
import { validateForm } from "../Utils/validate";

export const useForm = (initialValues,onSubmit)=>{

    const [formData, setFormData] = useState(initialValues);
    const[formErrors,setFormErrors]=useState(null);


    const handleSubmit = (event) => {
        event.preventDefault();

       
        const [errors, hasErrors] = validateForm(formData);
        
        if (hasErrors) {
          setFormErrors(errors);
        } else {
          onSubmit(formData);
        }

      };

    
  const handleChange = (event) => {
    const { name, value} = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  
  return {
    formData,
    formErrors,
    handleSubmit,
    handleChange,
  };

} ;