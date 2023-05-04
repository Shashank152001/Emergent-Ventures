import React, { useState, useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import profile from "./profile.jpg";
import "./Timesheet.css";
import NoRecord from "../Project/norecord";
import {fetchTimeSheet} from '../../Service/TimesheetService'

function Timesheet() {
    const [timesheet, setTimesheet] = useState(null);

    useEffect(() => {
        fetchTimeSheet()
            .then((data) => {
                setTimesheet(data.data);
                // console.log(data.data)
                
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
                        style={{ width: "100%"}}
                    >
                        <tbody>
                            {timesheet ? 
                                timesheet.map((ele, index) => (
                                    <tr key={index} className="border-0">
                                        <td className="border-0">
                                            <p style={{height:'17px'}} className="p">
                                            <BsCheckCircleFill className="checked" />
                                            </p>
                                           
                                        </td>
                                        <td className="timesheet-name border-0">
                                            <p className="image-container-timesheet p">
                                                <img
                                                    src={profile}
                                                    alt="employee"
                                                />
                                            </p>
                                            <span
                                                style={{
                                                    height:'35px',
                                                    paddingLeft: "0.7rem",
                                                    fontWeight: "bold",
                                                    color: "#41496A",
                                                }}
                                                className="span"
                                            >
                                                {ele.timesheetName}
                                            </span>
                                        </td>
                                        <td className="border-0">
                                            <p style={{
                                            width:'112px',
                                            height:'65px',
                                            margin:'auto',
                                            fontWeight:'200'
                                        }}
                                        className="p"
                                            >{ele.week}</p>
                                            </td>
                                        <td className="border-0">
                                            <p style={{fontWeight:'200'}} className="p">{ele?.submittedHours || '00'}</p>
                                            <p style={{fontWeight:'200'}} className="p">Submitted Hours</p>
                                        </td>
                                        <td className="border-0">
                                            <p style={{fontWeight:'200'}} className="p">{ele?.approvedHours || '00'}</p>
                                            <p style={{fontWeight:'200'}} className="p d-none">Approved Hours</p>
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
