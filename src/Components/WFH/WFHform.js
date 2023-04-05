import { React, useState, useEffect } from 'react'
import Sidebar from '../Dashboard/sidebar'
import { BiSearch } from 'react-icons/bi'
import { BiBell } from 'react-icons/bi'
import { BiChevronDown } from 'react-icons/bi'
import { DropDown } from '../DropDown/DropDown'
import FileUpload from '../Dashboard/fileupload'
import { userData } from '../../Service/DashboardService'
import '../Dashboard/Dashboard.css'
import './WFH.css'


const WFHform = () => {

  const [showModal, setShowModal] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [userDatas, setUserDatas] = useState(null)

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    userData().then((data) => {
      console.log(data.name)
      setUserDatas(data);
    }).catch((e) => {
      console.log(e.message)
    })
  }, [])

  return (
    <>
      <section className=" main-container">
        {/* {userDatas? */}
        <div className="wrapper d-flex">
          {/* left */}
          <Sidebar />
          {/* left end */}

          {/* right */}
          <div
            className="right-sidebar "
            style={{
              position: "absolute",
              width: "87%",
              height: "100%",
              right: "0",
            }}
          >
            {/* right top start */}
            <div
              className="right-top"
              style={{
                padding: "0.9rem 0",
                borderBottom: "1px solid #000",
                position: "sticky",
                top: "0",
                zIndex: "9",
              }}
            >
              <div
                className="right-nav-top-inner d-flex flex-col align-items-center justify-content-end"
                style={{ width: "97%" }}
              >
                <div
                  className="input-container position-relative"
                  style={{ width: "27%", marginRight: "4rem" }}
                >
                  <input
                    type="text"
                    placeholder="search"
                    className="position-relative"
                    style={{
                      borderRadius: "10px",
                      height: "34px",
                      width: "100%",
                      padding: "0.4rem 2.8rem",
                      border: "none",
                    }}
                  />
                  <BiSearch
                    className="position-absolute "
                    style={{ left: "0", top: "10px", marginLeft: "15px" }}
                  />
                </div>
                <div style={{ marginRight: "3.4rem" }}>
                  <button
                    style={{
                      padding: "0.4rem 1rem",
                      color: "#fff",
                      border: "none",
                      outline: "none",
                      borderRadius: "6px",
                    }}
                    className="bg-primary"
                    onClick={handleShowModal}
                  >
                    Upload
                  </button>

                  <FileUpload isOpen={showModal} onClose={handleCloseModal} />

                </div>

                <div className="d-flex align-items-center justify-content-center shift ">
                  <BiBell style={{ fontSize: "1.6rem", marginRight: "0.8rem" }} />
                  <div className="d-flex  align-items-center right-corner">
                    <p
                      className="profile-container"
                      style={{ marginBottom: "0" }}
                    >
                      <img
                        src="/images/singin.png"
                        alt="profile"
                        style={{ width: "30px", height: "30px" }}
                      />
                    </p>
                    {userDatas ?
                      <>
                        <p className="" style={{ marginBottom: "0" }}>
                          <span style={{ paddingLeft: "0.5rem", color: "#000" }}>
                            {userDatas.name}
                          </span>
                          <BiChevronDown style={{ marginLeft: "0.4rem" }} onClick={() => { setOpenProfile((prev) => !prev) }} />
                        </p>
                        {openProfile && <DropDown />}
                      </>
                      :
                      <p>No Name</p>

                    }
                  </div>
                </div>
              </div>

            </div>
            <div className='form container d-flex flex-column border mt-3 mx-3 rounded ' style={{height:'80%'}}>
              <h6 className='p-2 fw-bold'>Work From Home </h6>
              <div className=''>
                <div className='d-flex p-2 '>
                  <label className='px-3 text-muted'>Employee ID :</label>

                  <input className='bg-transparent  border-top-0 border-start-0 border-end-0' type='text' name='employeeId'></input>
                </div>
                <div className='d-flex p-3'>
                  <label className='p-2 text-muted'>Date :</label>
                  <label className='p-2'>From :</label>
                  <input className=' px-5 bg-transparent  border-top-0 border-start-0 border-end-0' type='date' name='fromDate'></input>
                  <label className='p-2'>To :</label>
                  <input className=' px-5 bg-transparent  border-top-0 border-start-0 border-end-0' type='date' name='toDate'></input>
                </div>
                <div className='d-flex p-3'>
                  <label className='p-2 text-muted'>Team Email ID :</label>

                  <input className='bg-transparent border-top-0 border-start-0 border-end-0' type='text' name='emailId'></input>
                </div>
                <div className='d-flex p-4 text-muted'>
                  <label>Reason For Work From Home :</label>

                  <textarea className='bg-transparent border-top-0 border-start-0 border-end-0 ' rows='6' cols='70'
                   type='text' name='reason'></textarea>
                </div>

              </div>
            </div>

            <div className='container foot p-3   mx-3  rounded d-none'>
              <button className='mx-2 px-3 bg-success text-white border-0 rounded'>Submit</button>
              <button className='mx-2  px-3 text-black border-0 rounded'>Cancel</button>
            </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default WFHform