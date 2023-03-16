import React from 'react'
import { BsCheckCircleFill} from "react-icons/bs";
import profile from './profile.jpg';
import './css/timesheet.css';

function Timesheet() {
  return (
    <section className='timesheet-container'>

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