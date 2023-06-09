import React, { useState, useEffect } from "react";
import myprofile from "../../Assest/myprofile.jpg";
import "./AdminProjectTable.css";
import {
  AiOutlineDown,
  AiOutlineSwap,
  AiFillDelete,
  AiFillEdit,
} from "react-icons/ai";
import { IoCalendarNumberOutline } from "react-icons/io5";
import NoRecord from "./norecord";
import { getProjects } from "../../Service/adminServices/projectService";
import { BiPlus } from "react-icons/bi";
import AddProject from "../ProjectTable/addProject";
import EditProject from "../ProjectTable/editProject";

function AdminProjectTable() {
  const [projects, setProject] = useState(null);
  const [isAddOpen, setAddOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProject(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      {isAddOpen && <AddProject setAddOpen={setAddOpen} />}
      {isEditOpen && <EditProject setEditOpen={setEditOpen} />}

      <section className="project-container">
        <div className="project-heading">
          <div>
            <h1 style={{ fontSize: "1.5rem" }}>My Projects</h1>
          </div>
          <div style={{ display: "flex" }}>
            <button
              className=""
              style={{
                borderRadius: "0.4rem",
                backgroundColor: "#2563EB",
                border: "none",
                outline: "none",
                padding: "0.4rem",
                color: "#fff",
              }}
              onClick={() =>{ setAddOpen(!isAddOpen)
                document.getElementById('scroll-hidden').style.overflow = 'hidden';}}
            >
              AddProject
              <BiPlus />
            </button>
          </div>
        </div>
        <div className="project-content">
          <table>
            <thead>
              <tr id="table-heading">
                <th>Project Name</th>
                <th>Assigned on</th>
                <th>To be submitted on</th>
                <th>Status</th>
                <th>Team</th>
                <th>Team Head</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects ? (
                projects.map((ele, index) => (
                  <tr key={index}>
                    <td>{ele.projectName}</td>
                    <td>
                      <span className="project-date">
                        <IoCalendarNumberOutline className="calender" />
                        {ele.assignedOn}
                      </span>
                    </td>
                    <td>
                      <span className="project-date">
                        <IoCalendarNumberOutline className="calender" />
                        {ele.completeBy}
                      </span>
                    </td>
                    <td>
                      <span className="dot"></span>
                      <span className="status">{ele.status}</span>
                    </td>
                    <td className="team-members" id="team">
                      <p className="image-container">
                        <img src={myprofile} alt="team-member" />
                      </p>
                      <p className="image-container img-2">
                        <img src={myprofile} alt="team-member" />
                      </p>
                      <p className="image-container img-3">
                        <span className="count-member">2+</span>
                      </p>
                    </td>
                    <td>
                      <div className="lead">
                        <p className="image-container " id="team-lead">
                          <img src={myprofile} alt="team-member" />
                        </p>
                        <span
                          className="lead-name"
                          style={{ fontSize: "0.8rem" }}
                        >
                          {ele.teamHead}
                        </span>
                      </div>
                    </td>
                    <td>
                      <button
                        onClick={() =>{ setEditOpen(!isEditOpen)
                          document.getElementById('scroll-hidden').style.overflow = 'hidden';}}
                        style={{
                          border: "none",
                          outline: "none",
                          backgroundColor: "transparent",
                          marginLeft: "0.7rem",
                        }}
                      >
                        <AiFillEdit />
                      </button>

                      <button
                        style={{
                          border: "none",
                          outline: "none",
                          backgroundColor: "transparent",
                          marginLeft: "0.7rem",
                        }}
                      >
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">
                    <NoRecord />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default AdminProjectTable;
