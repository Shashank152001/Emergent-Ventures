import React ,{useState,useEffect}from "react";
import { BiBell, BiChevronDown, BiSearch ,BiPlusCircle} from "react-icons/bi";
import "./Dashboard.css";
import {userData} from '../../Service/DashboardService'
import FileUpload from "./fileupload";
import { DropDown } from "../DropDown/DropDown";

function Header() {
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
          // console.log(data.name)
          setUserDatas(data);
        }).catch((e)=>{
          console.log(e.message)
        })
      },[])
  return (
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
                    border: "none",
                    outline: "none",
                    borderRadius: "6px",
                    backgroundColor:'transparent'
                  }}
                  className=""
                  onClick={handleShowModal}
                >
                  <BiPlusCircle style={{ fontSize: "1.6rem", marginRight: "0.8rem" }}/>
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
  )
}

export default Header