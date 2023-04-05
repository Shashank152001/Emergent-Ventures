import React, { useState, useEffect } from "react";
import {Link,useNavigate} from 'react-router-dom'
import './sign.css';
import {userLogin} from '../../Service/LoginService'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bgSvg from '../Spheres.svg';
// import {url} from '../../Constant/Url'


// const url ='https://8925-2401-4900-1c69-8e1e-3cd0-e1a6-ed6c-3b2a.in.ngrok.io/';

<<<<<<< HEAD
const url = "https://married-widely-grants-ambien.trycloudflare.com";

=======
>>>>>>> main

function SignIn() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isFilled, setFilled] = useState(false);
  const FormData = new URLSearchParams(formData);
  const navigate = useNavigate();


      const handleSubmit = (event) => {
        event.preventDefault();
      
       
        const errors = {};
      
        if (!formData.email) {
          errors.email = 'Please enter your email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Please enter a valid email address';
        }
      
        if (!formData.password) {
          errors.password = 'Please enter a password';
        } else if (formData.password.length < 1) {
          errors.password = 'Password must be at least 8 characters';
        }
        if (Object.keys(errors).length === 0) { 
          setFilled(true);
          
        }
        else{
          setFormErrors(errors);
        }
        const bodydata=FormData;
        if(isFilled ){
          userLogin(bodydata).then((data)=>{
      
            // console.log(data.data.email);
            if(!data.message){
            navigate('/dashboard');
            toast.success('Login Successfull', {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
            localStorage.setItem('loggedInUser','1')
            setFilled(false);
            }
            else{
              console.log(data.message)
              navigate('/')
              toast.error('Wrong Credentials!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
              // alert('Wrong Cred')
              // navigate('/')
            }
          }).catch((e)=>{
            console.log(e.message)
            navigate('/')
            toast.error('Could not Connect with Server', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
            // alert('Server Error')
          })
        }
        
      };

      const handleChange = (event) => {
        const { name, value} = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      };

  return (
    <>
     <section className='signIn-container position-relative'>
        <div className='signin-wrapper'>
            <div className='left'>
                 <div className='logo-title'>
                        <div style={{width:'250px',height:'100px'}}>
                            <img src='Images/celebal.png' alt="celebal" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                        </div>
                        <div style={{width:'80%',margin:'auto'}}>
                            <p style={{fontSize:'2rem',color:'#545A78'}}>Welcome Interns!</p>
                        </div>
                 </div>
                 <div style={{height:'370px',width:'460px'}} className='left-image'>
                    <img src='Images/singin.png' alt='signin' style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                 </div>
            </div>
            <div className='right d-flex flex-column justify-content-center'>
                <form id="form" onSubmit={handleSubmit}>
                    <div>
                         <h1 className='signin-title'>Sign In</h1>
                    </div>
                    <div>
                        <div className='field position-relative'>
                            <label htmlFor='email' className='label'>Email address</label>
                            <input type="email" name='email' id='email' placeholder='example@celebaltech.com' onChange={handleChange} value={formData.email} />
                            {formErrors.email && <span className='error-span' >{formErrors.email}</span>}
                        </div>
                        <div className='field position-relative'>
                            <label htmlFor='password' className='label'>Password</label>
                            <input type="password" name='password' id='password' placeholder='enter password' onChange={handleChange} value={formData.password}/>
                            {formErrors.password && <span className='error-span' >{formErrors.password}</span>}
                        </div>
                        <div className='last'>
                            <div>
                                <input type='checkbox' name="remember" id="remember"></input>
                                <span style={{paddingLeft:'0.5rem'}}>Remember me</span>
                            </div>
                            <div>
                                <Link to='/forgotpassword'>Forgot password?</Link>
                            </div>
                        </div>
                        <div>

                        </div>
                        <div style={{margin:'1.4rem 0'}}>
                            <button type='submit' style={{padding:'0.6rem 2.6rem',color:'#fff',backgroundColor:'#2563EB',border:'none',outline:'none',borderRadius:'6px'}}>Sign In</button>
                        </div>
                        <div>
                            <p>Don't have an account?<Link to='/signup'>Sign Up</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     </section>
     <div
     style={{
      backgroundColor:'#2563EB',
      zIndex:'-1'
     }}
     className="position-absolute w-100 h-100 top-0 "
     >
        <img src={bgSvg} alt="background"  className="w-100 h-100"/>
     </div>
     </>
  )
}

export default SignIn;


