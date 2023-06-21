import React, { useEffect, useState} from "react";
import "./Timesheet.css";
import {
  getTimeSheet,
  getClientAndProject,
} from "../../Service/TimesheetService";
import {reduceFetchedTimeSheetData} from '../../Utils/getTemplate';

const LeftRow = ({ row, handlechange, week, start, end }) => {
  const [userTimeSheetData, setuserTimeSheetData] = useState([]);
  const [optionData, setOptionData] = useState([]);

  useEffect(() => {
    getClientAndProject()
      .then((data) => {
        setOptionData(data);
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

    return () => {
      setuserTimeSheetData([]);
    };
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
            defaultValue={userTimeSheetData[row - 1]?.clientName}
            disabled={userTimeSheetData[row - 1]?.clientName ? true : false}
            data-row={row}
            value={userTimeSheetData[row - 1]?.clientName}
            
          >
            <option value="">Select Client</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Google">Google</option>
            {/* {optionData.map((data, index) => (
              <option value={data.clientName} key={index}>
                {data.clientName}
              </option>
            ))} */}
          </select>
        </td>
        <td>
          <select
            className="left-table-td"
            onChange={handlechange}
            name="projectName"
            data-row={row}
            defaultValue={userTimeSheetData[row - 1]?.projectName}
            disabled={userTimeSheetData[row - 1]?.clientName ? true : false}
            value={userTimeSheetData[row - 1]?.projectName}
            
          >
            <option value="">Select Project</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Google">Google</option>
            {/* {optionData.map((data, index) => (
              <option value={data.projectName} key={index}>
                {data.projectName}
              </option>
            ))} */}
          </select>
        </td>
        <td>
          <select
            className="left-table-td"
            onChange={handlechange}
            name="jobName"
            data-row={row}
            defaultValue={userTimeSheetData[row - 1]?.jobName}
            disabled={userTimeSheetData[row - 1]?.clientName ? true : false}
            value={userTimeSheetData[row - 1]?.jobName}
          >
            <option value="">Select Job</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </td>
      </tr>
    </>
  );
};

export default LeftRow;
