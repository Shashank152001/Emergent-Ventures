import React, { useState, useEffect } from "react";
import NoRecord from "../Project/norecord";
import { fetchTimeSheet } from "../../Service/TimesheetService";
import Tabs from '../Timesheet/Tabs'
function GetUserTimesheet() {
  const [userTimesheet, setUserTimesheet] = useState(null);
  useEffect(() => {
    fetchTimeSheet()
      .then((data) => {
        setUserTimesheet(data.data);
        console.log(data.data);
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
            <Tabs/>
            <table className="table table-hover">
              <thead>
                <tr>
                  <td>Sr.No</td>
                  <td>TimeSheet Name</td>
                  <td>Date</td>
                  <td>Submitted Hours</td>
                  <td>Approved Hours</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                {userTimesheet ? (
                  userTimesheet.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.timesheetName}</td>
                      <td>{item.date}</td>
                      <td>{item.submittedHours}</td>
                      <td>{item.approvedHours}</td>
                      {item.status === "Approved" ? (
                        <td>
                          <i className="bi bi-check-circle-fill text-success ms-2"></i>
                        </td>
                      ) : item.status === "Rejected" ? (
                        <td>
                          <i className="bi bi-x-circle-fill text-danger ms-2"></i>
                        </td>
                      ) : (
                        <td>
                          <i className="bi bi-hourglass text-warning ms-2"></i>
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  <>
                    <tr>
                      <td colSpan="8">
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
  );
}

export default GetUserTimesheet;
