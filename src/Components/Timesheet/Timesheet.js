import React,{useEffect} from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import profile from "./profile.jpg";
import "./Timesheet.css";
import NoRecord from "../Project/norecord";


const url ="https://cfca-2409-4088-9e37-4758-805-92a6-4b37-a49.ap.ngrok.io/user/get-user-timesheet";

function Timesheet() {
    
    useEffect(()=>{
        fetch(url,{
          method:'GET',
          mode:'cors',
          credentials: 'include',
          headers:{
            'Content-Type': 'application/json'
          },
    
        }).then((response)=>{
              return response.json();
        }).then((data)=>{
        //   setUserData(data.data);
          console.log(data.data);
        })
      },[])
      
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
              {/* <tr className='border-0'>
                    <td className='border-0'><BsCheckCircleFill className='checked'/></td>
                    <td className='timesheet-name border-0'>
                        <p className='image-container-timesheet'>
                            <img src={profile} alt="employee" />
                        </p>
                        <span style={{paddingLeft:'0.7rem',fontWeight:'bold',color:'#41496A'}}>Timesheet1</span>
                    </td>
                    <td className='border-0'>
                       <p>01-03-2023 <span>to</span></p>
                        <p>15-03-2023</p>
                    </td>
                    <td className='border-0'>
                         <p>54:00</p>
                        <p>Submitted Hours</p>
                    </td>
                    <td className='border-0'>
                        <p>54:00</p>
                        <p>Approved Hours</p>
                    </td>
                </tr> */}

              <tr>
                <td>
                  <NoRecord />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Timesheet;
