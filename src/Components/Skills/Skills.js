import React, { useState, useEffect } from "react";
import "./skill.css";
import NoRecord from "../Project/norecord";
 ="https://cfca-2409-4088-9e37-4758-805-92a6-4b37-a49.ap.ngrok.io/user/skills/get-user-skills";

import {fetchSkills} from '../../Service/SkillService'
// const url ='https://8925-2401-4900-1c69-8e1e-3cd0-e1a6-ed6c-3b2a.in.ngrok.io/user/skills/get-user-skills';


function Skill() {
  const[userData,setUserData]  = useState(null);

  useEffect(()=>{
    fetchSkills().then((data)=>{
      setUserData(data.data[0]);
    }).catch((e)=>{
      console.log(e.message)
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
