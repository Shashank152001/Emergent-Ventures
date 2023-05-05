import { BiGridAlt, BiWallet, BiUser,BiTime} from "react-icons/bi";
import celebalLogo from "../../Assest/celebal.png";
import SkillIcon from "./skillIcon";
import DashBoardIcon from './dashboardIcon';
import {Link} from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <div
        className="nav-top left-sidebar"
        style={{
          borderRight: "1px solid #000",
          height: "100%",
          position: "fixed",
        }}
      >
        <div className="image-container-logo">
          <img src={celebalLogo} alt="celebal" />
        </div>
        <div className="menu-item" style={{ marginTop: "2rem" }}>
          <ul>
            <li
              className="active-bg li-style"
              style={{
                padding: "1rem 0.9rem",
                // borderLeft: "10px solid #088dda",
              }}
            >
              {/* <BiGridAlt style={{ marginRight: "10px" }} /> */}
              <DashBoardIcon/>
              <Link to='/dashboard' style={{textDecoration:'none',color:'#283055'}}>
              DashBoard
              </Link>
              
            </li>
            <li style={{ padding: "1rem 0.9rem" }} className="li-style">
              <BiWallet style={{ marginRight: "10px" }} />
              <Link to='getRequest' style={{textDecoration:'none',color:'#283055'}}>
              Myleaves
              </Link>
              
            </li>
            <li style={{ padding: "1rem 0.9rem" }} className="li-style">
              <BiUser style={{ marginRight: "10px" }} />
              <Link to='getProfile' style={{textDecoration:'none' ,color:'#283055'}}>
              Account
              </Link>
            </li>
            <li style={{ padding: "1rem 0.9rem"  }} className="li-style">
              
              <SkillIcon/>
              <Link to='skill' style={{textDecoration:'none' ,color:'#283055'}}>
                Skills
              </Link>
              
            </li>
            <li style={{ padding: "1rem 0.9rem" }} className="li-style">
              <BiTime style={{ marginRight: "10px" }} />
               
               <Link to='getTimesheet' style={{textDecoration:'none' ,color:'#283055'}}>
               Timesheets
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
