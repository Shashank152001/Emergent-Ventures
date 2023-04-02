import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [time, setTime] = useState(JSON.parse(localStorage.getItem("time")) === 0 ? 0 : JSON.parse(localStorage.getItem("time")));
  const [isRunning, setIsRunning] = useState(JSON.parse(localStorage.getItem("Running")) || false);
  const [ischecked, setchecked] = useState(false);
  const [formData, setFormData] = useState(null);

  const URL = "https://ab8d-117-242-153-226.in.ngrok.io/user/check-in";
  let currentcheckin = 0;

  useEffect(() => {
    console.log("checked");

    if (ischecked && formData) {
      console.log(formData);
      fetch(URL, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData)

      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
        setchecked(false);
      }).catch((error) => {
        console.error(error);
        setchecked(false);
      });
    }

  }, [ischecked, formData]);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1;
          localStorage.setItem("time", JSON.stringify(newTime));
          return newTime;
        });
      }, 10);

      fetch("https://ipapi.co/json/")
        .then((response) => response.json())
        .then((data) => {
          const { city: fetchedCity, timezone } = data;
          const fetchedDate = new Date().toLocaleDateString();
          const fetchedTime = new Date().toLocaleTimeString(undefined, {
            timeZone: timezone,
          });

          setFormData({
            checkInTime: fetchedTime,
            checkInDate: fetchedDate,
            location: fetchedCity
          });

          if (currentcheckin === 0) {
            localStorage.setItem('checkInTime', fetchedTime);
            localStorage.setItem('checkInDate', fetchedDate);
            localStorage.setItem('location', fetchedCity);
            currentcheckin = 1;
          } else {
            localStorage.setItem('checkInTime', fetchedTime);
            localStorage.setItem('checkInDate', fetchedDate);
            localStorage.setItem('location', fetchedCity);
          }

        }).catch((error) => {
          console.error(error);
        });
    } else {
      localStorage.removeItem("time");
      localStorage.removeItem("Running");
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  const startAndStop = () => {
    setIsRunning(!isRunning);
    setchecked(true);
  };

  const reset = () => {
    setTime(0);
  };

  return (
    <>
      <div id='timer' className=''>
        <div className="timer-container">
          <div className="row ">
            <div className=" col-md-12 ">
              <h2 className="" style={{ paddingTop: '0.8rem', paddingBottom: '1rem' }}> Welcome Back! </h2>
              <p className='text-secondary' style={{ fontWeight: 'bold' }}> Your today's timer</p>
              <div className='timer d-flex '>
                <span className='input' >{hours.toString().padStart(2, "0")}</span>
                <p className='inputcolon'> : </p>
                <span className='input'>{minutes.toString().padStart(2, "0")}</span>
                <p className='inputcolon'> : </p>
                <span className='input' >{seconds.toString().padStart(2, "0")}</span>

              </div>
              <div className='my-3 stopwatch-buttons'>
                <button className="btn  text-light" onClick={startAndStop} style={{ backgroundColor: isRunning ? "red" : "green" }}>{isRunning ? "Checkout" : "CheckIn"}</button>
                <button className='btn btn-primary m-2' onClick={reset}>Break</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Timer