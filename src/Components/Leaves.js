import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import '../styles/leaves.css'
import Button from 'react-bootstrap/Button';

const Leaves = () => {
  return (
    <>
       <div id='skills'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 bg-light">
                    <h5>My Leaves </h5>
                    <div className='d-flex '>
                    <div > <Spinner className='my-1' variant="secondary" /></div>
                    <span className='mx-3 '>Casual Leave Intern</span>
                   
                    </div>
                    <p className='fs text-secondary mx-5'>Available 3 days</p>
                </div>
                <div className="col-md-12 bg-light">
                    
                    <div className='d-flex '>
                    <div > <Spinner className='my-1' variant="danger" /></div>
                    <span className='mx-3 '>Leave Without pay</span>
                   
                    </div>
                    <p className='fs text-secondary mx-5'>Available 3 days</p>
                </div>
                <div className="col-md-12 bg-light">
                 
                    <div className='d-flex '>
                    <div > <Spinner className='my-1' variant="success" /></div>
                    <span className='mx-3 '>Restricted Holidays</span>
                   
                    </div>
                    <p className='fs text-secondary mx-5'>Available 3 days</p>
                    <Button size='sm' variant="primary">Apply Leave</Button>
                </div>
              
            </div>
         
        </div>
    </div>
    </>
  )
}

export default Leaves