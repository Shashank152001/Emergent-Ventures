import React,{useState,useEffect} from 'react'
import './WFH.css';
import Tab from './Tab';
import {getLeaveRequest} from '../../Service/LeavesService'
function GetRequest() {
  const[userRequest,setUserRequest]=useState(null);


  useEffect(()=>{
    getLeaveRequest().then((data)=>{
      console.log(data.data);
      setUserRequest(data.data)
    })
  },[])
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