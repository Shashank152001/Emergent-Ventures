import React from 'react'
import Skills from './Skills'
import Timesheet from './Timesheet'
import '../App.css'

function Dashboard() {
    return (
        <>
            <div id='dashboard'>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <div className='sidebar bg bg-light' style={{ height: "100%", width: "100%" }}>
                                    <img src="./images/celebal.png" className='img-fluid ' style={{ height: "20%", width: "90%" }} />
                                    <p className='icon '><i class="bi-alarm"></i>&nbsp;&nbsp;Dashboard</p>
                                    <p className='icon'><i class="bi bi-bar-chart"></i>&nbsp;&nbsp;Skills</p>
                                    <p className='icon'><i class="bi bi-wallet2"></i>&nbsp;&nbsp;My leave</p>
                                    <p className='icon'><i class="bi bi-person"></i>&nbsp;&nbsp;Account </p>
                                    <p className='icon'><i class="bi bi-gear"></i>&nbsp;&nbsp;Setting</p>
                                </div>
                            </div>

                            <div className="col-md-10">
                                <div className="row ">
                                    <div className='col-md-5'></div>
                                    <div className='col-md-4 '>
                                        {/* <i class="bi bi-search p-3"></i> */}
                                        <div className=' '>
                                            <input type="text" value='search' className='search bi bi-search w-100 mt-3  ' />
                                        </div>
                                    </div>
                                    <div className='bell col-md-3   mt-3'>
                                        <i className="bi bi-bell p-3"></i>
                                        <img className='profile ' src="./images/singin.png" />
                                        <span className='p-4'>Harsh srivastava</span>

                                        <button type="button" className=" drop dropdown-toggle">
                                        </button>


                                    </div>


                                </div>
                                <hr />


                                <div className="row w-100 mt-3">
                                    <div className="col-md-6 ">
                                        <Skills />
                                    </div>
                                    <div className="col-md-6">
                                        <Timesheet />
                                    </div>
                                </div>
                                <div className="row w-100 mt-3">
                                    <div className="col-md-6 ">
                                        <Skills />
                                    </div>
                                    <div className="col-md-6">
                                        <Timesheet />
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