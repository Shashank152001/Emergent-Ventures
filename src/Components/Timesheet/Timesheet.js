import React from "react";
import './Timesheet.css'
import { BsCheckCircleFill } from "react-icons/bs";
function Timesheet() {
  return (
    <>
      <div id="timesheet" className="m-2 p-2">
        <div className="container">
          <div className="shadow row bg-light">
            <div className="col-md-12 bg-light" style={{borderRadius:25}}>
              <h5>Timesheet</h5>
              <div className="table-fixed">
                <table className="table table-hover">
                  <tbody style={{overflowY:"hide"}}>
                  <tr className="d-flex" style={{justifyContent:"space-between",alignItems:"stretch",alignContent:"center"}}>
                      <td className="d-flex" style={{justifyContent:"space-between",alignItems:"center",alignContent:"center"}}>
                        <BsCheckCircleFill className="checked" />
                      </td>

                      <td className="d-flex" style={{gap:10,justifyContent:"space-between",alignItems:"center",alignContent:"center",minWidth:"fit-content",padding:10}}>
                        
                        <img
                          src="/Images/profile.jpg"
                          alt=""
                          className="rounded-circle img-fluid"
                          width={30}
                          height={30}
                        />
                        
                        <span style={{maxWidth:200}} >Timesheet 1</span>
                      </td>
                      
                      <td className="d-flex" >
                        <p style={{minWidth:100,maxHeight:50}}>
                          01-03-2023 <span>to</span>
                          <p>15-03-2023</p>
                        </p>
                        
                      </td>
                      <td>
                        <p>54:00</p>
                        <p>Submitted Hours</p>
                      </td>
                      <td>
                        <p>54:00</p>
                        <p>Approved Hours</p>
                      </td>
                    </tr>
                    <tr className="d-flex" style={{justifyContent:"space-between",alignItems:"stretch",alignContent:"center"}}>
                      <td className="d-flex" style={{justifyContent:"space-between",alignItems:"center",alignContent:"center"}}>
                        <BsCheckCircleFill className="checked" />
                      </td>

                      <td className="d-flex" style={{gap:10,justifyContent:"space-between",alignItems:"center",alignContent:"center",minWidth:"fit-content",padding:10}}>
                        
                        <img
                          src="/Images/profile.jpg"
                          alt=""
                          className="rounded-circle img-fluid"
                          width={30}
                          height={30}
                        />
                        
                        <span style={{maxWidth:200}} >Timesheet 1</span>
                      </td>
                      
                      <td className="d-flex">
                      <p style={{minWidth:100}}>
                          01-03-2023 <span>to</span>
                          <p>15-03-2023</p>
                        </p>
                      </td>
                      <td>
                        <p>54:00</p>
                        <p>Submitted Hours</p>
                      </td>
                      <td>
                        <p>54:00</p>
                        <p>Approved Hours</p>
                      </td>
                    </tr>
                    
                    <tr className="d-flex" style={{justifyContent:"space-between",alignItems:"stretch",alignContent:"center"}}>
                      <td className="d-flex" style={{justifyContent:"space-between",alignItems:"center",alignContent:"center"}}>
                        <BsCheckCircleFill className="checked" />
                      </td>

                      <td className="d-flex" style={{gap:10,justifyContent:"space-between",alignItems:"center",alignContent:"center",minWidth:"fit-content",padding:10}}>
                        
                        <img
                          src="/Images/profile.jpg"
                          alt=""
                          className="rounded-circle img-fluid"
                          width={30}
                          height={30}
                        />
                        
                        <span style={{maxWidth:200}} >Timesheet 1</span>
                      </td>
                      
                      <td className="d-flex">
                      <p style={{minWidth:100}}>
                          01-03-2023 <span>to</span>
                          <p>15-03-2023</p>
                        </p>
                      </td>
                      <td>
                        <p>54:00</p>
                        <p>Submitted Hours</p>
                      </td>
                      <td>
                        <p>54:00</p>
                        <p>Approved Hours</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timesheet;
