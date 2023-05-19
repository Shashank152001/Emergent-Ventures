import React, { useEffect, useState, useRef } from "react";
import "./Timesheet.css";
import { getTimeSheet } from "../../Service/TimesheetService";

const RightRow = ({
  row,
  handlechange,
  date,
  week,
  start,
  end,
  handleBlur,
}) => {
  const [userTimeSheetData, setuserTimeSheetData] = useState([]);
  const BillableRef = useRef("");

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

          const [hour, minute] = item.totalTime.split(":");
          if (existingItem) {
            existingItem.dates = {
              ...existingItem.dates,
              [item.date]: item.totalTime,
            };
            existingItem.totalHour = existingItem.totalHour + Number(hour);
            existingItem.totalMinute =
              existingItem.totalMinute + Number(minute);
          } else {
            acc.push({
              ...item,
              dates: { ...item.dates, [item.date]: item.totalTime },
              totalHour: Number(hour),
              totalMinute: Number(minute),
            });
          }
          return acc;
        }, []);

        setuserTimeSheetData(() => [...newData]);
      })
      .catch((e) => {
        setuserTimeSheetData([]);
        BillableRef.current.value = "";
      });
  }, [start, end]);

  return (
    <tbody>
      <tr>
        <td>
          <input
            type="text"
            className="right-table-td"
            onChange={handlechange}
            name="workItem"
            data-row={row}
            defaultValue={userTimeSheetData[row - 1]?.workItem || ""}
            disabled={userTimeSheetData[row - 1]?.workItem ? true : false}
          />
        </td>
        <td className="d-none">
          <input
            type="text"
            className="right-table-td"
            onChange={handlechange}
            name="description"
            data-row={row}
            defaultValue={userTimeSheetData[row - 1]?.description || ""}
            disabled={userTimeSheetData[row - 1]?.description ? true : false}
          />
        </td>
        <td>
          <select
            className="right-table-td"
            onChange={handlechange}
            name="billableStatus"
            data-row={row}
            defaultValue={userTimeSheetData[row - 1]?.billableStatus}
            disabled={userTimeSheetData[row - 1]?.billableStatus ? true : false}
            value={userTimeSheetData[row - 1]?.billableStatus}
            ref={BillableRef}
          >
            <option value="">Select status</option>
            <option value="Billable">Billable</option>
            <option value="Non-Billable">Non-Billable</option>
          </select>
        </td>

        {date.map((day, index) => (
          <td key={index}>
            <input
              type="text"
              className={
                index === 0 || index === 6 ? "date-td date-holiday" : "date-td"
              }
              placeholder="00:00"
              onChange={handlechange}
              onBlur={handleBlur}
              name="totalTime"
              defaultValue={
                userTimeSheetData.length > 0
                  ? userTimeSheetData[row - 1]?.dates[day]
                  : ""
              }
              disabled={
                userTimeSheetData.length > 0 &&
                userTimeSheetData[row - 1]?.dates[day]
                  ? true
                  : false
              }
              data-date={day}
              data-row={row}
            />
          </td>
        ))}

        <td className="date-td-span-row">
          <span>
            {userTimeSheetData[row - 1]?.totalHour
              ? String(
                  userTimeSheetData[row - 1]?.totalHour +
                    parseInt(userTimeSheetData[row - 1]?.totalMinute / 60)
                ).padStart(2, 0)
              : "00"}
            :
            {userTimeSheetData[row - 1]?.totalMinute
              ? String(userTimeSheetData[row - 1]?.totalMinute % 60).padStart(
                  2,
                  0
                )
              : "00"}
          </span>
        </td>
      </tr>
    </tbody>
  );
};

export default RightRow;
