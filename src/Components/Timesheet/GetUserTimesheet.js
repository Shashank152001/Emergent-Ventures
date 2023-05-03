import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './GetUserTimesheet.css';
import moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import $ from "jquery";


const GetUserTimesheet = ({ startDate }) => {

    const [currentDate, setCurrentDate] = useState(startDate);

    const previousWeek = () => {
        setCurrentDate(moment(currentDate).subtract(7, 'days'));
    };

    const nextWeek = () => {
        setCurrentDate(moment(currentDate).add(7, 'days'));
    };

    const startOfWeek = moment(currentDate).startOf('week').format('DD-MM-YYYY');
    const endOfWeek = moment(currentDate).endOf('week').format('DD-MM-YYYY');


    return (
        <>

            <div className="getuser-timesheet">
                <div className="getuser-timesheet-header bg bg-light">
                    <p className="p-4 Timesheet-header-text">My TimeSheet</p>
                    <div className="Timesheet-header-date p-4">


                        <FontAwesomeIcon className="Timesheet-Date-text  " onClick={previousWeek} icon={faArrowLeft} />

                        <span className="Timesheet-Date-text" >{startOfWeek} - {endOfWeek}</span>
                        <FontAwesomeIcon className="Timesheet-Date-text  " onClick={nextWeek} icon={faArrowRight} />

                    </div>
                </div>
                <div className="GetUserTimesheet-Table">

                    <table className='table table-hover'>
                        <thead>
                            <tr className="Timesheet-Tbale-heading-text">
                                <td>Sr.No</td>
                                <td>TimeSheet Name</td>
                                <td>Employee</td>
                                <td>Submitted Hours</td>
                                <td>Approved Hours</td>
                                <td>Status</td>

                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>1</td>
                                <td>TimeSheet Name</td>
                                <td>Employee</td>
                                <td>Submitted Hours</td>
                                <td>Approved Hours</td>
                                <td><i className="fa fa-hourglass Timesheet-Tbale-heading-text text-warning"></i>
                                </td>

                            </tr>



                        </tbody>
                    </table>

                </div>
            </div>

        </>
    );
};
export default GetUserTimesheet;