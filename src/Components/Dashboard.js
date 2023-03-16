import React from 'react';
import MyProject from './project';
import Skill from './Skills';
import Timesheet from './Timesheet';


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
                <div className="row w-100 mt-3">
                    {/* <div className="col-md-6 ">
                        <Skill/>
                    </div>
                    <div className="col-md-6">
                        <Timesheet/>
                    </div>
                    <div className="col-md-6">
                        <MyProject/>
                    </div> */}
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