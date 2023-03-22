import React from "react";
import Skills from "../Skills/Skills";
import Timesheet from "../Timesheet/Timesheet";
import Timer from "../Timer/Timer";
import Leaves from "../Leaves/Leaves";
import Wfh from "../WFH/Wfh";
import { Link } from "react-router-dom";
import Project from "../Project";
// import Sidebar from '../Sidebar/SideBar'
import "./Dashboard.css";
function Dashboard() {
  return (
    <>
      <div id="dashboard">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-2 col-md-3 col-sm-3 col-xs-3"
              style={{ borderRight: "2px solid lightgrey" }}
            >
              <div className="sidebar" style={{ height: "100%", width: "100%" }}>
                <img
                  src="./images/celebal.png"
                  className="img-fluid"
                  style={{ height: "11%", width: "100%" }}
                />
                <ul>
                  <li>
                    <Link className="icon ">
                      <i class="bi bi-bookmark-dash"></i>&nbsp;&nbsp;Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="icon">
                      <i class="bi bi-bar-chart"></i>&nbsp;&nbsp;Skills
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="icon">
                      <i class="bi bi-wallet2"></i>&nbsp;&nbsp;My leave
                    </Link>
                  </li>
                  <li>
                    <Link className="icon">
                      <i class="bi bi-person"></i>&nbsp;&nbsp;Account{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="icon">
                      <i class="bi bi-gear"></i>&nbsp;&nbsp;Setting
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <Sidebar/> */}
            </div>

            <div className="col-lg-10 col-md-9 col-sm-9 col-xs-9">
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-3 ">
                  {/* <i class="bi bi-search p-3"></i> */}
                  <div className=" ">
                    <input
                      type="text"
                      value="search"
                      className="search bi bi-search w-100 mt-2 "
                    />
                  </div>
                </div>
                <div className="bell col-md-3   mt-2">
                  <i className="bi bi-bell p-4"></i>
                  <img className="profile " src="./images/singin.png" />
                  <span className="p-2">Harsh srivastava</span>

                  <button
                    type="button"
                    className=" drop dropdown-toggle"
                  ></button>
                </div>
              </div>
              <hr />
              <div className="row w-100 mt-3">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <Timer />
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12">
                  <Leaves />
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12">
                  <Wfh />
                </div>
              </div>
              <div className="row w-100 mt-3">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <Skills />
                </div>
                <div className="col-lg-6 col-md-62 col-sm-12 col-xs-12">
                  <Timesheet />
                </div>
              </div>

              <div className="row w-100 mt-3">
                <div className="col-md-12">
                  <Project />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
