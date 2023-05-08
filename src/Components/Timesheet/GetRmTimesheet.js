import React,{useState,useEffect} from 'react'
import {fetchReportingTimesheet} from '../../Service/TimesheetService'
import { Link } from 'react-router-dom';
import NoRecord from "../Project/norecord";
import Tabs from './Tabs';
function GetRmTimesheet() {
    const[rmTimesheet,setRmTimesheet]=useState(null);
    useEffect(()=>{
        fetchReportingTimesheet().then((data)=>{
            // console.log(data.data);
            setRmTimesheet(data);
        }).catch((e)=>{
            console.log(e.message);
        })
    },[])
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Tabs/>
            <table className="table table-hover">
              <thead>
                <tr>
                  <td>Sr.No</td>
                  <td>HRMID</td>
                  <td>Name</td>
                  <td>TimeSheet Name</td>
                  <td>Submitted Hours</td>
                  <td>Approved Hours</td>
                  <td>Status</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {rmTimesheet ? (
                  rmTimesheet.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                      <p className="image-container-timesheet p" style={{marginRight:'0.4rem',width:'36px',height:'36px'}}>
                          <img src={item.profileImage} alt="employee" />
                      </p>
                        {item.hrmid}
                      </td>
                      <td>{item.name}</td>
                      <td>{item.timesheetName}</td>
                      <td>{item.submittedHours}</td>
                      <td>{item.approvedHours}</td>
                      <td>{item.status}</td>
                      
                      {item.status==='Pending'?
                      <>
                      <td><Link className="text-decoration-none text-dark"
                    to = {`/dashboard/editTime/${index}`}
                    ><i className="bi bi-pen-fill ms-2"></i></Link></td>
                    </>
                    :
                    item.status==='Approved'?
                    <td><i className="bi bi-check-circle-fill text-success ms-2"></i></td>
                    :
                    <td><i className="bi bi-x-circle-fill text-danger ms-2"></i></td>
                    }
                    </tr>
                    
                  ))
                ) : (
                  <>
                    <tr>
                      <td colSpan="9">
                        <NoRecord />
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetRmTimesheet