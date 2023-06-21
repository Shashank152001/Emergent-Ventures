import { useState, useEffect } from "react";
import { startOfMonth, endOfMonth } from "date-fns";
// import "./AdminTimesheet.css";
import NoRecord from "../Project/norecord";
import { getTimesheetData } from "../../Service/adminServices/timesheetService";

const AdminTimesheet = () => {
  const [requestData, setRequestData] = useState(null);
  const [startDate, setStartDate] = useState(
    startOfMonth(new Date())
      .toLocaleDateString("en-GB")
      .split("/")
      .reverse()
      .join("-")
  );
  const [endDate, setEndDate] = useState(
    endOfMonth(new Date())
      .toLocaleDateString("en-GB")
      .split("/")
      .reverse()
      .join("-")
  );

  const handleChange = (event) => {
    const { value, name } = event.target;
    if (name === "startdate") {
      setStartDate(value);
    } else {
      setEndDate(value);
    }
  };

  useEffect(() => {
    getTimesheetData(startDate,endDate)
      .then((data) => {
        console.log(data);
        setRequestData(data);
      })
      .catch((e) => {
        setRequestData(null);
      });
  }, [startDate, endDate]);

  return (
    <div className="requests-div">
      <div className="requests-heading">
        TimeSheets
        <input
          type="date"
          name="startdate"
          onChange={handleChange}
          value={startDate}
          style={{ marginLeft: "0.9rem" }}
        />
        <input
          type="date"
          name="enddate"
          onChange={handleChange}
          value={endDate}
          style={{ marginLeft: "0.9rem" }}
        />
      </div>

      <div className="requests" style={{ width: "98%",margin:'auto' }}>
        <table className="table table-hover" style={{ marginTop: "2rem" }}>
          <thead>
            <tr>
              <td>Sr.No</td>
              <td>Employee</td>
              <td>TimeSheet Name</td>
              <td>Submitted Hours</td>
              <td>Approved Hours</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {requestData ? (
              requestData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <span>
                      <img
                        style={{ width: "2rem", height: "2rem" }}
                        src={item?.profileImage}
                        alt="employee"
                      />
                    </span>
                    <span> </span>
                    {item?.hrmid}
                    <span> - </span>
                    {item?.name}
                  </td>
                  <td>{item?.timesheetName}</td>
                  <td>{item?.submittedHours}</td>
                  <td>{item?.approvedHours}</td>
                  {/* <td>{item?.endDate}</td> */}
                  {item?.status === "Approved" ? (
                    <td>
                      <i className="bi bi-check-circle-fill text-success "></i>
                    </td>
                  ) : item?.status === "Rejected" ? (
                    <td>
                      <i className="bi bi-x-circle-fill text-danger "></i>
                    </td>
                  ) : item?.status === "Cancelled" ? (
                    <td>
                      <i className="bi bi-x-circle-fill text-danger "></i>
                    </td>
                  ) : (
                    <td>
                      <i className="bi bi-hourglass text-warning"></i>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <>
                <tr>
                  <td colSpan="8">
                    <NoRecord />
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTimesheet;
