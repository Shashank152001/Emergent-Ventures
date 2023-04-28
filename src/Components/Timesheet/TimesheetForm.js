import React, { useEffect, useState } from 'react'
import { addDays, eachDayOfInterval, format, parseISO, subDays } from "date-fns";
import { MdWork } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
const Timesheetform = () => {


    const addRow = () => {
        // console.log('hello')
        $('#TRow').clone().appendTo('#TBody');
    }
    const [start, setStart] = useState(parseISO('2023-04-23'));
    const [end, setEnd] = useState(addDays(start, 6));
    const [week, setWeek] = useState([]);
    const [slide, setSlide] = useState([]);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    let formattedStartDate = start.toLocaleDateString('en-US', options);
    let formattedEndDate = end.toLocaleDateString('en-US', options);
    // let daydate;

    useEffect(() => {


        setWeek(eachDayOfInterval({ start: start, end: end }))
        const daydate = week.map(date => {
            return format(date, 'LLL dd EEE ');
        })
        // console.log(daydate)
        setSlide(daydate);

        // console.log(slide)

    }, [week])

    console.log(slide)

    // console.log(week);




    const nextweek = () => {
        setStart(addDays(start, 7));
        setEnd(addDays(end, 7))
        // setWeek(eachDayOfInterval({start:start,end:end}))
        setWeek(eachDayOfInterval({ start: start, end: end }))
        const daydate = week.map(date => {
            return format(date, 'LLL dd EEE ');
        })
        // console.log(daydate)
        setSlide(daydate);

    }

    const prevWeek = () => {
        setStart(subDays(start, 7));
        setEnd(subDays(end, 7));
        // setWeek(eachDayOfInterval({start:start,end:end}))
        setWeek(eachDayOfInterval({ start: start, end: end }))
        const daydate = week.map(date => {
            return format(date, 'LLL dd EEE ');
        })
        // console.log(daydate)
        setSlide(daydate);
    }



    return (
        <>
            <div className='container d-flex justify-content-center '>
                <div className="d-flex" >
                    <FontAwesomeIcon onClick={prevWeek} icon={faArrowLeft} />
                    <span style={{ 'marginRight': '5px', 'marginLeft': '5px' }}>{formattedStartDate}-{formattedEndDate}</span>
                    <FontAwesomeIcon onClick={nextweek} icon={faArrowRight} />
                </div>
            </div>

            <div className="container  ">
                <table className='table'>
                    <thead className=''>
                        <tr className='shadow ' >
                            <th >S.No.</th>
                            <th>Client Name</th>
                            <th>Project Name</th>
                            <th>Job Name</th>
                            <th>Work Item</th>
                            <th>Billable Status</th>
                            <th>

                                <div className="d-flex col-12">
                                    {slide.map((day) => (
                                        <div className='col-2'>{day}</div>
                                    ))}
                                </div>

                            </th>
                            <p style={{marginLeft:'60px'}} className=' my-2 fw-bold'>Total</p> 
                        </tr>
                      
                    </thead>

                    <tbody id='TBody'>
                        <tr id='TRow'>
                            <td className=''>1.</td>
                            <td>
                                <select className='shadow border-0'>
                                    <option value="">Select Client</option>
                                    <option value="">L&D</option>
                                    <option value="">XYZ developers</option>
                                </select>
                            </td>
                            <td>
                                <select className='shadow border-0'>
                                    <option value="">Select Project</option>
                                    <option value="">Zoho Clone</option>
                                    <option value="">Project B</option>
                                </select>
                            </td>
                            <td>
                                <select className='shadow border-0'>
                                    <option value="">Select Job</option>
                                    <option value="">xyz abc</option>
                                    <option value="">assistant </option>
                                </select>
                            </td>
                            <td>
                                <div className='d-flex '>
                                    <input type="text" className='mx-1 shadow border-0' />
                                    <MdWork size={20} />
                                </div>

                            </td>
                            <td>
                                <select className='shadow border-0'>
                                    <option value="">Billable</option>
                                    <option value="">Non-Billable</option>

                                </select>
                            </td>
                            <div className='d-flex' >
                                <div className='col-2'>
                                    <td>
                                        <input type='text' className='border border-top-0 border-end-0 border-start-0 shadow ' style={{ width: '53px' }} value='00:00' ></input>
                                    </td>
                                </div>
                                <div className='col-2'>
                                    <td>
                                        <input type='text' className='border-0 border-top-0 border-end-0 border-start-0 shadow' style={{ width: '53px' }} ></input>
                                    </td>
                                </div>
                                <div className='col-2'>
                                    <td>
                                        <input type='text' className='border-0 border-top-0 border-end-0 border-start-0 shadow' style={{ width: '53px' }} ></input>
                                    </td>
                                </div>
                                <div className='col-2'>
                                    <td>
                                        <input type='text' className='border-0 border-top-0 border-end-0 border-start-0 shadow' style={{ width: '53px' }} ></input>
                                    </td>
                                </div>
                                <div className='col-2'>
                                    <td>
                                        <input type='text' className='border-0 border-top-0 border-end-0 border-start-0 shadow' style={{ width: '53px' }} ></input>
                                    </td>
                                </div>
                                <div className='col-2'>
                                    <td>
                                        <input type='text' className='border-0 border-top-0 border-end-0 border-start-0 shadow' style={{ width: '53px' }} ></input>
                                    </td>
                                </div>
                                <div className='col-2'>
                                    <td>
                                        <input type='text' className='border-0 border-top-0 border-end-0 border-start-0 shadow' style={{ width: '53px' }} ></input>
                                    </td>
                                </div>
                                <div className='col-2'>
                                    <td>
                                        <input type='text' className='border-0  shadow' style={{ width: '53px' }} ></input>
                                    </td>
                                </div>

                            </div>

                        </tr>

                    </tbody>


                </table>
                <div className="row d-flex ">
                    <div className="col-3 d-flex">
                        <button onClick={addRow} className='border-0 bg-white'> <AiOutlinePlus color='blue' />
                            <span className='text-primary mx-1 my-1'>Add Row</span></button>
                    </div>
                    <div className="col-4">
                        <h6>Total</h6>
                    </div>
               
                  
                </div>
                
            </div>
        </>
    )
}

export default Timesheetform