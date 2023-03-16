import React from 'react'
import { BsCheckCircleFill} from "react-icons/bs";
import profile from './profile.jpg';
import './css/timesheet.css';

function Timesheet() {
  return (
<<<<<<< HEAD
    <section className='timesheet-container'>
=======
    <>
    <div id="timesheet">
        <div className="container">
            <div className="row">
<<<<<<< HEAD
                <div className="col-md-12 bg-light">
=======
                <div className="col-lg-12 bg-light">
>>>>>>> 8e45dd2f6f8e8ebfeff00dff9948d9ffe69b2dc9
                    <h5>Timesheet</h5>
                    <div className="table-fixed">
                    <table className='table table-hover'>
                        <tbody>
                            <tr>
                                <td className='text-sendonary'> 1</td>
                                <td className='text-sendonary'> 1</td>
                                <td className='fw-bolder text-dark'>Timesheet 1</td>
                                <td className='text-secondary'> 05-03-23 to 05-03-23 </td>
                                <td className='text-secondary'>Time
                                <p className='text-secondary'>Submitted Hours</p>
                                </td>
                                <td className='text-sendonary'>Time
                                    <p className='text-secondary'>Approved Hours</p>
                                </td>
>>>>>>> main

    <div className='skills-heading'>
        <h1>My Timesheets</h1>
    </div>

    <div className='timesheet-content'>
        <table className='timesheet-table'>
            <tbody>

                <tr>
                    <td><BsCheckCircleFill className='checked'/></td>
                    <td className='timesheet-name'>
                        <p className='image-container-timesheet'>
                            <img src={profile} alt="employee" />
                        </p>
                        <span style={{paddingLeft:'0.7rem',fontWeight:'bold',color:'#41496A'}}>Timesheet1</span>
                    </td>
                    <td>
                       <p>01-03-2023 <span>to</span></p>
                        <p>15-03-2023</p>
                    </td>
                    <td>
                         <p>54:00</p>
                        <p>Submitted Hours</p>
                    </td>
                    <td>
                        <p>54:00</p>
                        <p>Approved Hours</p>
                    </td>
                </tr>
                <tr>
                    <td><BsCheckCircleFill className='checked'/></td>
                    <td className='timesheet-name'>
                        <p className='image-container-timesheet'>
                            <img src={profile} alt="employee" />
                        </p>
                        <span style={{paddingLeft:'0.7rem',fontWeight:'bold',color:'#41496A'}}>Timesheet1</span>
                    </td>
                    <td>
                       <p>01-03-2023 <span>to</span></p>
                        <p>15-03-2023</p>
                    </td>
                    <td>
                         <p>54:00</p>
                        <p>Submitted Hours</p>
                    </td>
                    <td>
                        <p>54:00</p>
                        <p>Approved Hours</p>
                    </td>
                </tr>
                <tr>
                    <td><BsCheckCircleFill className='checked'/></td>
                    <td className='timesheet-name'>
                        <p className='image-container-timesheet'>
                            <img src={profile} alt="employee" />
                        </p>
                        <span style={{paddingLeft:'0.7rem',fontWeight:'bold',color:'#41496A'}}>Timesheet1</span>
                    </td>
                    <td>
                       <p>01-03-2023 <span>to</span></p>
                        <p>15-03-2023</p>
                    </td>
                    <td>
                         <p>54:00</p>
                        <p>Submitted Hours</p>
                    </td>
                    <td>
                        <p>54:00</p>
                        <p>Approved Hours</p>
                    </td>
                </tr>
                <tr>
                    <td><BsCheckCircleFill className='checked'/></td>
                    <td className='timesheet-name'>
                        <p className='image-container-timesheet'>
                            <img src={profile} alt="employee" />
                        </p>
                        <span style={{paddingLeft:'0.7rem',fontWeight:'bold',color:'#41496A'}}>Timesheet1</span>
                    </td>
                    <td>
                       <p>01-03-2023 <span>to</span></p>
                        <p>15-03-2023</p>
                    </td>
                    <td>
                         <p>54:00</p>
                        <p>Submitted Hours</p>
                    </td>
                    <td>
                        <p>54:00</p>
                        <p>Approved Hours</p>
                    </td>
                </tr>
                <tr>
                    <td><BsCheckCircleFill className='checked'/></td>
                    <td className='timesheet-name'>
                        <p className='image-container-timesheet'>
                            <img src={profile} alt="employee" />
                        </p>
                        <span style={{paddingLeft:'0.7rem',fontWeight:'bold',color:'#41496A'}}>Timesheet1</span>
                    </td>
                    <td>
                       <p>01-03-2023 <span>to</span></p>
                        <p>15-03-2023</p>
                    </td>
                    <td>
                         <p>54:00</p>
                        <p>Submitted Hours</p>
                    </td>
                    <td>
                        <p>54:00</p>
                        <p>Approved Hours</p>
                    </td>
                </tr>
                <tr>
                    <td><BsCheckCircleFill className='checked'/></td>
                    <td className='timesheet-name'>
                        <p className='image-container-timesheet'>
                            <img src={profile} alt="employee" />
                        </p>
                        <span style={{paddingLeft:'0.7rem',fontWeight:'bold',color:'#41496A'}}>Timesheet1</span>
                    </td>
                    <td>
                       <p>01-03-2023 <span>to</span></p>
                        <p>15-03-2023</p>
                    </td>
                    <td>
                         <p>54:00</p>
                        <p>Submitted Hours</p>
                    </td>
                    <td>
                        <p>54:00</p>
                        <p>Approved Hours</p>
                    </td>
                </tr>

            </tbody>
        </table>
        
    </div>
    

</section>
  )
}

export default Timesheet;