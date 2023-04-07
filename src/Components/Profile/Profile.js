import React, { useState, useEffect } from "react";
import "./Profile.css";
import Sidebar from "../Dashboard/sidebar";
import Header from "../Dashboard/Header";

function Profile() {
  return (
    <>
      <div className="main-container">
        <div className="wrapper d-flex">
          <Sidebar />
          <div
            className="right-sidebar"
            style={{
              position: "absolute",
              width: "87%",
              height: "100%",
              right: "0",
            }}
          >
            <Header />
          </div>
        </div>
        <div className="container">
          <div className="form-wrapper">
            <div className="formDetail-container">
              <h4 className="personal-text">Personal Details</h4>
              <form>
                <div className="row name-form">
                  <div className="col">
                    <label className="labels">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      style={{ backgroundColor: "#EAEAEA" }}
                    />
                  </div>
                  <div className="col">
                    <label className="labels"> Surname</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      style={{ backgroundColor: "#EAEAEA" }}
                    />
                  </div>
                </div>
                <div className="row name-form">
                  <div className="col">
                    <label className="labels">Departure Date</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="First name"
                      style={{ backgroundColor: "#EAEAEA" }}
                    />
                  </div>
                  <div className="col">
                    <label className="labels">Return Date</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Last name"
                      style={{ backgroundColor: "#EAEAEA" }}
                    />
                  </div>
                </div>
                <div className="row name-form">
                  <div className="col">
                    <label className="labels">name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      style={{ backgroundColor: "#EAEAEA" }}
                    />
                  </div>
                  <div className="col">
                    <label className="labels"> name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      style={{ backgroundColor: "#EAEAEA" }}
                    />
                  </div>
                </div>
                <div className="row name-form">
                  <div className="col">
                    <label className="labels">name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      style={{ backgroundColor: "#EAEAEA" }}
                    />
                  </div>
                  <div className="col">
                    <label className="labels"> name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      style={{ backgroundColor: "#EAEAEA" }}
                    />
                  </div>
                </div>
                <div className="row name-form">
                  <div className="col">
                    <label className="labels">name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      style={{ backgroundColor: "#EAEAEA" }}
                    />
                  </div>
                  <div class="col">
                    <label className="labels"> name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      style={{ backgroundColor: "#EAEAEA" }}
                    />
                  </div>
                </div>
                <div className="row name-form">
                  <div className="col">
                    <label className="labels">name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      style={{ backgroundColor: "#EAEAEA" }}
                    />
                  </div>
                  <div className="col">
                    <label className="labels"> name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      style={{ backgroundColor: "#EAEAEA" }}
                    />
                  </div>
                </div>
                <div className="row name-form">
                  <div className="col">
                    <label className="labels">name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      style={{ backgroundColor: "#EAEAEA" }}
                    />
                  </div>
                  <div className="col">
                    <label className="labels"> name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      style={{ backgroundColor: "#EAEAEA" }}
                    />
                  </div>
                </div>
                <div className="name-form">
                  <button
                    className="btn btn-primary"
                    style={{ width: "15%", height: "40px" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
