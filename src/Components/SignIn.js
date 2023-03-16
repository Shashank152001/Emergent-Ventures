import React from 'react'
import {Link} from 'react-router-dom'
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