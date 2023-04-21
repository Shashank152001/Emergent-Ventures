import React from "react";
import { socket } from "../../socket";
import { useState, useEffect } from "react";
import "./Timer.css";
import svg from "./Vector.svg";
import { fetchLocation } from "../../Service/locationService";
import {
  UserCheckIn,
  UserCheckOut,
  fetchCurrentTime
} from "../../Service/TimerService";

// import { cleanup } from '@testing-library/react';

function Timer() {
  const [timer, setTimer] = useState("00:00:00");
  const [isRunning, setIsRunning] = useState(false);
  const [checkInData, setcheckInData] = useState(null);
  const [checkOutData, setcheckOutData] = useState(null);

  useEffect(() => {

    socket.connect();

    return () => {
      socket.disconnect();
    };

  }, []);




  useEffect(() => {

   
   
    socket.on("status", (data) => {
     
      if (data.status === "not-checked-in" || data.status === "checked-out") {
        
        setIsRunning(() => {
          return false;
        });
        setTimer(() => {
          return "00:00:00";
        });
      } else if (data.status === "checked-in") {
       
        setIsRunning(() => {
          return true;
        });
        setTimer(() => {
          return data.timeDifference;
        });
      }
    });


    return () => {
      socket.off("status");
      socket.off("checkin");
      socket.off("checkout");
    };

  }, []);

  const FetchData = async () => {
    const fetchedDate = new Date().toISOString().split("T")[0];
    const fetchedTime = fetchCurrentTime();
    const city = await fetchLocation();

    setcheckInData({
      checkInTime: fetchedTime,
      checkInDate: fetchedDate,
      checkInLocation: city,
    });
    
  };

  const FetchOutData = async () => {
    const fetchedDate = new Date().toISOString().split("T")[0];
    const fetchedTime = fetchCurrentTime();
    const city = await fetchLocation();
    const timeDifference = timer;

    setcheckOutData({
      checkOutTime: fetchedTime,
      checkOutDate: fetchedDate,
      checkOutLocation: city,
      timeDifference: timeDifference,
    });

    
  };

  // for checkin
  useEffect(() => {
    if (checkInData) {
     
      UserCheckIn(checkInData)
        .then((data) => {
         
          setIsRunning(() => {
            return true;
          });
          socket.emit("checkin");
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return () => {
      setcheckOutData(null);
    };
   
  }, [checkInData]);


  // for checkout
  useEffect(() => {
    if (checkOutData) {
      UserCheckOut(checkOutData)
        .then((data) => {
         
          setIsRunning(() => {
            return false;
          });
          socket.emit("checkout");
          setTimer("00:00:00");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return () => {
      setcheckInData(null);
    };
  }, [checkOutData]);

  const startClock = () => {
    
    if (socket.connected) {
      FetchData();
    } else {
      socket.connect();
      FetchData();
    }

  };

  const stopClock = () => {
    if (socket.connected) {
      FetchOutData();
    }

  };

  const reset = () => {
    console.log("reset");
  };
  // console.log(timer);
  let [h, m, s] = timer.split(":");

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
                <span className="input">{h}</span>
                <p className="inputcolon"> : </p>
                <span className="input">{m}</span>
                <p className="inputcolon"> : </p>
                <span className="input">{s}</span>
              </div>
              <div className="my-3 stopwatch-buttons">
                {isRunning ? (
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
                ) : (
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
}

export default Timer;
