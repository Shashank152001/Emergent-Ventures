import React from 'react'
import loader from './Loader.gif'
function Loader() {
  return (
    <>
        <div className='text-center fs-1 mt-4'>
            <img src={loader} alt="loading" />
            <p className='text-dark fs-1'>Loading</p>
        </div>
        {/* <div className="text-center">
            <p className='fs-2 text-primary'>Loading</p>
        </div> */}
    </>
  )
}

export default Loader