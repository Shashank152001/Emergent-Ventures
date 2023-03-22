import React from 'react';
import './skill.css';

function Skill() {
  return (

    <section className='skills-container'>

        <div className='skills-heading'>
            <h1 style={{fontSize:'1.5rem'}}>My Skills</h1>
        </div>

        <div className='skill-content'>
            <div className='primary-skills'>
                    <h6 className='skill-title'>Primary Skills</h6>
                    <div className='content-wrapper'>
                    <p className='skill-content'>UI/UX,Figma,Adobe XD,WireFraming,Prototyping,UX research,
                        Illustrations,Visual Communication,Information Architecture
                    </p>
                    </div>
                    
                </div>
            
            <div className='primary-skills'>
                    <h6 className='skill-title'>Secondary Skills</h6>
                    <div className='content-wrapper'>
                    <p className='skill-content'>UI/UX,Figma,Adobe XD,WireFraming,Prototyping,UX research,
                        Illustrations,Visual Communication,Information Architecture
                    </p>
                    </div>
                    
                </div>
            
            <div className='primary-skills'>
                    <h6 className='skill-title'>Soft Skills</h6>
                    <div className='content-wrapper'>
                    <p className='border-none skill-content'>UI/UX,Figma,Adobe XD,WireFraming,Prototyping,UX research,
                        Illustrations,Visual Communication,Information Architecture
                    </p>
                    </div>
                    
                </div>
            
            </div>
        
    
    </section>

  )
}

export default Skill;