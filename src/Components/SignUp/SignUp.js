import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
function SignUp() {
  return (
    <div id='SignUp'>
        <div className="container-fluid">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row bg-light mt-sm-5 mb-sm-5 w-100 h-75">
                    <div className="col-md-6 mt-3 ps-5">
                    <img src="/Images/celebal.png" alt="" className='img-fluid' style={{ width: "30%", height: "125px" }}/>
                        <h1 className='text-dark fw-normal'>Welcome</h1>
                        <img src="/Images/singin.png" alt="" className='img-fluid mx-auto d-block' style={{ width: "75%", height: "350px" }}/>
                    </div>
                    <div className="col-md-6 mt-5 pe-3">
                        <p className='text-dark fw-bolder mb-4 fs-3'>Sign Up</p>
                        <form action="">
                            <label htmlFor="" className='form-label fw-bolder'>Full Name</label>
                            <input type="text" name="" id="" className='form-control'/>
                            <label htmlFor="" className='form-label fw-bolder'>Email Address</label>
                            <input type="email" name="" id="" className='form-control mb-1'/>
                            <label htmlFor="" className='form-label fw-bolder'>Designation</label>
                            <input type="text" name="" id="" className='form-control'/>
                            <label htmlFor="" className='form-label fw-bolder'>Department Name</label>
                            <input type="text" className='form-control' />
                            <label htmlFor="" className='form-label fw-bolder'>Password</label>
                            <input type="password" name="" id="" className='form-control'/>
                            <label htmlFor="" className='form-label fw-bolder'>Confirm Password</label>
                            <input type="password" name="" id="" className='form-control'/>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check">
                                <input type="checkbox" name="" id="" className='form-check-input me-2'/>
                                <label class="form-check-label" for="form2Example3">
                                    Agree For Terms and Conditions
                                </label>
                                </div>
                                
                               
                                
                                {/* <Link className='text-decoration-none'>Forget Password</Link> */}
                                
                            </div>
                            
                            
                            <br />
                            <button className='btn btn-primary mt-3 mb-2' type="submit">SignUp</button>
                            <div className="mt-3">
                            <p>Alredy have Account?<span><Link to="/" className='ms-1 text-decoration-none'>SignIn</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp