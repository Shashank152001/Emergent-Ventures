import React from "react";

import './GetUserTimesheet.css';




function GetRmTimesheet (){

   


    return (
        <>

            <div className="getuser-timesheet">
               
                <div className="GetUserTimesheet-Table">

                    <table className='table table-hover'>
                        <thead>
                            <tr className="Timesheet-Tbale-heading-text">
                                <td>Sr.No</td>
                                <td>TimeSheet Name</td>
                                <td>HRMID</td>
                                <td>Name</td>
                                <td>Submitted Hours</td>
                                <td>Approved Hours</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>TimeSheet Name</td>
                                <td>HRM3024</td>
                                <td>Pankaj</td>
                                <td>Submitted Hours</td>
                                <td>Approved Hours</td>
                                <td><i className="fa fa-hourglass Timesheet-Tbale-heading-text text-warning"></i></td>
                                <td><i class="bi bi-pen-fill"></i></td>
                            </tr>



                        </tbody>
                    </table>

                </div>
            </div>

        </>
    );
};
export default GetRmTimesheet;