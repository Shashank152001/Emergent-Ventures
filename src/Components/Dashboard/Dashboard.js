import React,{useState,useEffect} from "react";
import { BiBell, BiChevronDown, BiSearch ,BiPlusCircle} from "react-icons/bi";
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
import Header from "./Header";


function MyDashBoard() {
    const [showModal, setShowModal] = useState(false);
    const[openProfile,setOpenProfile]=useState(false);
    const[userDatas,setUserDatas]=useState(null)
    // const[userDatas,setUserDatas]=useState(true)

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
      {userDatas?
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
          <Header/>
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
      :
      <section style={{height:'100vh'}}>
      <Loader/>
      </section>
      }
    </section>
  );
}

export default MyDashBoard;
