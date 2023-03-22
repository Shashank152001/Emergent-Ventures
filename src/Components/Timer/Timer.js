import React from 'react'
import {useState,useEffect} from 'react'
import './Timer.css'

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);
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
  };
  return (
    <>
      <div id='timer' className=''>
        <div className="timer-container">
          <div className="row ">
            <div className=" col-md-12 ">
              <h2 className="" style={{paddingTop:'0.8rem',paddingBottom:'1rem'}}> Welcome Back! </h2>
              <p className='text-secondary' style={{fontWeight:'bold'}}> Your today's timer</p>
              <div className='timer d-flex '>
                <span  className='input' >{hours.toString().padStart(2, "0")}</span>
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