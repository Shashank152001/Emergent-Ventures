import React, { useEffect, useState } from "react";
import {
  addDays,
  eachDayOfInterval,
  format,
  subDays,
  startOfWeek,
} from "date-fns";
import { AiOutlinePlus } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LeftRow from "./leftRow";
import RightRow from "./rightRow";

const Timesheetform = () => {
  const [start, setStart] = useState(
    startOfWeek(new Date(), { weekStartsOn: 0 })
  ); // start of the week
  const [end, setEnd] = useState(addDays(start, 6)); // end of the week
  const [slide, setSlide] = useState([]);
  const [date, setdate] = useState([]);
  const [row, setRow] = useState(1);
  const startDate = start.toLocaleDateString("en-GB").split("/");
  const endDate = end.toLocaleDateString("en-GB").split("/");
  let formattedStartDate =
    startDate[0] + "-" + startDate[1] + "-" + startDate[2];
  let formattedEndDate = endDate[0] + "-" + endDate[1] + "-" + endDate[2];

  const [TimesheetData, setTimeSheetData] = useState({
    timesheetName: `Timesheet (${formattedStartDate} - ${formattedEndDate})`,
    date: "",
    week: `${formattedStartDate} - ${formattedEndDate}`,
	submittedHours:''
  });

  const [FinalData, setFinalData] = useState([]);
  const [totalHours, settotalHours] = useState(0);

  const handlechange = (event) => {
    const { name, value, dataset } = event.target;

    if (dataset.hasOwnProperty("date")) {
      setTimeSheetData((prevData) => ({ ...prevData, date: dataset.date,submittedHours:value,[name]:value }));
    } else {
      setTimeSheetData((prevData) => ({ ...prevData, [name]: value }));
    }
  };


  useEffect(()=>{
	 
	if(FinalData.length){
		console.log(FinalData);
	}

  },[FinalData])


  const handleSubmit = ()=>{
    
	if(FinalData.length === 0 && TimesheetData?.clientName){
		// settotalHours((prevHours)=> prevHours + TimesheetData.totalTime);
		setFinalData((prevData) => [...prevData, TimesheetData]);
     }
	else if(FinalData.length && TimesheetData?.clientName){

		setFinalData((prevData) => [...prevData, TimesheetData]);
		// settotalHours((prevHours)=> prevHours + Number(TimesheetData.totalTime));
	}

	// else{
	// 	console.log(FinalData);
	// 	console.log('hit the server.....');
	// }
	
  }

  const leftRows = [];
  const rightRows = [];

  for (let i = 1; i <= row; i++) {
    leftRows.push(<LeftRow row={i} key={i} handlechange={handlechange} />);
  }
  for (let i = 1; i <= row; i++) {
    rightRows.push(
      <RightRow key={i} handlechange={handlechange} date={date} totalHours={totalHours}/>
    );
  }

//   4:20
// 5:55

// 10:15
  const addRow = () => {
    setRow((prevRow) => prevRow + 1);
	console.log(Number(TimesheetData.totalTime.split(':')[0]))
	// settotalHours((prevHours)=> prevHours + Number(TimesheetData.totalTime));
    setFinalData((prevData) => [...prevData, TimesheetData]);
  };

  useEffect(() => {
    const daydate = eachDayOfInterval({ start: start, end: end }).map(
      (date) => {
        const monthDate = format(date, "LLL dd");
        const weekDay = format(date, "EEE ");
        return { monthDate: monthDate, weekDay: weekDay };
      }
    );

    const dd = eachDayOfInterval({ start: start, end: end }).map((date) => {
      const [year, month, Date] = date
        .toLocaleDateString("en-GB")
        .split("/")
        .reverse();

      return `${year}-${month}-${Date}`;
    });

    setSlide(daydate);
    setdate(dd);
  }, [start, end]);

  const nextweek = () => {
    setStart(addDays(start, 7));
    setEnd(addDays(end, 7));
  };

  const prevWeek = () => {
    setStart(subDays(start, 7));
    setEnd(subDays(end, 7));
  };

  

  return (
    <>
      <div className="container d-flex justify-content-center ">
        <div className="d-flex">
          <FontAwesomeIcon
            onClick={prevWeek}
            icon={faArrowLeft}
            style={{ alignSelf: "center" }}
          />
          <span style={{ marginRight: "5px", marginLeft: "5px" }}>
            {formattedStartDate} - {formattedEndDate}
          </span>
          <FontAwesomeIcon
            onClick={nextweek}
            icon={faArrowRight}
            style={{ alignSelf: "center" }}
          />
        </div>
      </div>
      <div
        className="timesheet-container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="outer-table-div">
          <div className="left-table-div">
            <table>
              <thead>
                <tr>
                  <th className="sr-th">S.No</th>
                  <th className="left-table-th">Client Name</th>
                  <th className="left-table-th">Project Name</th>
                  <th className="left-table-th">Job Name</th>
                </tr>
              </thead>
              {leftRows}
            </table>
          </div>
          <div className="right-table-div">
            <table className="date-table">
              <thead>
                <tr>
                  <th className="right-table-th">Work Item</th>
                  <th className="right-table-th">Description</th>
                  <th className="right-table-th">Billable Status</th>
                  {slide.map((day, index) => (
                    <th className="date-th" key={index}>
                      {day.monthDate}
                      <br />
                      {day.weekDay}
                    </th>
                  ))}
                  <th className="date-th">Total</th>
                </tr>
              </thead>
              {rightRows}
              <tbody>
                <tr>
                  <td>
                    <span className="right-table-td"></span>
                  </td>
                  <td>
                    <span className="right-table-td"></span>
                  </td>
                  <td style={{ textAlign: "left", paddingLeft: "1.3rem" }}>
                    <span>Total</span>
                  </td>
                  <td className="date-td-span">
                    <span>00:00</span>
                  </td>
                  <td className="date-td-span">
                    <span>00:00</span>
                  </td>
                  <td className="date-td-span">
                    <span>00:00</span>
                  </td>
                  <td className="date-td-span">
                    <span>00:00</span>
                  </td>
                  <td className="date-td-span">
                    <span>00:00</span>
                  </td>
                  <td className="date-td-span">
                    <span>00:00</span>
                  </td>
                  <td className="date-td-span">
                    <span>00:00</span>
                  </td>
                  <td className="date-td-span">
                    <span>00:00</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "3rem",
          }}
        >
          <button
            onClick={addRow}
            className="border-0 bg-white"
            style={{ marginLeft: "1rem" }}
          >
            {" "}
            <AiOutlinePlus className="text-primary" />
            <span className="text-primary">Add Row</span>
          </button>
        </div>
		<button onClick={handleSubmit} className="bg-success">save</button>
      </div>
    </>
  );
};

export default Timesheetform;
