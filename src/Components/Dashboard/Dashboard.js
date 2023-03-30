import React,{useState,useEffect,useContext} from "react";
import { BiBell, BiChevronDown, BiSearch } from "react-icons/bi";
import "./Dashboard.css";
import MyProject from "../Project/project";
import Skill from "../Skills/Skills";
import Timesheet from "../Timesheet/Timesheet";
import Timer from "../Timer/Timer";
import Leaves from "../Leaves/Leaves";
import WFH from "../WFH/Wfh";
import Sidebar from "./sidebar";
import FileUpload from "./fileupload";
// import {LoginContext} from '../../Context/LoginContext'

function MyDashBoard() {
    const [showModal, setShowModal] = useState(false);
    const [userData,setUserData]=useState({})
    // const {userSkills,setUserSkills} =useContext(LoginContext)
    
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const handleShowModal = () => {
      setShowModal(true);
    };

    const fetchData=async()=>{
      const response=await fetch('https://b09e-2401-4900-1c68-600-5573-a0f7-410c-b6b8.in.ngrok.io/user/dashboard/',{
        mode:'cors',
        headers:{ "Content-Type": "application/json" },
        credentials:'include'
      })
      console.log(response)
      if(!response.ok){
        throw new Error('Data could not be fetched')
      }else{
        return response.json()
      }
    }
    useEffect(()=>{
    
         fetchData().then((res)=>{
          console.log(res)
          setUserData(res)

          // localStorage.setItem('userSkills',JSON.stringify(res));
          // setUserSkills(localStorage.getItem('userSkills'))
          console.log(userData.userSkillsList.primarySkills)

          // let newVar=userSkills;
          // console.log(newVar['primarySkills'])
          // console.log(userData)
          // console.log(userData);
         }).catch((e)=>{
          console.log(e.message);
         })
         
    },[])
   
  return (
    <section className=" main-container">
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
                  <p className="" style={{ marginBottom: "0" }}>
                    <span style={{ paddingLeft: "0.5rem", color: "#000" }}>
                      Andy Lane
                    </span>
                    <BiChevronDown style={{ marginLeft: "0.4rem" }} />
                  </p>
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
                class="row gx-3"
                style={{ padding: "0 1rem", marginTop: "1rem" }}
              >
                <div class="col-6">
                  <Timer />
                </div>

                <div class="col-3">
                  <Leaves />
                </div>

                <div class="col-3">
                  <WFH />
                </div>
              </div>

              <div class="row gx-3" style={{ padding: "0 1rem" }}>
                <div class="col-6">
                  {/* <Skill data={userData.userSkillsList}/> */}
                  <Skill/>
                </div>

                <div class="col-6">
                  <Timesheet />
                </div>
              </div>

              <div class="row gx-1" style={{ padding: "0 1rem" }}>
                <div class="col-12">
                  <MyProject />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right end */}
      </div>
    </section>
  );
}

export default MyDashBoard;
