import React, {
  useEffect,
  useState,
  useContext,
  useCallback,
  useRef,
} from "react";
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
  const [row, setRow] = useState(1);
  const startDate = start.toLocaleDateString("en-GB").split("/");
  const endDate = end.toLocaleDateString("en-GB").split("/");
  let formattedStartDate =
    startDate[0] + "-" + startDate[1] + "-" + startDate[2];
  let formattedEndDate = endDate[0] + "-" + endDate[1] + "-" + endDate[2];
  let week = `${formattedStartDate} - ${formattedEndDate}`;
  const { profileformdata } = useContext(LoginContext);
  const [isFilled, setFilled] = useState(false);
  const [totalHours, setTotalHours] = useState({});
  const trackRow = useRef(1);
  const dateTrack = useRef([]);
  const [demoTimeSheetData, setdemoTimeSheetData] = useState([]);
  const [demoFinalData, setDemoFinalData] = useState([]);
  const templatedata = [
    {
      clientName: "",
      projectName: "",
      jobName: "",
      workItem: "",
      description: "",
      timesheetName: `Timesheet (${formattedStartDate} - ${formattedEndDate})`,
      week: `${formattedStartDate} - ${formattedEndDate}`,
      totalTime: "",
      timesheetId: trackRow.current,
      date: "",
      submittedHours: "",
      userId: profileformdata?.userId,
    },
    {
      clientName: "",
      projectName: "",
      jobName: "",
      workItem: "",
      description: "",
      timesheetName: `Timesheet (${formattedStartDate} - ${formattedEndDate})`,
      week: `${formattedStartDate} - ${formattedEndDate}`,
      totalTime: "",
      timesheetId: trackRow.current,
      date: "",
      submittedHours: "",
      userId: profileformdata?.userId,
    },
    {
      clientName: "",
      projectName: "",
      jobName: "",
      workItem: "",
      description: "",
      timesheetName: `Timesheet (${formattedStartDate} - ${formattedEndDate})`,
      week: `${formattedStartDate} - ${formattedEndDate}`,
      totalTime: "",
      timesheetId: trackRow.current,
      date: "",
      submittedHours: "",
      userId: profileformdata?.userId,
    },
    {
      clientName: "",
      projectName: "",
      jobName: "",
      workItem: "",
      description: "",
      timesheetName: `Timesheet (${formattedStartDate} - ${formattedEndDate})`,
      week: `${formattedStartDate} - ${formattedEndDate}`,
      totalTime: "",
      timesheetId: trackRow.current,
      date: "",
      submittedHours: "",
      userId: profileformdata?.userId,
    },
    {
      clientName: "",
      projectName: "",
      jobName: "",
      workItem: "",
      description: "",
      timesheetName: `Timesheet (${formattedStartDate} - ${formattedEndDate})`,
      week: `${formattedStartDate} - ${formattedEndDate}`,
      totalTime: "",
      timesheetId: trackRow.current,
      date: "",
      submittedHours: "",
      userId: profileformdata?.userId,
    },
    {
      clientName: "",
      projectName: "",
      jobName: "",
      workItem: "",
      description: "",
      timesheetName: `Timesheet (${formattedStartDate} - ${formattedEndDate})`,
      week: `${formattedStartDate} - ${formattedEndDate}`,
      totalTime: "",
      timesheetId: trackRow.current,
      date: "",
      submittedHours: "",
      userId: profileformdata?.userId,
    },
    {
      clientName: "",
      projectName: "",
      jobName: "",
      workItem: "",
      description: "",
      timesheetName: `Timesheet (${formattedStartDate} - ${formattedEndDate})`,
      week: `${formattedStartDate} - ${formattedEndDate}`,
      totalTime: "",
      timesheetId: trackRow.current,
      date: "",
      submittedHours: "",
      userId: profileformdata?.userId,
    },
  ];


  const handlechange = (event) => {
    const { name, value, dataset } = event.target;

    const mydata = demoFinalData;

    const currentData = mydata[dataset.row - 1];

    for (let i = 0; i < currentData.length; i++) {
      if (
        currentData[i]?.date === dataset.date &&
        currentData[i].timesheetId === parseInt(dataset.row)
      ) {
        currentData[i] = {
          ...currentData[i],
          submittedHours:
            name === "totalTime" && value.split(":")[1]
              ? `${value.split(":")[0].padStart(2, 0)}:${value
                  .split(":")[1]
                  .padStart(2, 0)}`
              : value,
          [name]:
            name === "totalTime" && value.split(":")[1]
              ? `${value.split(":")[0].padStart(2, 0)}:${value
                  .split(":")[1]
                  .padStart(2, 0)}`
              : value.trim(),
        };
        break;
      } else {
        if (name !== "totalTime") {
          currentData[i] = {
            ...currentData[i],
            [name]: value.trim(),
            userId: profileformdata.userId,
          };
        }
      }
    }
    mydata[dataset.row - 1] = currentData;
    setDemoFinalData(mydata);
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

    dateTrack.current = dd;
    setdate(dd);
    setSlide(daydate);
  }, [start, end]);

  useEffect(() => {
    if (isFilled) {
      let finalData = [];
      demoFinalData.forEach((item) => {
        item.forEach((ele) => {
          if (ele?.totalTime !== "") {
            finalData.push(ele);
          }
        });
      });

      console.log(finalData);

      if (demoTimeSheetData.length > 0) {
        const lastData = finalData.filter((item) => {
          return !demoTimeSheetData.some((element) => {
            return item.date === element.date && item.timesheetId === parseInt(element.timesheetId);
          });
        });
        finalData = [...lastData];
      }
      console.log(finalData);
      CreateTimeSheet(finalData)
        .then((data) => {
          navigate("/dashboard/getTimesheet");
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return () => {
      setFilled(false);
    };
  }, [isFilled]);

  useEffect(() => {
    getTimeSheet(week)
      .then((data) => {
        setdemoTimeSheetData(data);

        const totalHour = {
          finalTotalHours: 0,
          finalTotalMinutes: 0,
        };

        data.forEach((item) => {
          const [Hour, Min] = item.totalTime.split(":");

          totalHour.finalTotalHours = Number(Hour) + totalHour.finalTotalHours;
          totalHour.finalTotalMinutes =
            Number(Min) + totalHour.finalTotalMinutes;

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

        // demoFinalData
        const totalTimesheet = [];
        for (let i = 1; i <= newData.length; i++) {
          totalTimesheet.push(templatedata);
        }

        totalTimesheet.forEach((item, idx) => {
          const temp = [];
          item.forEach((ele, index) => {
            let obj = {
              ...ele,
              timesheetId: idx + 1,
              date: dateTrack.current[index],
            };
            temp.push(obj);
          });
          totalTimesheet[idx] = temp;
        });

        totalTimesheet.forEach((item) => {
          item.forEach((obj) => {
            data.forEach((tempData) => {
              if (
                parseInt(tempData.timesheetId) === obj.timesheetId &&
                tempData.date === obj.date
              ) {
                obj.clientName = tempData.clientName;
                obj.projectName = tempData.projectName;
                obj.jobName = tempData.jobName;
                obj.workItem = tempData.workItem;
                obj.billableStatus = tempData.billableStatus;
                obj.description = tempData.description;
                obj.totalTime = tempData.totalTime;
                obj.submittedHours = tempData.submittedHours;
                obj.userId = tempData.userId;
              } else {
                obj.clientName = tempData.clientName;
                obj.projectName = tempData.projectName;
                obj.jobName = tempData.jobName;
                obj.workItem = tempData.workItem;
                obj.userId = tempData.userId;
                obj.billableStatus = tempData.billableStatus;
              }
            });
          });
        });

        
        trackRow.current = newData.length;
        setDemoFinalData(() => [...totalTimesheet]);
        setTotalHours(totalHour);
        setRow(newData.length);
        // setUserTimeSheetData(() => [...newData]);
      })
      .catch((err) => {
        const totalHour = {
          finalTotalHours: 0,
          finalTotalMinutes: 0,
        };

        const Mydata = templatedata;
        const temp = Mydata.map((item, index) => {
          return {
            ...item,
            date: dateTrack.current[index],
            userId: profileformdata?.userId,
            timesheetId: 1,
          };
        });

        setDemoFinalData(() => [temp]);
        setTotalHours(totalHour);
        setRow(1);
        trackRow.current = 1;
      });
  }, [start, end]);

  const handleSubmit = () => {
    if (demoFinalData.length) {
      setFilled(true);
    }
  };

  // left and right table row

  const leftRows = [];
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
    rightRows.push(
      <RightRow
        key={i}
        row={i}
        handlechange={handlechange}
        date={date}
        week={week}
        start={start}
        end={end}
        slide={slide}
        demoFinalData={demoFinalData}
        setDemoFinalData={setDemoFinalData}
      />
    );
  }

  // add one more row in the table
  const addRow = () => {
    setRow((prevRow) => prevRow + 1);
    const myData = templatedata;
    myData.forEach((item, index) => {
      myData[index] = {
        ...item,
        timesheetId: trackRow.current + 1,
        date: date[index],
      };
    });

    setDemoFinalData((prevData) => [...prevData, myData]);
    trackRow.current = trackRow.current + 1;
  };


  //nextWeek
  const nextweek = useCallback(() => {
    setStart(addDays(start, 7));
    setEnd(addDays(end, 7));
  }, [start, end]);

  // prevWeek
  const prevWeek = useCallback(() => {
    setStart(subDays(start, 7));
    setEnd(subDays(end, 7));
  }, [start, end]);

  console.log(demoFinalData);

  return (
    <div className="view-timesheet-container-div">
      <div className="tabs-div">
        <Tabs />
      </div>
      <div className="timesheet-content-div" style={{ overflowY: "auto" }}>
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
              style={{ alignSelf: "center", marginRight: "0.6rem" }}
            />
            <span
              style={{
                display: "inline-block",
                width: "13.5rem",
                textAlign: "center",
                padding: "0.1rem",
              }}
            >
              {formattedStartDate} - {formattedEndDate}
            </span>
            <FontAwesomeIcon
              onClick={nextweek}
              icon={faArrowRight}
              style={{ alignSelf: "center", marginLeft: "0.3rem" }}
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

                <tbody>{leftRows}</tbody>
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
                <tbody>{rightRows}</tbody>

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
                            ? String(
                                totalHours[day]?.hour +
                                  parseInt(totalHours[day]?.min / 60)
                              ).padStart(2, 0)
                            : "00"}
                          :
                          {totalHours[day]?.min
                            ? String(totalHours[day]?.min % 60).padStart(2, 0)
                            : "00"}
                        </span>
                      </td>
                    ))}

                    <td className="date-td-span-col">
                      <span>
                        {totalHours?.finalTotalHours
                          ? String(
                              totalHours?.finalTotalHours +
                                parseInt(totalHours?.finalTotalMinutes / 60)
                            ).padStart(2, 0)
                          : "00"}
                        :
                        {totalHours?.finalTotalMinutes
                          ? String(totalHours?.finalTotalMinutes % 60).padStart(
                              2,
                              0
                            )
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
