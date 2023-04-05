import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Leaves.css";

const Leaves = () => {
  return (
    <>
      <div id="leaves" className="">
        <div className="leaves-container">
          <div className="row h-100" style={{ borderRadius: "25px" }}>
            <div className="col-md-12 " style={{padding:'0.4rem'}}>
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
              <div className="d-flex" style={{gap:'12px'}}>
                <div style={{ width: 40, height: 40 }}>
                  <CircularProgressbar value={2} styles={{path:{stroke:'#ff6e6e'}}}  text={`${2}`} maxValue={3}/>
                </div>
                <div>
                  <span className="" style={{ fontSize: "10px" }}>
                    Casual Leave Intern
                    <p className=" text-secondary" style={{ fontSize: "10px" }}>
                      Available 3 days
                    </p>
                  </span>
                </div>
              </div>
            
            <div className="col-md-12 ">
              <div className="d-flex" style={{gap:'12px'}}>
              <div style={{ width: 40, height: 40 }}>
                  <CircularProgressbar value={1} styles={{path:{stroke:'#1FC3B7'}}}  text={`${1}`} maxValue={3}/>
                </div>
                <div>
                  <span className="" style={{ fontSize: "10px" }}>
                    Leave Without pay
                    <p className=" text-secondary" style={{ fontSize: "10px" }}>
                      Available 3 days
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="d-flex" style={{gap:'12px'}}>
              <div style={{ width: 40, height:40 }}>
                  <CircularProgressbar value={2} styles={{path:{stroke:'#8584e8'}}}  text={`${2}`} maxValue={3}/>
                </div>

                <div>
                  <span className="" style={{ fontSize: "10px" }}>
                    Restricted Holidays
                    <p className="text-secondary" style={{ fontSize: "10px" }}>
                      Available 3 days
                    </p>
                  </span>
                </div>
              </div>
              <button className="btn btn-primary mb-2 mt-2"
              style={{
                padding:'0.2rem 2.1rem'
              }}>Apply Leave</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaves;
