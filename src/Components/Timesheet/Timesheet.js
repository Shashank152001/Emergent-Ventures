import React, { useState, useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import profile from "./profile.jpg";
import "./Timesheet.css";
import NoRecord from "../Project/norecord";
import {fetchTimeSheet} from '../../Service/TimesheetService'


// const url =
//     "https://8925-2401-4900-1c69-8e1e-3cd0-e1a6-ed6c-3b2a.in.ngrok.io/user/get-user-latest-timesheets";


function Timesheet() {
    const [timesheet, setTimesheet] = useState(null);

    useEffect(() => {
        fetchTimeSheet()
            .then((data) => {
                console.log("timesheet", data.data);
                setTimesheet(data.data);
            }).catch((e)=>{
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
                        style={{ width: "100%", height: "100%" }}
                    >
                        <tbody>
                            {timesheet ? 
                                timesheet.map((ele, index) => (
                                    <tr key={index} className="border-0">
                                        <td className="border-0">
                                            <p style={{height:'42px'}}>
                                            <BsCheckCircleFill className="checked" />
                                            </p>
                                           
                                        </td>
                                        <td className="timesheet-name border-0">
                                            <p className="image-container-timesheet">
                                                <img
                                                    src={profile}
                                                    alt="employee"
                                                />
                                            </p>
                                            <span
                                                style={{
                                                    paddingLeft: "0.7rem",
                                                    fontWeight: "bold",
                                                    color: "#41496A",
                                                }}
                                            >
                                                {ele.timesheetName}
                                            </span>
                                        </td>
                                        <td className="border-0">
                                            <p style={{height:'40px'}}>{ele.week}</p>
                                            </td>
                                        <td className="border-0">
                                            <p>{ele.submittedHours}</p>
                                            <p>Submitted Hours</p>
                                        </td>
                                        <td className="border-0">
                                            <p>{ele.approvedHours}</p>
                                            <p>Approved Hours</p>
                                        </td>
                                    </tr>
                                ))
                            : 
                                <tr>
                                    <td>
                                        <NoRecord />
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Timesheet;
