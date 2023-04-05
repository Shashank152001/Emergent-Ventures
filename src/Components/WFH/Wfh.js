import React from 'react'
import './WFH.css'
import wfh from './workHome.png';
import { useNavigate } from 'react-router-dom';
// import WFHform from './WFHform';

const Wfh = () => {
    const navigate= useNavigate();
  return (
    <>
    <div id='wfh' className=''>
     <div className="wfh-container">
         <div className="row h-100">
             <div className="col-md-12 col-sm-12 col-xs-12 ">
                 <h5 className='my-2' style={{fontSize:'15px',padding:"0.6rem"}}> Want to Work from home? </h5>
                 <div className='d-flex '>
                
                    <div style={{ height: "154px", width: "212px" }}>
                        <img src={wfh} alt="" className='img-fluid' style={{ height: "100%", width: "100%",objectFit:'cover' }}/>
                    </div>
                 </div>
                 <button onClick={navigate('/WFHform')} className='btn btn-primary mb-2'>Apply for WFH</button>
             </div>
             
         </div>
      
     </div>
 </div>
 </>
  )
}

export default Wfh