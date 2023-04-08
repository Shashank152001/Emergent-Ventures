import React from 'react'

const WFHform = () => {
    return (
        <div className='container shadow ' style={{height:'fit-content'}}>
            <h5 className=''> Enter Details </h5>
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
                <div className='col  p-1 d-flex '>
                    <label className='text-muted'> From : </label>
                    <input style={{ backgroundColor: '#eee', borderColor: 'transparent' }} className='bg-whitesmoke rounded mx-2 ' type='date'></input>
                </div>
                <div className='col p-1 '>
                    <label className='text-muted'> To : </label>
                    <input style={{ backgroundColor: '#eee', borderColor: 'transparent' }} className=' mx-2 bg-whitesmoke rounded  ' type='date'></input>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col  p-1'>
                    <label className=''> Leave Type : </label>
                </div>
            </div>
            <div className='row'>
                <div className='col  p-1'>
                    <select className='bg-whitesmoke rounded col-6' style={{ backgroundColor: '#eee', borderColor: 'transparent' }}>
                        <option>Casual Intern Leave</option>
                        <option>Restricted Leaves</option>
                        <option>Work From Home</option>
                        <option>Leave Without Pay</option>
                    </select>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col  p-1'>
                    <label className=''> Reason: </label>
                </div>
            </div>
            <div className='row '>
                <div className='col-12 p-1'>
                    <textarea style={{ backgroundColor: '#eee', borderColor: 'transparent' }} className='bg-whitesmoke rounded col-8 ' rows={7} type='text'></textarea>
                </div>
            </div>

            <button className='rounded bg-primary border-0 mx-2 mt-5 text-white btn-lg'>Submit</button>
            <button className='rounded bg-light border-0  mx-2 btn-lg'>Cancel</button>
        </div>
    )
}

export default WFHform
