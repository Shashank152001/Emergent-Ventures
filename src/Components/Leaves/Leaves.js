import React from 'react'
import './Leaves.css'

const Leaves = () => {
  return (
    <>
       <div id='leaves' className='m-2 p-2'>
        <div className="container">
            <div className="row shadow border"  style={{borderRadius:"25px"}}>
                <div className="col-md-12 bg-light">
                    <h6 className='my-1'>My Leaves </h6>
                    <div className='d-flex'>
                    <div className="spinner-border text-primary" role="status"></div>
                    <span className='mx-2' style={{fontSize:'10px'}}>Casual Leave Intern
                    <p className=' text-secondary' style={{fontSize:'10px'}}>Available 3 days</p></span>
                    </div>
                </div>
                <div className="col-md-12 bg-light">
                    
                    <div className='d-flex'>
                    <div className="spinner-border text-danger" role="status"></div>
                    <span className='mx-2 ' style={{fontSize:'10px'}}>Leave Without pay
                    <p className=' text-secondary' style={{fontSize:'10px'}}>Available 3 days</p></span>
                    </div>
                </div>
                <div className="col-md-12 bg-light">
                 
                    <div className='d-flex'>
                    <div className="spinner-border text-success" role="status"></div>
                    <span className='mx-2' style={{fontSize:'10px'}}>Restricted Holidays
                    <p className='text-secondary' style={{fontSize:'10px'}}>Available 3 days</p></span>
                    </div>
                    <button className='btn btn-primary mb-2 mt-2'>Apply Leave</button>
                </div>
              
            </div>
         
        </div>
    </div>
    </>
  )
}

export default Leaves