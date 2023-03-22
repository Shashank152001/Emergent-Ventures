import React from 'react'
import {Link} from 'react-router-dom'
<<<<<<< HEAD:src/Components/SignIn.js
import './css/sign.css';


function SignIn() {
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
                 <div style={{height:'414px',width:'494px'}} className='left-image'>
                    <img src='Images/singin.png' alt='signin' style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                 </div>
            </div>
            <div className='right'>
                <form id="form">
                    <div>
                        <h1 className='signin-title'>Sign In</h1>
                    </div>
                    <div>
                        <div className='field'>
                            <label htmlFor='email' className='label'>Email address</label>
                            <input type="email" name='email' id='email'/>
                        </div>
                        <div className='field'>
                            <label htmlFor='password' className='label'>Password</label>
                            <input type="password" name='password' id='password'/>
                        </div>
                        <div className='last'>
                            <div>
                                <input type='checkbox'></input>
                                <span style={{paddingLeft:'0.5rem'}}>Remember me</span>
                            </div>
                            <div>
                                <Link to=''>Forgot password?</Link>
=======
import './Login.css'
function SignIn() {
  return (
    <div id='SignIn'>
        <div className="container-fluid">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row bg-light mt-5 mb-sm-5 w-100 h-75">
                    <div className="col-md-6 mt-3 ps-5">
                    <img src="/Images/celebal.png" alt="" className='img-fluid' style={{ width: "30%", height: "125px" }}/>
                        <h1 className='text-dark fw-normal'>Welcome Interns!</h1>
                        <img src="/Images/singin.png" alt="" className='img-fluid mx-auto d-block' style={{ width: "75%", height: "350px" }}/>
                    </div>
                    <div className="col-md-6 mt-3 pe-5">
                        <p className='text-dark fw-bolder mb-4 fs-3'>Sign In</p>
                        <form action="">
                            <label htmlFor="" className='form-label fw-bolder'>Email Address</label>
                            <input type="email" name="" id="" className='form-control mb-1'/>
                            <label htmlFor="" className='form-label fw-bolder'>Password</label>
                            <input type="password" name="" id="" className='form-control'/>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check">
                                <input type="checkbox" name="" id="" className='form-check-input me-2'/>
                                <label class="form-check-label" for="form2Example3">
                                    Remember Me
                                </label>
                                </div>
                                <Link className='text-decoration-none'>Forget Password</Link>
                                
                            </div>   
                            <br />
                            <button className='btn btn-primary mt-3 mb-2' type="submit">SignIn</button>
                            <div className="mt-3">
                            <p>Dont have Account?<span><Link to="/signup" className='ms-1 text-decoration-none'>SignUp</Link></span></p>
>>>>>>> main:src/Components/Login/Login.js
                            </div>
                        </div>
                        <div>

                        </div>
                        <div style={{margin:'1.4rem 0'}}>
                            <button type='submit' style={{padding:'0.6rem 2.6rem',color:'#fff',backgroundColor:'#2563EB',border:'none',outline:'none',borderRadius:'6px'}}>Sign In</button>
                        </div>
                        <div>
                            <p>Don't have an account?<Link to=''>Sign Up</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     </section>
  )
}

export default SignIn