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
<<<<<<< HEAD
                    <div className="col-md-6">
                        <MyProject/>
                    </div> */}
=======
                </div>
                <div className="row w-100 mt-3">
<<<<<<< HEAD
                    <div className="col-md-6 ">
                        <Skills/>
                    </div>
                    <div className="col-md-6">
=======
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <Skills/>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
>>>>>>> 8e45dd2f6f8e8ebfeff00dff9948d9ffe69b2dc9
                        <Timesheet/>
                    </div>
>>>>>>> main
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