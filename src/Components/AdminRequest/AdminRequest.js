import React,{ useState, useEffect} from "react";
import { startOfMonth, endOfMonth } from "date-fns";
import NoRecord from "../ProjectTable/norecord";
import { getRequestData } from "../../Service/adminServices/requestService";
import "./AdminRequest.css";
import { Pagination } from "@mui/material";

const AdminRequest = () => {


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
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 8;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = requestData && requestData.slice(firstIndex, lastIndex);
  



  const handleChange = (event) => {
    const { value, name } = event.target;
    if (name === "startdate") {
      setStartDate(value);
    } else {
      setEndDate(value);
    }
  };

  useEffect(() => {
    getRequestData(startDate, endDate)
      .then((data) => {
        setRequestData(data);
      })
      .catch((e) => {
        setRequestData(null);
      });
  }, [startDate, endDate]);

  return (
    <div className="requests-div">
      <div className="requests-heading">Requests</div>
      <div className="requests-range-input-div">
        <h6 className="requests-range-input-heading">Select Range</h6>
        <input
          className="requests-range-input"
          type="date"
          name="startdate"
          onChange={handleChange}
          value={startDate}
        />
        <input
          className="requests-range-input"
          type="date"
          name="enddate"
          onChange={handleChange}
          value={endDate}
        />
      </div>
      <div className="admin-requests-div">
        <table className="admin-requests-table">
          <thead>
            <tr className="admin-requests-table-row">
              <td className="table-heading">Sr.No</td>
              <td className="table-heading">Employee</td>
              <td className="table-heading center-data">Request Type</td>
              <td className="table-heading center-data">Leave Type</td>
              <td className="table-heading center-data">Start Date</td>
              <td className="table-heading center-data">End Date</td>
              <td className="table-heading center-data">Status</td>
            </tr>
          </thead>
          <tbody>
            {records ? (
              records.map((item, index) => (
                <tr key={index} className="admin-requests-table-row">
                  <td className="table-data-text">{index + 1}</td>
                  <td className="table-data-text">
                    <img
                      className="employee-profile-image"
                      src={item?.profileImage}
                      alt="employee"
                    />
                    <span className="span-margin"></span>
                    {item?.hrmid}
                    <span className="span-margin"></span>
                    {item?.name}
                  </td>
                  <td className="table-data-text center-data">
                    {item?.request}
                  </td>
                  <td className="table-data-text center-data">
                    {item?.leaveType}
                  </td>
                  <td className="table-data-text center-data">
                    {item?.startDate}
                  </td>
                  <td className="table-data-text center-data">
                    {item?.endDate}
                  </td>
                  {item?.status === "Approved" ? (
                    <td className="table-data-text center-data">
                      <i className="bi bi-check-circle-fill text-success"></i>
                    </td>
                  ) : item?.status === "Rejected" ? (
                    <td className="table-data-text center-data">
                      <i className="bi bi-x-circle-fill text-danger "></i>
                    </td>
                  ) : item?.status === "Cancelled" ? (
                    <td className="table-data-text center-data">
                      <i className="bi bi-x-circle-fill text-danger "></i>
                    </td>
                  ) : (
                    <td className="table-data-text center-data">
                      <i className="bi bi-hourglass text-warning"></i>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <>
                <tr className="admin-requests-table-row">
                  <td colSpan="8">
                    <NoRecord />
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
       
      </div>
	  {records && (
          <div className="  d-flex justify-content-center align-items-center py-3">
            <Pagination
              count={Math.ceil(requestData.length / recordPerPage)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onChange={(event, value) => {
                setCurrentPage(value);
              }}
            />
          </div>
        )}
    </div>
  );
};

export default AdminRequest;
