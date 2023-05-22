
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
import { LoginContext } from "../../Context/LoginContext";
import { CreateTimeSheet, getTimeSheet } from "../../Service/TimesheetService";
import { toast } from "react-toastify";
import Tabs from "../Timesheet/Tabs";

const Timesheetform = () => {
  const navigate = useNavigate();
  const [start, setStart] = useState(
    startOfWeek(new Date(), { weekStartsOn: 0 })
  ); // start of the week
  const [end, setEnd] = useState(addDays(start, 6)); // end of the week
  const [slide, setSlide] = useState([]);
  const [date, setdate] = useState([]);
  const [row, setRow] = useState(6);
  const startDate = start.toLocaleDateString("en-GB").split("/");
  const endDate = end.toLocaleDateString("en-GB").split("/");
  let formattedStartDate =
    startDate[0] + "-" + startDate[1] + "-" + startDate[2];
  let formattedEndDate = endDate[0] + "-" + endDate[1] + "-" + endDate[2];
  let week = `${formattedStartDate} - ${formattedEndDate}`;
  const { profileformdata } = useContext(LoginContext);
  const [UserTimeSheetData, setUserTimeSheetData] = useState([]);
 
  const [totalHours, setTotalHours] = useState({});
  const [TimesheetData, setTimeSheetData] = useState({
    totalTime: "",
    timesheetId: "",
  });



  const [FinalData, setFinalData] = useState([]);
  const [isFilled, setFilled] = useState(false);
  

  const handleBlur = () => {
    
    setFinalData((prevData) => [...prevData, TimesheetData]);
  };

  const handlechange = (event) => {
    const { name, value, dataset } = event.target;

      
    if (dataset.hasOwnProperty("date")) {
      setTimeSheetData((prevData) => ({
        ...UserTimeSheetData[dataset.row - 1],
        ...prevData,
        date: dataset.date,
        submittedHours: (name === 'totalTime' && value.split(':')[1]) ? `${value.split(':')[0].padStart(2,0)}:${value.split(':')[1].padStart(2,0)}` : value,
        userId: profileformdata.userId,
        week: `${formattedStartDate} - ${formattedEndDate}`,
        timesheetName: `Timesheet (${formattedStartDate} - ${formattedEndDate})`,
        [name]: (name === 'totalTime' && value.split(':')[1])  ? `${value.split(':')[0].padStart(2,0)}:${value.split(':')[1].padStart(2,0)}` : value,
        timesheetId: String(dataset.row),
      }));
    } else {
      setTimeSheetData((prevData) => ({
        ...UserTimeSheetData[dataset.row - 1],
        ...prevData,
        [name]: value,
        timesheetId: String(dataset.row),
      }));
    }
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
      const [Date, month, year] = date.toLocaleDateString("en-GB").split("/");

      return `${year}-${month}-${Date}`;
    });
    setdate(dd);
    setSlide(daydate);
  }, [start, end]);


  useEffect(() => {

    getTimeSheet(week)
      .then((data) => {
       
        const totalHour = {
          finalTotalHours:0,
          finalTotalMinutes:0
        };

        data.forEach((item) => {
          const [Hour, Min] = item.totalTime.split(":");

          totalHour.finalTotalHours = Number(Hour) + totalHour.finalTotalHours;
          totalHour.finalTotalMinutes = Number(Min) + totalHour.finalTotalMinutes;

          if (!totalHour[item.date]) {
            totalHour[item.date] = {
              hour: Number(Hour),
              min: Number(Min),
            };
           
          } else {
            totalHour[item.date] = {
              hour: Number(Hour) + totalHour[item.date].hour,
              min: Number(Min) + totalHour[item.date].min,
            };

          }
        });

        

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

        setTotalHours(totalHour);
        
        // setRow(newData.length);
        setUserTimeSheetData(() => [...newData]);
      })
      .catch((e) => {
        setUserTimeSheetData([]);
        setTotalHours({});
        setRow(6);
      });

    return () => {
      setUserTimeSheetData([]);
    };
  }, [start, end]);


  useEffect(() => {
    if (isFilled) {
      CreateTimeSheet(FinalData)
        .then((data) => {
          navigate("/dashboard/getTimesheet");

          toast.success(`${data.message}`, {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return () => {
      setFilled(false);
    };
  }, [isFilled]);

  const handleSubmit = () => {
    if (FinalData.length === 0 && TimesheetData?.clientName) {
      setFilled(true);
    } else if (FinalData.length && TimesheetData?.clientName) {
      setFilled(true);
    }
  };

  const leftRows =  [];
  const rightRows = [];

  for (let i = 1; i <= row; i++) {
    leftRows.push(
      <LeftRow
        row={i}
        key={i}
        handlechange={handlechange}
        week={week}
        start={start}
        end={end}
      />
    );
  }


for (let i = 1; i <= row; i++) {
    rightRows.push(
      <RightRow
        key={i}
        row={i}
        handlechange={handlechange}
        date={date}
        week={week}
        start={start}
        end={end}
        handleBlur={handleBlur}
        slide={slide}
        setTimeSheetData={setTimeSheetData}
      />
    );
  }

 const addRow = () => {
    
    setRow((prevRow) => prevRow + 1);
  };

  const nextweek = () => {
    setStart(addDays(start, 7));
    setEnd(addDays(end, 7));
  };

  const prevWeek = () => {
    setStart(subDays(start, 7));
    setEnd(subDays(end, 7));
  };


  return (
    <div className="view-timesheet-container-div">
      <div className="tabs-div">
        <Tabs />
      </div>
      <div className="timesheet-content-div">
        <span className="timesheet-content-title">Add Timesheet</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
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
                    <th className=""></th>
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
                    
                    
                    {date.map((day, index) => (
                      <td key={index} className="date-td-span-col">
                        <span>
                          {totalHours[day]?.hour
                            ? (String(totalHours[day]?.hour +
                              parseInt(totalHours[day]?.min / 60))).padStart(2,0)
                            : "00"}
                          :
                          {totalHours[day]?.min
                            ? (String(totalHours[day]?.min % 60)).padStart(2,0)
                            : "00"}
                        </span>
                      </td>
                    ))}

                    <td className="date-td-span-col">
                      
                      <span>
                          {totalHours?.finalTotalHours
                            ? (String(totalHours?.finalTotalHours +
                              parseInt(totalHours?.finalTotalMinutes / 60))).padStart(2,0)
                            : "00"}
                          :
                          {totalHours?.finalTotalMinutes 
                            ? String(totalHours?.finalTotalMinutes  % 60).padStart(2,0)
                            : "00"}
                        </span>
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
          <div style={{ display: "flex", gap: "2rem" }}>
            <button
              onClick={handleSubmit}
              className="bg-success btn"
              style={{
                textAlign: "center",
                width: "200px",
                height: "40px",
                color: "#fff",
                outline: "none",
                border: "none",
                marginLeft: "1rem",
              }}
            >
              Save
            </button>
            <button
              onClick={() => setRow(1)}
              className="btn"
              style={{
                textAlign: "center",
                width: "200px",
                height: "40px",
                color: "#fff",
                outline: "none",
                border: "none",
                backgroundColor: "#283055",
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timesheetform;