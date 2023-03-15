import React from 'react'
import Skills from './Skills'
import Timesheet from './Timesheet'
import Leaves from './Leaves'
import Timer from './Timer'
import Wfh from './Wfh'
function Dashboard() {
  return (
    <>
    <div id='dashboard'>
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-1">
                        Celebal
                    </div>
                
                <div className="col-md-11">
                    <div className="row">
                        <div className="col-md-12">
                            <input type="text" name="" id="" className='form-control'/>
                        </div>
                    </div>
                    <hr />
                    <div className="row w-100 mt-5">
                    <div className="col-md-6 ">
                       <Timer/> 
                    </div>
                    <div className="col-md-6">
                    <Leaves/>
                    </div>
                    <div className="col-md-6">
                    <Wfh/>
                    </div>
                </div>
                <div className="row w-100 mt-3">
                    <div className="col-md-6 ">
                        <Skills/>
                    </div>
                    <div className="col-md-6">
                        <Timesheet/>
                    </div>
                </div>
                
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard