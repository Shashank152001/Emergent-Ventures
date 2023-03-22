import React from 'react'
import './WFH.css'


const Wfh = () => {
  return (
    <>
    <div id='skills' className='m-2 p-2'>
     <div className="container">
         <div className="row shadow">
             <div className="col-md-12 col-sm-12 col-xs-12 bg-light">
                 <h5 className='my-2' style={{fontSize:'15px'}}> Want to Work from home? </h5>
                 <div className='d-flex '>
                
                    <div style={{ height: "5%", width: "90%" }}>
                        <img src="./images/workHome.png" alt="" className='img-fluid' style={{ height: "10%", width: "90%" }}/>
                    </div>
                 </div>
                 <button className='btn btn-primary mb-2'>Apply for WFH</button>
             </div>
             
         </div>
      
     </div>
 </div>
 </>
  )
}

export default Wfh