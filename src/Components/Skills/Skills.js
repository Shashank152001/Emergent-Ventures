import React from 'react'

function Skills() {
  return (
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
        </div>
    </div>
    </>
  )
}

export default Skills