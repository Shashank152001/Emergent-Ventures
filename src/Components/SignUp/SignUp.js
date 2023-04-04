import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './SignUp.css'
import { userSignUp } from '../../Service/SignUpServeice';
// import './sign.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignUp() {

    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        agreement:false
      });

    const [formErrors, setFormErrors] = useState({});
    const [isFilled, setFilled] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
      
       
        const errors = {};
      
        if (!formData.fullname) {
            errors.fullname = 'Please enter your name';
        }

        if (!formData.designation) {
            errors.designation = 'Please enter your designation';
        }

        if (!formData.department) {
            errors.department = 'Please enter your department';
        }
      
        if (!formData.email) {
          errors.email = 'Please enter your email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Please enter a valid email address';
        }
      
        if (!formData.password) {
          errors.password = 'Please enter a password';
        } else if (formData.password.length < 8) {
          errors.password = 'Password must be at least 8 characters';
        }
      
        if (formData.confirmpassword !== formData.password) {
          errors.confirmpassword = 'Passwords do not match';
        }
        else if(!formData.confirmpassword){
            errors.confirmpassword = 'Please enter password again';
        }

        if(!formData.agreement){
            errors.agreement='You must agree to  terms & conditions'
        }
      
    
        setFormErrors(errors);
        const bodyData=formData
        
        userSignUp(bodyData).then((data)=>{
            console.log(data)
            
            if(data.message==='User created successfully'){
                navigate('/')
                toast.success('SignUp Successfull', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
            else{
                navigate('/signup')
                setFilled(false);
                toast.error('User Already Exit!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
        })
        .catch((e)=>{
            console.log(e.message)
            navigate('/signup')
            toast.error('Server Down!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        })
    
      };


      const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prevState) => ({ ...prevState, [name]: newValue }));
      };
  
     
      
  return (
    <>
     <section className='signIn-container signup-container' style={{height:'100vh'}}>
        
        <div className='signup-wrapper '>
            <div className='left'>
                 <div className='logo-title'>
                        <div style={{width:'250px',height:'100px'}}>
                            <img src='Images/celebal.png' alt="celebal" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                        </div>
                        <div style={{width:'80%',margin:'auto'}}>
                            <p style={{fontSize:'2rem',color:'#545A78'}}>Welcome Interns!</p>
                        </div>
                 </div>
                 <div style={{height:'82%'}} className='left-image'>
                    <img src='Images/singin.png' alt='signin' style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                 </div>
            </div>
            <div className='right'>
                <form id="form" onSubmit={handleSubmit}>
                    <div>
                        <h1 className='signin-title'>Sign up</h1>
                    </div>
                    <div>
                        <div className='field position-relative'>
                            <label htmlFor='name' className='label'>Fullname</label>
                            <input type="text" name='name' id='fullname' onChange={handleChange} value={formData.name}/>
                            {formErrors.name && <span className='error-span'>{formErrors.name}</span> }
                            
                        </div>
                        <div className='field position-relative'>
                            <label htmlFor='email' className='label'>Email address</label>
                            <input type="email" name='email' id='email' onChange={handleChange} value={formData.email} />
                            {formErrors.email && <span className='error-span'>{formErrors.email}</span>}
                        </div>
                        {/* <div className='field position-relative'>
                            <label htmlFor='designation' className='label' style={{padding:'0.3rem 0'}}>Designation</label>
                            <input type="text" name='designation' id='designation' style={{padding:'0.3rem'}} onChange={handleChange} value={formData.designation} />
                            {formErrors.designation && <span className='error-span'>{formErrors.designation}</span>}
                        </div>
                        <div className='field position-relative'>
                            <label htmlFor='department' className='label' style={{padding:'0.3rem 0'}}>Department</label>
                            <input type="text" name='department' id='department' style={{padding:'0.3rem'}} onChange={handleChange} value={formData.department} />
                            {formErrors.department && <span className='error-span'>{formErrors.department}</span>}
                        </div> */}
                        <div className='field position-relative'>
                            <label htmlFor='password' className='label' >Password</label>
                            <input type="password" name='password' id='password' onChange={handleChange} value={formData.password} />
                            {formErrors.password && <span className='error-span'>{formErrors.password}</span>}
                        </div>
                        {/* <div className='field position-relative'>
                            <label htmlFor='confirmpassword' className='label' style={{padding:'0.3rem 0'}}>Confirm Password</label>
                            <input type="password" name='confirmpassword' id='confirmpassword' style={{padding:'0.3rem'}} onChange={handleChange} value={formData.confirmpassword}/>
                            {formErrors.confirmpassword && <span className='error-span'>{formErrors.confirmpassword}</span>}
                        </div> */}
                        <div className='last position-relative'>
                            <div>
                                <input type='checkbox' name="agreement" id="agreement" onChange={handleChange} checked={formData.agreement}></input>
                                <span style={{paddingLeft:'0.5rem'}}>Agree terms & conditions</span>
                                {formErrors.agreement && <p className='error-span agreement-error'>{formErrors.agreement}</p>}
                            </div>
                        </div>
                        <div>

                        </div>
                        <div style={{margin:'0'}}>
                            <button type='submit' style={{padding:'0.6rem 2.6rem',color:'#fff',backgroundColor:'#2563EB',border:'none',outline:'none',borderRadius:'6px'}}>Sign up</button>
                        </div>
                        <div>
                            <p>already have an account?<Link to='/'>Sign in</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     </section>
    
     </>
  )
}

export default SignUp;