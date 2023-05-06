import React,{useEffect,useState,useRef} from "react";
import "./Timesheet.css";
import {getTimeSheet} from "../../Service/TimesheetService";
// import Timesheetform from "./TimesheetForm";
const LeftRow = ({ row,handlechange,week,start,end}) => {

  const[userTimeSheetData,setuserTimeSheetData] = useState([]);
  const ClientRef = useRef(''); 
  const projectRef = useRef(''); 
  const jobRef = useRef(''); 

  useEffect(() => {
    
    getTimeSheet(week)
      .then((data) => {
        setuserTimeSheetData(data.data);
      })
      .catch((e) => {
        // console.log(e.message);
        setuserTimeSheetData([]);
        ClientRef.current.value  = '';
        projectRef.current.value  = '';
        jobRef.current.value  = '';
      });

     return ()=>{
      setuserTimeSheetData([]);
     }

  }, [start,end]);

  



  return (
   
    <tbody>
      <tr>
        <td style={{ textAlign: "center" }}>{row}.</td>
        <td>
          <select
            className="left-table-td"
            name="clientName"
            onChange={handlechange}
            defaultValue={userTimeSheetData[row-1]?.clientName}
            data-row = {row}
            value={userTimeSheetData[row-1]?.clientName}
            ref={ClientRef}
          >
            <option value="">Select Client</option>
            <option value="CT-L&D">CT-L&D</option>
            <option value="CT-LMS">CT-LMS</option> 
          </select>
        </td>
        <td>
          <select
            className="left-table-td"
            onChange={handlechange}
            name="projectName"
            data-row = {row}
            defaultValue={userTimeSheetData[row-1]?.projectName}
            value={userTimeSheetData[row-1]?.projectName}
            ref={projectRef}
          >
            <option value="">Select Project</option>
            <option value="Zoho People">Zoho People</option>
            <option value="Zoho People">Zoho People</option>
          </select>
        </td>
        <td>
          <select
            className="left-table-td"
            onChange={handlechange}
            name="jobName"
            data-row = {row}
            defaultValue = {userTimeSheetData[row-1]?.jobName}
            value={userTimeSheetData[row-1]?.jobName}
            ref={jobRef}
          >
            <option value="">Select Job</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </td>
      </tr>
    </tbody>
    
  );
};

export default LeftRow;
