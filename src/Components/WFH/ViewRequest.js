import React, { useState, useEffect } from "react";
import "./WFH.css";
import Tab from "./Tab";
import { ReportingGetdata } from "../../Service/LeavesService";
import { Link } from "react-router-dom";
import NoRecord from "../Project/norecord";
function ViewRequest() {
  const [ReportingData, SetReportingData] = useState(null);

  useEffect(() => {
    ReportingGetdata()
      .then((data) => {
        // console.log(data);
        SetReportingData(data);
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
            <table className="table table-hover">
              <thead>
                <tr>
                  <td>Sr.No</td>
                  <td>HRMID</td>
                  <td>Name</td>
                  <td>Role</td>
                  <td>Leave Type</td>
                  <td>Start Date</td>
                  <td>End Date</td>
                  <td>Status</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {ReportingData ? (
                  ReportingData.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className="d-flex">
                        <p className="image-container-timesheet p " style={{marginRight:'0.4rem',width:'36px',height:'36px'}}>
                          <img src={item.profileImage} alt="employee" />
                        </p>
                        {item.hrmid}
                      </td>
                      <td>{item.name}</td>
                      <td>{item.role}</td>
                      <td>{item.leaveType}</td>
                      <td>{item.startDate}</td>
                      <td>{item.endDate}</td>
                      <td>{item.status}</td>
                      {item.status === "Pending" ? (
                        <>
                          <td>
                            <Link
                              className="text-decoration-none text-dark"
                              to={`/dashboard/editrequest/${index}`}
                            >
                              <i className="bi bi-pen-fill ms-2"></i>
                            </Link>
                          </td>
                        </>
                      ) : item.status === "Approved" ? (
                        <td>
                          <i className="bi bi-check-circle-fill text-success ms-2"></i>
                        </td>
                      ) : (
                        <td>
                          <i className="bi bi-x-circle-fill text-danger ms-2"></i>
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  <>
                    <tr>
                      <td colSpan="11">
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

export default ViewRequest;
