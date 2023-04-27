import React from 'react'
import './WFH.css';
import Tab from './Tab';
function GetRequest() {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <Tab/>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                          <td>Sr.No</td>
                          <td>Name</td>
                          <td>Request Type</td>
                          <td>Leave Type</td>
                          <td>Start Date</td>
                          <td>End Date</td>
                          <td>Reason</td>
                          <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default GetRequest