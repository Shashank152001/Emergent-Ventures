import React, { useEffect, useState } from "react";

import {
  addDays,
  eachDayOfInterval,
  format,
  subDays,
  startOfWeek
 
} from "date-fns";
import { AiOutlinePlus } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import $ from "jquery";
import Row from './row';
import Tabs from "./Tabs";



const Timesheetform = () => {

  const[formdata,setFormdata]=useState([{
    clientName:'',
    projectName:'',
    jobName:'',
    workItem:'',
    description:'',
  }])
  const [start, setStart] = useState(startOfWeek(new Date(), { weekStartsOn: 0 }));// start of the week
  const [end, setEnd] = useState(addDays(start, 6)); // end of the week
  const [slide, setSlide] = useState([]);
  const [row,setRow] = useState(1);
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  let formattedStartDate = start.toLocaleDateString("en-US", options);
  let formattedEndDate = end.toLocaleDateString("en-US", options);
  

  const rows = []
 
  for(let i= 1;i<=row;i++){
     rows.push(<Row row={i}  key={i} formValue={formdata}/>)
     console.log(rows)
    
  }

  const addRow = () => {

    setRow((prevRow)=>prevRow+1); 
    
  };

  useEffect(() => {
    
    const daydate = eachDayOfInterval({ start: start, end: end }).map(
      (date) => {
        const monthDate = format(date, "LLL dd");
        const weekDay = format(date, "EEE ");
        return {monthDate:monthDate,weekDay:weekDay};
      }
    );
    
    console.log(daydate);
   
    setSlide(daydate);

  }, [start,end]);

  const nextweek = () => {
    setStart(addDays(start, 7));
    setEnd(addDays(end, 7));
  };

  const prevWeek = () => {
    setStart(subDays(start, 7));
    setEnd(subDays(end, 7));
  };

  const submit=(e)=>{
    e.preventDefault();

  }

  return (
    <>
     {/* <Tabs/> */}
      <div className="container d-flex justify-content-center ">
        <div className="d-flex">
          <FontAwesomeIcon onClick={prevWeek} icon={faArrowLeft} />
          <span style={{ marginRight: "5px", marginLeft: "5px" }}>
            {formattedStartDate}-{formattedEndDate}
          </span>
          <FontAwesomeIcon onClick={nextweek} icon={faArrowRight} />
        </div>
      </div>

      <div className="container" style={{overflow:'scroll'}}>
       
        <table className="table ">
          {/* thead start */}
          <thead className="">
            <tr className="">
              <th>S.No.</th>
              <th>Client Name</th>
              <th>Project Name</th>
              <th>Job Name</th>
              <th>Work Item</th>
              <th>Billable Status</th>
              <th>Description</th>
              
              {slide.map((day, index) => (
                <th className="" key={index} >
                   <span style={{display:'inline-block',width:'65px'}}> {day.monthDate}</span>
                   <span>{day.weekDay}</span>
                 
                  {/* <p style={{width:'10px'}}>{day}</p> */}
                </th>
              ))}
              
              <th style={{ marginLeft: "60px" }} className=" fw-bold">
                Total
              </th>
            </tr>
          </thead>
          {/* thead end */}

          {/* tbody start */}
          <tbody >
              {rows}
          </tbody>
          {/* tbody end */}
        </table>

        <div className="row d-flex ">
          <div className="col-6 d-flex">
            <button onClick={addRow} className="border-0 bg-white">
              {" "}
              <AiOutlinePlus color="blue" />
              <span className="text-primary mx-1 my-1">Add Row</span>
            </button>
          </div>
          <div className="col-6">
            <h6>Total</h6>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <button className="btn btn-success" type="submit" onClick={submit}>Submit</button>
      </div>
    </>
  );
};

export default Timesheetform;
