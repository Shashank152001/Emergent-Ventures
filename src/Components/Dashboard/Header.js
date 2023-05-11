import React, { useState, useEffect, useContext } from "react";
import {useRef} from 'react';
import { BiBell, BiChevronDown, BiSearch, BiPlusCircle } from "react-icons/bi";
import "./Dashboard.css";
import { LoginContext } from '../../Context/LoginContext'
import FileUpload from "./fileupload";
import { DropDown } from "../DropDown/DropDown";
import { ProfileFormData } from '../../Service/ProfileService'
import { UserSearchBar,GetUserId } from "../../Service/UserSearchService";
import { useNavigate } from "react-router-dom";

function Header() {

  const [showModal, setShowModal] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { profileformdata, setProfileFormdata } = useContext(LoginContext)
  
  // search Field
  
  const [input, setInput] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();


  const searchBoxRef = useRef(null);//for close outside 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


//for search name
  useEffect(() => {
    if (input!= "") {
      UserSearchBar(input)
        .then((UserSearch) => {
          const result = UserSearch.filter((Name) => {
            return (
              Name &&
              Name.name &&
              Name.name.toLowerCase().includes(input.toLowerCase())
            );
          });
          setSearchResult(result);
          
        })
        .catch((e) => {
          console.log(e.message);
        });
    } else {
      setSearchResult([]);
    }
  }, [input]);

  const handleChange = (value) => {
    setInput(value);
    setShowResults(true); 
  };

  const handleSearchBoxClick = () => {
   
    setShowResults(true); 
  };

  const handleRowClick = (id) => {
  
   
    navigate(`/dashboard/searchprofile/${id}`);

  };
 
 
  const handleCloseModal = () => {
    document.getElementById('scroll-hidden').style.overflow = 'visible';
    setShowModal(false);
  };

  const handleShowModal = () => {
    document.getElementById('scroll-hidden').style.overflow = 'hidden';
    setShowModal(true);
  };

  useEffect(() => {
    ProfileFormData().then((data) => {
      setProfileFormdata({
        name: data.profile.name,
        profileImage: data.profile.profileImage,
        userId: data.profile.userId
      })
    })
  }, [])


  return (

    <div
      className="right-top"
      style={{
        padding: "0.9rem 0",
        borderBottom: "1px solid #000",
        position: "fixed",
        // position: "sticky",
        width: '87%',
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
              background: '#F7F9FB'
            }}
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            onClick={handleSearchBoxClick}
          />
          {showResults && (
        <div
        className="search-box"
        ref={searchBoxRef}
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            zIndex: "999",
            borderRadius: "10px",
            border: "none",
            background: "rgba(211,224,253,1)",
            width: "100%",
            maxHeight: "200px",
            overflow: "auto",
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)"
          }}
        >
          {searchResult.map((Name) => (
            <table
              className="table"
              key={Name.id}
              style={{ width: "100%", marginBottom: "0" }}
            >
             
              <tbody>
                <tr className="Search-Table-text"   onClick={() => handleRowClick(Name.id)}>
                  <td>{Name.hrmId}</td>
                  <td>{Name.name}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      )}
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
              background: '#F7F9FB',
              padding: '0.4rem 0.9rem',
              color: '#6C63FF'
 }}
            className=""
            onClick={handleShowModal}
          >
            {/* <BiPlusCircle style={{ fontSize: "1.6rem", marginRight: "0.8rem" }}/> */}
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
                src={
                  profileformdata?.profileImage || ''}
                alt="profile"
                style={{ width: "30px", height: "30px" }}
              />
            </p>


            <p className="" style={{ marginBottom: "0" }}>
              <span style={{ paddingLeft: "0.5rem", color: "#000" }}>
                {profileformdata?.name || ''}
              </span>
              <BiChevronDown style={{ marginLeft: "0.4rem" }} onClick={() => { setOpenProfile((prev) => !prev) }} />
            </p>
            {openProfile && <DropDown />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
