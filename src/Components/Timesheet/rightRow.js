import React from "react";
import "./Timesheet.css";

const RightRow = ({ row,handlechange,date,UserTimeSheetData}) => {

  

  return (
    <tbody>
      <tr>
        <td>
          <input
            type="text"
            className="right-table-td"
            onChange={handlechange}
            name="workItem"
            data-row = {row}
            defaultValue={UserTimeSheetData[row-1]?.workItem || ''}
            disabled={UserTimeSheetData[row-1]?.workItem?true:false}
            
          />
        </td>
        <td>
          <input
            type="text"
            className="right-table-td"
            onChange={handlechange}
            name="description"
            data-row = {row}
            defaultValue={UserTimeSheetData[row-1]?.description || ''}
            
            // value={UserTimeSheetData[row-1]?.description || ''}
          />
        </td>
        <td>
          <select
            className="right-table-td"
            onChange={handlechange}
            name="billableStatus"
            data-row = {row}
            defaultValue={UserTimeSheetData[row-1]?.billableStatus }
            disabled={UserTimeSheetData[row-1]?.billableStatus?true:false}
            // value={UserTimeSheetData[row-1]?.billableStatus}
            
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
              defaultValue={UserTimeSheetData[row-1]?.date === day ? UserTimeSheetData[row-1]?.totalTime:'' }
              // value={UserTimeSheetData[row-1]?.date === day ? UserTimeSheetData[row-1]?.totalTime:'' }
              disabled={UserTimeSheetData[row-1]?.totalTime && UserTimeSheetData[row-1]?.date === day ?true:false}
			        data-date = {day}
              data-row =  {row}
            />
          </td>
        ))}
        <td className="date-td-span" style={{ paddingBottom: "1.15rem" }}>
          <span>00:00</span>
        </td>
      </tr>
    </tbody>
  );
};

export default RightRow;
