import React,{useState,useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './sign.css';
import {LoginContext} from '../../Context/LoginContext'

function SignIn() {


    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
      const {setuserLoginEmail,setuserLoginStatus,setUserSkills} =useContext(LoginContext)
      const [formErrors, setFormErrors] = useState({});
      const navigate = useNavigate()

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
        } else if (formData.password.length < 2) {
          errors.password = 'Password must be at least 8 characters';
        }
      
        setFormErrors(errors);

        const bodydata=formData;
        console.log(bodydata)
        fetch('https://561b-117-242-153-226.in.ngrok.io/',{
            method:"POST",
            mode:'cors',
            headers:{ "Content-Type": "application/x-www-form-urlencoded" },
            credentials:'include',
            body:new URLSearchParams(bodydata)
        }).then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            console.log(data.data.email)
            if(data.data.email){
                navigate('/dashboard')
                localStorage.setItem('userLoginEmail', data.data.email)
                setuserLoginEmail(localStorage.getItem('userLoginEmail'))
                localStorage.setItem('userLoginStatus', '1')
                setuserLoginStatus(localStorage.getItem('userLoginStatus'))
                document.cookie = "employeeManagementCookie=" + data.cookie.employeeManagementCookie.currentUserToken;
            }
            // }else{
            //     navigate('/signup')
            // }
        }).catch((error)=>{
            // console.log('Error')
            navigate('/')
            alert('Wrong credentials')
        })
        // signIn(formData)
      
      };
      const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prevState) => ({ ...prevState, [name]: newValue }));
      };

  return (
     <section className='signIn-container'>
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
            <div className='right'>
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
  )
}

export default SignIn