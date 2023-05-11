import React,{useEffect,useState,useRef} from "react";
import "./Timesheet.css";
import {getTimeSheet} from "../../Service/TimesheetService";

const RightRow = ({ row,handlechange,date,week,start,end}) => {
  
  const[userTimeSheetData,setuserTimeSheetData] = useState([]);
  const BillableRef = useRef('');
 
  useEffect(() => {
    getTimeSheet(week)
      .then((data) => {
        
        setuserTimeSheetData(data);
      })
      .catch((e) => {
        // console.log(e.message);
        setuserTimeSheetData([]);
        BillableRef.current.value  = '';
      });

  }, [start,end]);

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
            defaultValue={userTimeSheetData[row-1]?.workItem || ''}
            
          />
        </td>
        <td>
          <input
            type="text"
            className="right-table-td"
            onChange={handlechange}
            name="description"
            data-row = {row}
            defaultValue={userTimeSheetData[row-1]?.description || ''}
          />
        </td>
        <td>
          <select
            className="right-table-td"
            onChange={handlechange}
            name="billableStatus"
            data-row = {row}
            defaultValue={userTimeSheetData[row-1]?.billableStatus }
            value={userTimeSheetData[row-1]?.billableStatus  }
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
              className={index === 0 || index===6 ? 'date-td date-holiday' :'date-td'}
              placeholder="00:00"
              onChange={handlechange}
              name="totalTime"
              defaultValue={userTimeSheetData[row-1]?.date === day ? userTimeSheetData[row-1]?.totalTime:'' }
              // value={userTimeSheetData[row-1]?.date === day ? userTimeSheetData[row-1]?.totalTime:'' }
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
