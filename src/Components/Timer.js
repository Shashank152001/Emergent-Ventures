import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Timer.css'

const Timer = () => {
  return (
    <>
      <div id='skills'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-light">
              <h2 className='my-4'>    Welcome Back! </h2>
              <p className='text-secondary'> Your today's timer</p>
              <div className='timer d-flex '>
                <input className='input' type='number' value='00'></input>
                <p className='inputcolon'> : </p>
                <input className='input' type='number' value='00'></input>
                <p className='inputcolon'> : </p>
                <input className='input' type='number' value='00'></input>

              </div>
              <div className='my-3'>
            <Button variant="danger">Check-out</Button>
            <Button className='mx-2 ' variant="primary">Break</Button>
          </div>
            </div>

          </div>

          

        </div>
      </div>
    </>
  )
}

export default Timer