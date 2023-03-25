import React from 'react'
import CircularProgress from './circularprogress'
import './Leaves.css'

const Leaves = () => {
  return (
    <>
       <div id='leaves' className=''>
        <div className="leaves-container">
            <div className="row h-100"  style={{borderRadius:"25px"}}>
                <div className="col-md-12 ">
                    <h6 className='my-1' style={{padding:'0.5rem',paddingLeft:'0',fontWeight:'bold'}}>My Leaves </h6>
                    <div className='d-flex'>
                    <CircularProgress progress={0} stroke={"#ff6e6e"}/>
                    <div>
                    <span className='' style={{fontSize:'10px'}}>Casual Leave Intern
                    <p className=' text-secondary' style={{fontSize:'10px'}}>Available 3 days</p></span>
                    </div>
                    </div>
                </div>
                <div className="col-md-12 ">
                    
                    <div className='d-flex'>
                    <CircularProgress progress={0} stroke={"#07c8de"}/>
                    <div>
                    <span className='' style={{fontSize:'10px'}}>Leave Without pay
                    <p className=' text-secondary' style={{fontSize:'10px'}}>Available 3 days</p></span>
                    </div>
                    </div>
                </div>
                <div className="col-md-12 ">
                 
                    <div className='d-flex'>
                    <CircularProgress progress={0} stroke={"#13c24e"}/>
                    
                    <div>
                    <span className='' style={{fontSize:'10px'}}>Restricted Holidays
                    <p className='text-secondary' style={{fontSize:'10px'}}>Available 3 days</p></span>
                    </div>
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