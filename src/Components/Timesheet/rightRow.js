import React from "react";
import "./Timesheet.css";


const RightRow = ({ handlechange, date,totalHours }) => {
  return (
    <tbody>
      <tr>
        <td>
          <input
            type="text"
            className="right-table-td"
            onChange={handlechange}
            name="workItem"
          />
        </td>
        <td>
          <input
            type="text"
            className="right-table-td"
            onChange={handlechange}
            name="description"
          />
        </td>
        <td>
          <select
            className="right-table-td"
            onChange={handlechange}
            name="billableStatus"
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
              className={index === 0 || index===6 ? 'date-td date-holiday' :'date-td'}
              placeholder="00:00"
              onChange={handlechange}
              name="totalTime"
			        data-date ={day}
            />
          </td>
        ))}
        <td className="date-td-span" style={{ paddingBottom: "1.15rem" }}>
          {/* totalTime */}
          {/* <span>{totalHours}</span> */}
          <span>00:00</span>
        </td>
      </tr>
    </tbody>
  );
};

export default RightRow;
