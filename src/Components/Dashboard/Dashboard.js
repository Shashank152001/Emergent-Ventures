import React,{useState,useEffect} from "react";
import { BiBell, BiChevronDown, BiSearch } from "react-icons/bi";
import "./Dashboard.css";
import MyProject from "../Project/MyProject";
import Skill from "../Skills/Skills";
import Timesheet from "../Timesheet/Timesheet";
import Timer from "../Timer/Timer";
import Leaves from "../Leaves/Leaves";
import WFH from "../WFH/Wfh";
import Sidebar from "./sidebar";
import FileUpload from "./fileupload";
import { DropDown } from "../DropDown/DropDown";
import {userData} from '../../Service/DashboardService'
import Loader from "../Spinner/Loader";


function MyDashBoard() {
    const [showModal, setShowModal] = useState(false);
    const[openProfile,setOpenProfile]=useState(false);
    const[userDatas,setUserDatas]=useState(null)

    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const handleShowModal = () => {
      setShowModal(true);
    };

    useEffect(()=>{
      userData().then((data)=>{
        console.log(data.name)
        setUserDatas(data);
      }).catch((e)=>{
        console.log(e.message)
      })
    },[])



    
  return (
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

                <FileUpload isOpen={showModal} onClose={handleCloseModal}/>
                
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
                  {userDatas?
                  <>
                  <p className="" style={{ marginBottom: "0" }}>
                    <span style={{ paddingLeft: "0.5rem", color: "#000" }}>
                      {userDatas.name}
                    </span>
                    <BiChevronDown style={{ marginLeft: "0.4rem" }} onClick={()=>{setOpenProfile((prev)=>!prev)}}/>
                  </p>
                  {openProfile && <DropDown/>}
                  </>
                  :
                  <p>No Name</p>

}
                </div>
              </div>
            </div>
          </div>
          {/* right top end*/}

          <div
            className="right-middle-content"
            style={{
              overflowY: "auto",
              overflowX: "hidden",
              position: "absolute",
              width: "100%",
              height: "100vh",
            }}
          >
            <div className="content-inner">
              <div
                className="row gx-3"
                style={{ padding: "0 1rem", marginTop: "1rem" }}
              >
                <div className="col-6">
                  <Timer />
                </div>

                <div className="col-3">
                  <Leaves />
                </div>

                <div className="col-3">
                  <WFH />
                </div>
              </div>

              <div className="row gx-3" style={{ padding: "0 1rem" }}>
                <div className="col-6">
                  <Skill/>
                </div>

                <div className="col-6">
                  <Timesheet/>
                </div>
              </div>

              <div className="row gx-1" style={{ padding: "0 1rem" }}>
                <div className="col-12">
                  <MyProject />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right end */}
      </div>
      {/* // :
      // <section style={{height:'100vh'}}>
      // <Loader/>
      // </section> */}
      {/* // } */}
    </section>
  );
}

export default MyDashBoard;
