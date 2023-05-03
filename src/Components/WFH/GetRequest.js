import React, { useState, useEffect } from 'react';
import { YourRequestGetdata } from '../../Service/LeavesService';
import './WFH.css';
import Tab from './Tab';
import NoRecord from '../Project/norecord';

function GetRequest() {

  const [GetRequestData, SetGetRequestData] = useState(null);

  useEffect(() => {
    YourRequestGetdata()
      .then((yourgetrequest) => {
        SetGetRequestData(yourgetrequest.data);
        console.log(yourgetrequest.data)
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);





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
                  <td>Email</td>
                  <td>Request Type</td>
                  <td>Leave Type</td>
                  <td>Start Date</td>
                  <td>End Date</td>
                  <td>Reason</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                {GetRequestData?
                GetRequestData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.email}</td>
                    <td>{item.request}</td>
                    <td>{item.leaveType}</td>
                    <td>{item.startDate}</td>
                    <td>{item.endDate}</td>
                    <td>{item.reason}</td>
                    {item.status==='Approved'?
                    <td><i className="bi bi-check-circle-fill text-success ms-2"></i></td>
                    :
                    item.status==='Rejected'?
                    <td><i className="bi bi-x-circle-fill text-danger ms-2"></i></td>:
                    <td><i className="bi bi-hourglass text-warning ms-2"></i></td>
                }
                  </tr>
                ))
                :
                <>
                <tr>
                  <td colSpan='8'><NoRecord/></td>
                </tr>
                </>
              }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetRequest