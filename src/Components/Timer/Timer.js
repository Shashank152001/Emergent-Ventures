import React from "react";
import { useState, useEffect } from "react";
import "./Timer.css";
import svg from "./Vector.svg";
import { fetchLocation } from "../../Service/locationService";
import {UserCheckIn,UserCheckOut} from '../../Service/TimerService';


const Timer = () => {
  const [time, setTime] = useState(
    JSON.parse(localStorage.getItem("time")) === 0
      ? 0
      : JSON.parse(localStorage.getItem("time"))
  );
  const [isRunning, setIsRunning] = useState(
    JSON.parse(localStorage.getItem("Running")) || false
  );
  const [checkedIn, setcheckedIn] = useState(false);
  const [checkedOut, setcheckedOut] = useState(false);
  const [formData, setFormData] = useState(null);
  const [formDataOut, setFormDataOut] = useState(null);


  const FetchData = async () => {
    const fetchedDate = new Date().toLocaleDateString();
    const fetchedTime = new Date().toLocaleTimeString();
    const city = await fetchLocation();
    await setFormData({
      checkInTime: fetchedTime,
      checkInDate: fetchedDate,
      checkInLocation: city,
    });
    setcheckedIn(true);
  };


  const FetchOutData = async () => {

    // const city = await fetchLocation();
    const fetchedDate = new Date().toLocaleDateString();
    const fetchedTime = new Date().toLocaleTimeString();

    await setFormDataOut({
      checkOutTime: fetchedTime,
      checkOutDate: fetchedDate
    });

    setcheckedOut(true);
  };


  

  // for checkin
  useEffect(() => {
     
    if (formData && checkedIn) {
      UserCheckIn(formData)
      .then((data)=>{
        console.log(data);
        setIsRunning(!isRunning);
      })
      .catch((err)=>{
        console.log(err);
      });
    }

  }, [formData, checkedIn]);

  // for checkout
  useEffect(() => {
    
    if (formDataOut && checkedOut) {

        UserCheckOut(formDataOut)
        .then((data) => {
          console.log(data);
          setIsRunning(!isRunning);
        })
        .catch((err) => {
          console.log(err);
        });

    }
    return () => {
      setcheckedIn(false)
    };
  }, [formDataOut, checkedOut]);



  // for timer
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
      localStorage.setItem("time", JSON.stringify(time));
      localStorage.setItem("Running", JSON.stringify(isRunning));
    } else {
      localStorage.removeItem('time');
      localStorage.removeItem('Running');
    }

    return () => clearInterval(intervalId);

  }, [isRunning, time]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  const startClock = () => {
    // setIsRunning(!isRunning);
    FetchData();
  };

  const stopClock = () => {
    // setIsRunning(!isRunning);
    FetchOutData();
  };

  const reset = () => {
    setTime(0);
    localStorage.removeItem("time");
    localStorage.removeItem("Running");
  };

  return (
    <>
      <div id="timer" className="">
        <div className="timer-container position-relative">
          <div className="row ">
            <div className="col-md-8">
              <h2
                className=""
                style={{ paddingTop: "0.8rem", paddingBottom: "1rem" }}
              >
                Welcome Back!
              </h2>
              <p className="text-secondary" style={{ fontWeight: "bold" }}>
                Your today's timer
              </p>
              <div className="timer d-flex ">
                <span className="input">
                  {hours.toString().padStart(2, "0")}
                </span>
                <p className="inputcolon"> : </p>
                <span className="input">
                  {minutes.toString().padStart(2, "0")}
                </span>
                <p className="inputcolon"> : </p>
                <span className="input">
                  {seconds.toString().padStart(2, "0")}
                </span>
              </div>
              <div className="my-3 stopwatch-buttons">
                {isRunning ? (
                  <button
                    className="btn  text-light"
                    onClick={stopClock}
                    style={{
                      backgroundColor:"red",
                      width: "140px",
                      height: "36px",
                      padding: "0",
                    }}
                  >
                  Checkout
                  </button>
                ) : (
                  <button
                    className="btn  text-light"
                    onClick={startClock}
                    style={{
                      backgroundColor:"green",
                      width: "140px",
                      height: "36px",
                      padding: "0",
                    }}
                  >
                   CheckIn
                  </button>
                )}

                <button
                  className="btn btn-primary m-2"
                  onClick={reset}
                  style={{ width: "140px", height: "36px", padding: "0" }}
                >
                  Break
                </button>
              </div>
            </div>
            <div
              className="col-md-4"
              style={{
                position: "relative",
                top: "28px",
                right: "-11px",
              }}
            >
              <img
                src={svg}
                alt="vector"
                style={{
                  mixBlendMode: "color-burn",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
