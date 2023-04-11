import React from "react";
import { useState, useEffect } from "react";
import "./Timer.css";
import svg from "./Vector.svg";
import { fetchLocation } from "../../Service/locationService";
import {UserCheckIn,UserCheckOut} from '../../Service/TimerService';




function Timer() {

  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(
    JSON.parse(localStorage.getItem("Running")) || false
  );


  const [h,m,s] = isRunning ? JSON.parse(localStorage.getItem('checkInTime')).split(':'):[0,0,0];

  const [checkedIn, setcheckedIn] = useState(false);
  const [checkedOut, setcheckedOut] = useState(false);
  const [formData, setFormData] = useState(null);
  const [formDataOut, setFormDataOut] = useState(null);



  const FetchData = async () => {
    const fetchedDate = new Date().toISOString().split('T')[0];
    const fetchedTime = new Date().toLocaleTimeString();
    const city = await fetchLocation();

    await setFormData({
      checkInTime: fetchedTime,
      checkInDate: fetchedDate,
      checkInLocation: city
    });
    setcheckedIn(true);

  };


  const FetchOutData = async () => {

    // const city = await fetchLocation();
    const fetchedDate = new Date().toISOString().split('T')[0];
    const fetchedTime = new Date().toLocaleTimeString();
    const city = await fetchLocation();

    await setFormDataOut({
      checkOutTime: fetchedTime,
      checkOutDate: fetchedDate,
      checkOutLocation: city
    });

    setcheckedOut(true);

  };



  // for checkin
  useEffect(() => {

    if (formData && checkedIn) {

      UserCheckIn(formData)
        .then((data) => {
          console.log(data);
          setIsRunning(!isRunning);
          localStorage.setItem("Running", JSON.stringify(true));
        })
        .catch((err) => {
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
          setIsRunning(false);
          localStorage.removeItem("Running", JSON.stringify(false));
        })
        .catch((err) => {
          console.log(err);
        });

    }
    return () => {
      setcheckedIn(false);
    };
  }, [formDataOut, checkedOut]);



  // for timer
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    } else {
      localStorage.removeItem('Running');
    }

    return () => clearInterval(intervalId);

  }, [isRunning, time]);



  const startClock = () => {
    FetchData();
  };

  const stopClock = () => {
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

                  {isRunning ? Math.abs(new Date().getHours() - h).toString().padStart(2, "0") : '00'}
                </span>
                <p className="inputcolon"> : </p>
                <span className="input">

                  {isRunning ? Math.abs(new Date().getMinutes() - m).toString().padStart(2, "0") : '00'}
                </span>
                <p className="inputcolon"> : </p>
                <span className="input">

                  {isRunning ? Math.abs(new Date().getSeconds()).toString().padStart(2, "0") : '00'}
                </span>
              </div>
              <div className="my-3 stopwatch-buttons">
                {isRunning ?
                  <button
                    className="btn  text-light"
                    onClick={stopClock}
                    style={{
                      backgroundColor: "red",
                      width: "140px",
                      height: "36px",
                      padding: "0",
                    }}
                  >
                    Checkout
                  </button>
                  :
                  <button
                    className="btn  text-light"
                    onClick={startClock}
                    style={{
                      backgroundColor: "green",
                      width: "140px",
                      height: "36px",
                      padding: "0",
                    }}
                  >
                    CheckIn
                  </button>}

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
                }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
