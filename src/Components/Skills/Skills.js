import React, { useState, useEffect } from "react";
import "./skill.css";
import NoRecord from "../Project/norecord";

const url ='https://cd37-117-242-153-226.in.ngrok.io/user/skills/get-user-skills';

function Skill() {
  const[userData,setUserData]  = useState(null);

  useEffect(()=>{
    fetch(url,{
      method:'GET',
      mode:'cors',
      credentials: 'include',
      headers:{
        'Content-Type': 'application/json'
      },

    }).then((response)=>{
          return response.json();
    }).then((data)=>{
      setUserData(data.data);
    })
  },[])
  return (
    <section className="skills-container">
      <div className="skills-heading">
        <h1 style={{ fontSize: "1.5rem" }}>My Skills</h1>
      </div>

      <div className="skill-content">

        {
          userData?
         <>
        <div className='primary-skills'>
                    <h6 className='skill-title'>Primary Skills</h6>
                    <div className='content-wrapper'>
                    <p className='skill-content'>
                        {userData.primarySkills}
                        
                    </p>

                    </div>
                    
                </div>

        <div className='primary-skills'>
                    <h6 className='skill-title'>Secondary Skills</h6>
                    <div className='content-wrapper'>
                    <p className='skill-content'>
                    {userData.secondarySkills}
                    </p>
                    </div>
                    
                </div>

        <div className='primary-skills'>
                    <h6 className='skill-title'>Certifications</h6>
                    <div className='content-wrapper'>
                    <p className='border-none skill-content'>
                    {userData.certifications}
                    </p>
          </div>
                    
          </div>
          </>
        :
        <NoRecord />
}
      </div>
    </section>
  );
}

export default Skill;
