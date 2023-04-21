import React from "react";
import { socket } from "../../socket";
import { useState, useEffect } from "react";
import "./Timer.css";
import svg from '../../Assest/Vector.svg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchLocation } from "../../Service/locationService";
import {
  UserCheckIn,
  UserCheckOut,
  fetchCurrentTime,
  fetchCurrentCheckinTime,
  getTimeDifference,
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
  }, [isRunning,socket]);




  useEffect(() => {
    // console.log(socket);
   
   
    // console.log(socket.id);
    socket.on("status", (data) => {
      console.log(data);
      if (data.status === "not-checked-in" || data.status === "checked-out") {
        // console.log(data.status);
        setIsRunning(() => {
          return false;
        });
        setTimer(() => {
          return "00:00:00";
        });
      } else if (data.status === "checked-in") {
        // console.log(data);
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

  }, [socket, timer]);

  const FetchData = async () => {
    const fetchedDate = new Date().toISOString().split("T")[0];
    const fetchedTime = fetchCurrentTime();
    const city = await fetchLocation();

    setcheckInData({
      checkInTime: fetchedTime,
      checkInDate: fetchedDate,
      checkInLocation: city,
    });
    // setcheckedIn(true);
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

    // setcheckedOut(true);
  };

  // for checkin
  useEffect(() => {
    if (checkInData) {
      // console.log('Formdata');
      UserCheckIn(checkInData)
        .then((data) => {
          // console.log(data);
          setIsRunning(() => {
            return true;
          });
          socket.emit("checkin");
          toast.info('Checkin Successfull', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // return () => {
    // 	setcheckedOut(false);
    // };
  }, [checkInData]);


  // for checkout
  useEffect(() => {
    if (checkOutData) {
      UserCheckOut(checkOutData)
        .then((data) => {
          // console.log(data);
          setIsRunning(() => {
            return false;
          });
          socket.emit("checkout");
          toast.info('CheckOut Successfull', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
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
    // FetchData();
    if (socket.connected) {
      // socket.emit('checkin');
      FetchData();
    } else {
      socket.connect();
      // socket.emit('checkin');
      FetchData();
    }

    // setIsRunning(true);
    // setTimer(() => {
    // 	return data.timeDifference;
    // });
  };

  const stopClock = () => {
    if (socket.connected) {
      FetchOutData();
      // socket.emit('checkout');
      // // setIsRunning(false);
      // setTimer('00:00:00');
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
