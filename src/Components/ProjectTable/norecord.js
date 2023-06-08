import React from 'react'
import {AiOutlineFileExclamation } from "react-icons/ai";

function NoRecord() {
  return (
    <div style={{padding:"1rem",height:'100%'}}>
       <p style={{display:"flex",justifyContent:'center',flexDirection:'column',alignItems:"center",height:'100%'}}>
         <AiOutlineFileExclamation style={{fontSize:"3rem",fill:'#ff4500'}}/>
         <span style={{fontWeight:'bold',color:'#000'}}>No records found</span>
       </p>
    </div>
  )
}

export default NoRecord;