import React, { useEffect, useState } from "react";
import "./Timesheet.css";
import {
  getTimeSheet,
  getClientAndProject,
} from "../../Service/TimesheetService";
import {
  reduceFetchedTimeSheetData
} from "../../Utils/getTemplate";

const LeftRow = ({
  row,
  handlechange,
  week,
  start,
  end
}) => {
  const [userTimeSheetData, setuserTimeSheetData] = useState([]);
  const [optionData, setOptionData] = useState([]);


useEffect(() => {

    getClientAndProject()
      .then((data) => {
        console.log(data);
        setOptionData((prev) => [...data]);
      })
      .catch((err) => {
        console.log(err);
      });

}, []);



useEffect(() => {
    getTimeSheet(week)
      .then((data) => {
        const newPreparedData = reduceFetchedTimeSheetData(data);
        setuserTimeSheetData(() => [...newPreparedData]);
      })
      .catch((e) => {

        setuserTimeSheetData([]);
      });
}, [start, end]);


  return (
    <>
      <tr>
        <td style={{ textAlign: "center" }}>{row}.</td>
        <td>
          <select

            className="left-table-td"
            name="clientName"
            onChange={handlechange}
            defaultValue={userTimeSheetData[row - 1]?.clientName || ""}
            disabled={userTimeSheetData[row - 1]?.clientName ? true : false}
            data-row={row}
            value={userTimeSheetData[row - 1]?.clientName}

          >
            <option value="" selected={userTimeSheetData.length === 0}>Select Client</option>
            {<ClientOptions optionData={optionData}/>}
          </select>
        </td>
        <td>
          <select
            className="left-table-td"
            onChange={handlechange}
            name="projectName"
            data-row={row}
            defaultValue={userTimeSheetData[row - 1]?.projectName || ""}
            disabled={userTimeSheetData[row - 1]?.clientName ? true : false}
            value={userTimeSheetData[row - 1]?.projectName}
          >
            <option value="" 
			selected={userTimeSheetData.length === 0}
			>Select Project</option>
            {<ProjectOptions optionData={optionData}/>}

          </select>
        </td>
        <td>
          <input
            className="left-table-td"
            onChange={handlechange}
            name="jobName"
            data-row={row}
            type="text"
            defaultValue={userTimeSheetData[row - 1]?.jobName || ""}
            disabled={userTimeSheetData[row - 1]?.clientName ? true : false}
           
          />
        </td>
      </tr>
    </>
  );
};

export default LeftRow;

const ProjectOptions = ({ optionData}) => {
	
  return (
    <>
	  <option value="CT L&D" key='23'>CT L&D</option>
      <option value="CT LMS" key='35'>CT LMS</option>
      {optionData.length > 0 ? (
        optionData.map((data, index) => (
          <option value={data.projectName} key={index}>
            {data.projectName}
          </option>
        ))
      ) : 
        null
      }
    </>
  );
};

const ClientOptions = ({ optionData}) => {
	
  return (
    <>
	  <option value='Celebat Tech'>Celebat Tech</option>
      {optionData.length > 0 ? (
        optionData.map((data, index) => (
			<option value={data.clientName} key={index}>
			{data.clientName}
		  </option>
        ))
      ) : 
        null
      }
    </>
  );
};


