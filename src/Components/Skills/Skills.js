import React from 'react';
import './css/skill.css';

function Skill() {
  return (
<<<<<<< HEAD:src/Components/Skills.js

    <section className='skills-container'>

        <div className='skills-heading'>
            <h1>My Skills</h1>
=======
    <>
    <div id='skills' className='m-2 p-2'>
        <div className="container">
            <div className="row shadow">
                <div className="col-md-12 bg-light">
                    <h5>My Skills </h5>
                    <div className="table-fixed">
                    <table className='table table-hover'>
                        <tbody>
                            <tr>
                                <td className='text-secondary'>Primary Skills</td>
                                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, repudiandae.</td>
                            </tr>
                            <tr>
                                <td className='text-secondary'>Secondary Skills</td>
                                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, repudiandae.</td>
                            </tr>
                            <tr>
                                <td className='text-secondary'>Soft Skills</td>
                                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, repudiandae.</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
>>>>>>> main:src/Components/Skills/Skills.js
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