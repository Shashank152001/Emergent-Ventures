import React, { useEffect, useState, useRef } from "react";
import "./Timesheet.css";
import {
  getTimeSheet,
  getClientAndProject,
} from "../../Service/TimesheetService";

const LeftRow = ({ row, handlechange, week, start, end }) => {
  const [userTimeSheetData, setuserTimeSheetData] = useState([]);
  const [optionData, setOptionData] = useState([]);

  const ClientRef = useRef("");
  const projectRef = useRef("");
  const jobRef = useRef("");

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
        const newData = data.reduce((acc, item) => {
          const existingItem = acc.find((x) => {
            if (
              x.workItem === item.workItem &&
              x.clientName === item.clientName &&
              x.projectName === item.projectName &&
              x.jobName === item.jobName &&
              x.billableStatus === item.billableStatus &&
              x.timesheetId === item.timesheetId
            ) {
              return true;
            }

            return false;
          });
          if (existingItem) {
            existingItem.dates = {
              ...existingItem.dates,
              [item.date]: item.totalTime,
            };
          } else {
            acc.push({
              ...item,
              dates: { ...item.dates, [item.date]: item.totalTime },
            });
          }
          return acc;
        }, []);

        setuserTimeSheetData(() => [...newData]);
      })
      .catch((e) => {
        setuserTimeSheetData([]);
        ClientRef.current.value = "";
        projectRef.current.value = "";
        jobRef.current.value = "";
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
            ref={ClientRef}
          >
            <option value="">Select Client</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Google">Google</option>
            {optionData.map((data, index) => (
              <option value={data.clientName} key={index}>
                {data.clientName}
              </option>
            ))}
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
            ref={projectRef}
          >
            <option value="">Select Project</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Google">Google</option>
            {optionData.map((data, index) => (
              <option value={data.projectName} key={index}>
                {data.projectName}
              </option>
            ))}
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
            ref={jobRef}
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
