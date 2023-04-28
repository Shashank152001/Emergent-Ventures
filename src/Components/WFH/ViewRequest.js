import React, { useState, useEffect } from "react";
import './WFH.css';
import Tab from './Tab';
import { ReportingGetdata } from '../../Service/WfhrequestService';
import { Link } from "react-router-dom";
function ViewRequest() {

  const [ReportingGetData, SetReportingGetData] = useState([]);

  useEffect(() => {
    ReportingGetdata()
      .then((ReportingRequestdata) => {


        SetReportingGetData(ReportingRequestdata.data);
        console.log(ReportingRequestdata.data)
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

function edits(index)
{
  const ids=index;

  console.log(ids)
}
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Tab />
            <table className='table table-hover'>
              <thead>
                <tr>
                  <td>Sr.No</td>
                  <td>UserId</td>
                  <td>HRMID</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Role</td>
                  <td>Request Type</td>
                  <td>Leave Type</td>
                  <td>Start Date</td>
                  <td>End Date</td>
                  <td>Reason</td>
                  <td>Status</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
              
                  {ReportingGetData.map((item, index) => (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.userId}</td>
                      <td>{item.hrmid}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.role}</td>
                      <td>{item.request}</td>
                      <td>{item.leaveType}</td>
                      <td>{item.startDate}</td>
                      <td>{item.endDate}</td>
                      <td>{item.reason}</td>
                      <td>{item.status}</td>
                      <td><Link className="text-decoration-none text-dark"
                    to = {`/dashboard/editrequest/${index}`} onClick={()=>{
                      edits(index)
                    }}><i className="bi bi-pen"></i></Link></td>
                    </tr>
                  ))}
             
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewRequest