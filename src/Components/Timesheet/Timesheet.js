import React, { useState, useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import profile from "./profile.jpg";
import "./Timesheet.css";
import NoRecord from "../Project/norecord";
import { fetchTimeSheet } from "../../Service/TimesheetService";

function Timesheet() {
  const [timesheet, setTimesheet] = useState(null);

  useEffect(() => {
    fetchTimeSheet()
      .then((data) => {
        console.log(data);
        setTimesheet(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <section className="timesheet-container">
      <div id="timesheet" style={{ padding: "0.6rem" }}>
        <div className="skills-heading">
          <h1 style={{ fontSize: "1.5rem" }}>My Timesheets</h1>
        </div>

        <div className="timesheet-content">
          <table
            className="timesheet-table border-0 "
            style={{ width: "100%" }}
          >
            <tbody>
              {timesheet ? (
                timesheet.map((ele, index) => (
                  <tr
                    key={index}
                    className="border-0"
                    style={{ height: "65px" }}
                  >
                    <td className="border-0">
                      {/* <p style={{height:'17px'}} className="p"> */}
                      {/* status: "Pending" */}
                      {/* not-checked */}
                      {ele.status === 'Pending'?
                      <BsCheckCircleFill
                        className="not-checked"
                        style={{ verticalAlign: "baseline" }}
                      />
                      :

                      <BsCheckCircleFill
                        className="checked"
                        style={{ verticalAlign: "baseline" }}
                      />
                      
                      }
                      {/* </p> */}
                    </td>
                    <td className="timesheet-name border-0">
                      <p className="image-container-timesheet p">
                        <img src={ele.profileImage} alt="employee" />
                      </p>
                      <span
                        style={{
                          // height:'35px',
                          paddingLeft: "0.7rem",
                          fontWeight: "bold",
                          color: "#41496A",
                          maxWidth: "159px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                        className="span"
                      >
                        {ele.timesheetName}
                      </span>
                    </td>
                    <td className="border-0">
                      <p
                        style={{
                          width: "112px",
                          // height:'65px',
                          margin: "auto",
                          fontWeight: "200",
                        }}
                        className="p"
                      >
                        {ele.week}
                      </p>
                    </td>
                    <td className="border-0">
                      <p style={{ fontWeight: "200" }} className="p">
                        {ele?.submittedHours || "00"}
                      </p>
                      <p style={{ fontWeight: "200" }} className="p">
                        Submitted Hours
                      </p>
                    </td>
                    <td className="border-0">
                      <p style={{ fontWeight: "200" }} className="p">
                        {ele?.approvedHours || "00"}
                      </p>
                      <p style={{ fontWeight: "200" }} className="p d-none">
                        Approved Hours
                      </p>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>
                    <NoRecord />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Timesheet;
