import React,{useEffect, useRef, useState} from "react";
import "./Timesheet.css";

const LeftRow = ({ row,handlechange,UserTimeSheetData}) => {


  const demo = useState({
    clientName:'',
    projectName:'',
    jobName:''
  });

  const clientRef = useRef('');

  useEffect(()=>{
    console.log(clientRef.current.value);
  },[])



  return (
   
    <tbody>
      <tr>
        <td style={{ textAlign: "center" }}>{row}.</td>
        <td>
          <select
            className="left-table-td"
            name="clientName"
            onChange={handlechange}
            defaultValue={UserTimeSheetData[row-1]?.clientName}
            disabled={UserTimeSheetData[row-1]?.clientName?true:false}
            data-row = {row}
            ref={clientRef}
            value={UserTimeSheetData[row-1]?.clientName || demo.clientName}
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
            defaultValue={UserTimeSheetData[row-1]?.projectName}
            disabled={UserTimeSheetData[row-1]?.projectName?true:false}
            value={UserTimeSheetData[row-1]?.projectName || demo.projectName}
            // ref = {projectRef}
           
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
            defaultValue = {UserTimeSheetData[row-1]?.jobName}
            disabled={UserTimeSheetData[row-1]?.jobName?true:false}
            value={UserTimeSheetData[row-1]?.jobName || demo.jobName}
            // ref = {jobRef}
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
