import React from 'react'
import {Link} from 'react-router-dom'
function SignIn() {
  return (
    <div id='SignIn'>
        <div className="container-fluid">
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <div className="row bg-light mt-5 mb-sm-5 w-100 h-75">
                    <div className="col-md-6 mt-3 ps-5">
                    <img src="/Images/celebal.png" alt="" className='img-fluid' style={{ width: "30%", height: "125px" }}/>
                        <h1 className='text-dark fw-normal'>Welcome Interns!</h1>
                        <img src="/Images/singin.png" alt="" className='img-fluid mx-auto d-block' style={{ width: "75%", height: "350px" }}/>
                    </div>
                    <div className="col-md-6 mt-5 pe-3">
                        <p className='text-dark fw-bolder mb-4 fs-3'>Sign In</p>
                        <form action="">
                            <label htmlFor="" className='form-label fw-bolder'>Email Address</label>
                            <input type="email" name="" id="" className='form-control mb-1'/>
                            <label htmlFor="" className='form-label fw-bolder'>Password</label>
                            <input type="password" name="" id="" className='form-control'/>
                            <div className="row">
                                <div className="col-md-6 mt-3">
                                <input type="checkbox" name="" id="" className=''/><span className='ms-1'>Remember Me</span>
                                </div>
                                <div className="col-md-6 mt-3">
                                <p className='text-end'><Link className='text-decoration-none'>Forget Password</Link></p>
                                </div>
                            </div>
                            
                            
                            <br />
                            <button className='btn btn-primary mt-3 mb-2' type="submit">SignIn</button>
                            <div className="mt-3">
                            <p>Dont have Account?<span><Link to="/login" className='ms-1 text-decoration-none'>SignUp</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn