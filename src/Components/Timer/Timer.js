import React from "react";
import { useState, useEffect } from "react";
import "./Timer.css";
import svg from "./Vector.svg";

const Timer = () => {
  const [time, setTime] = useState(
    JSON.parse(
      localStorage.getItem("time") === 0 ? 0 : localStorage.getItem("time")
    )
  );
  const [isRunning, setIsRunning] = useState(
    JSON.parse(
      localStorage.getItem("Running") ? localStorage.getItem("Running") : false
    )
  );

  console.log(`rendering${time}`);
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
      localStorage.setItem("time", JSON.stringify(time));
      localStorage.setItem("Running", JSON.stringify(isRunning));
    } else {
      localStorage.removeItem("time");
      localStorage.removeItem("Running");
    }

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
    localStorage.removeItem("time");
    localStorage.removeItem("Running");
  };
  return (
    <>
      <div id="timer" className="">
        <div className="timer-container">
          <div className="row ">
            <div className="col-md-8">
              <h2
                className=""
                style={{ paddingTop: "0.8rem", paddingBottom: "1rem" }}
              >
                {" "}
                Welcome Back!{" "}
              </h2>
              <p className="text-secondary" style={{ fontWeight: "bold" }}>
                {" "}
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
                <button
                  className="btn  text-light"
                  onClick={startAndStop}
                  style={{ backgroundColor: isRunning ? "red" : "green",
                  width:'140px',height:'36px',padding:'0' }}
                >
                  {isRunning ? "Checkout" : "CheckIn"}
                </button>
                <button
                 className="btn btn-primary m-2"
                  onClick={reset}
                  style={{width:'140px',height:'36px',padding:'0' }}
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
