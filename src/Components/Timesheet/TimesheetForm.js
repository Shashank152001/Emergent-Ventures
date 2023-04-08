import React from 'react'

const Timesheetform = () => {
    return (
        <div className='container shadow ' style={{ height: 'fit-content' }}>
            <h5 className=''> Daily-Timesheet </h5>
            <div className='row '>
                <div className='col  p-1'>
                    <label className=''> Employee ID : </label>
                </div>
            </div>
            <div className='row '>
                <div className='col-6 p-1'>
                    <input style={{ backgroundColor: '#eee', borderColor: 'transparent' }} className='bg-whitesmoke rounded col-12' type='text'></input>
                </div>
            </div>

            <div className='row '>
                <div className='col  p-1'>
                    <label className='mt-4'> Team Email ID : </label>
                </div>
            </div>
            <div className='row '>
                <div className='col-6 p-1'>
                    <input style={{ backgroundColor: '#eee', borderColor: 'transparent' }} className='bg-whitesmoke rounded col-12' type='text'></input>
                </div>
            </div>


            <div className='row mt-4'>
                <div className='col  p-1'>
                    <label className=''> Date : </label>
                </div>
            </div>

            <div className='row '>
                <div className='col-6  p-1  '>

                    <input style={{ backgroundColor: '#eee', borderColor: 'transparent', width:'18rem' }} className='bg-whitesmoke rounded  ' type='date'></input>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col  p-1'>
                    <label className=''> Work Description: </label>
                </div>
            </div>
            <div className='row '>
                <div className='col-12 p-1'>
                    <textarea style={{ backgroundColor: '#eee', borderColor: 'transparent' }} className='bg-whitesmoke rounded col-8 ' rows={7} type='text'></textarea>
                </div>
            </div>
       
            <div className='row mt-4'>
                <div className='col  p-1'>
                    <label className=''> Billable Status : </label>
                </div>
            </div>
            <div className='row'>
                <div className='col  p-1'>
                    <select>
                        <option>Billable</option>
                        <option>Non-Billable</option>
                    </select>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col  p-1'>
                    <label className=''> Attachments : </label>
                </div>
            </div>
            <div className='row'>
                <div className='col  p-1'>
                    <input type='file' multiple></input>
                </div>
            </div>

            <button className='rounded bg-primary border-0 mx-2 mt-5 text-white btn-lg'>Submit</button>
            <button className='rounded bg-light border-0  mx-2 btn-lg'>Cancel</button>
        </div>
    )
}

export default Timesheetform
