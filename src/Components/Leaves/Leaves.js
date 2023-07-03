import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import { availableRequest } from "../../Service/LeavesService";
import "./Leaves.css";

const leaveColorScheme = {
	"Casual Leave" :'#ff6e6e',
	"Leave without pay":'#1FC3B7',
	"Restricted Holiday":'#8584e8',
	"Work From Home":'#1FC3B7'
}

const Leaves = () => {
	
  const [availableLeaveData, setAvailableLeaveData] = useState([]);

  useEffect(() => {
    availableRequest()
      .then((data) => {

        setAvailableLeaveData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div id="leaves" className="">
        <div className="leaves-container">
          <div className="row h-100" style={{ borderRadius: "25px" }}>
            <div className="col-md-12 " style={{ padding: "0.4rem" }}>
              <h6
                className=""
                style={{
                  paddingLeft: "0",
                  fontWeight: "bold",
                }}
              >
                My Leaves{" "}
              </h6>
            </div>
            <div
              className=""
              style={{
                height: "100%",
                maxHeight: "180px",
                overflowY: "auto",
                scrollbarWidth: "none",
              }}
              id="leavesInner"
            >
              {availableLeaveData.map((item, index) => (
                <div className="col-md-12 " key={index}>
                  <div className="d-flex" style={{ gap: "12px" }}>
                    <div style={{ width: 40, height: 40 }}>
                      <CircularProgressbar
                        value={item?.totalLeaves - item?.remainingLeaves || 0}
                        styles={{
                          path: { stroke: leaveColorScheme[item.leaveType] },
                          text: {
                            fontSize: "34px",
                            transform: "translateY(4px)",
                          },
                        }}
                        text={`${
                          item?.totalLeaves - item?.remainingLeaves || 0
                        }`}
                        maxValue={item?.totalLeaves}
                      />
                    </div>

                    <div>
                      <span className="" style={{ fontSize: "14px" }}>
                        {item?.leaveType}
                        <p
                          className="text-secondary"
                          style={{ fontSize: "12px" }}
                        >
                          Available {item?.remainingLeaves || 0} days
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-md-12 ">
              <div className="d-flex" style={{ gap: "12px" }}>
                <button
                  className="btn btn-primary mb-2 mt-2"
                  style={{
                    padding: "0.2rem 2.1rem",
                  }}
                >
                  <Link
                    to="leave"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    Apply Leave
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaves;
