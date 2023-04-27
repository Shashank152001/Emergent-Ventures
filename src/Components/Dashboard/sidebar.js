import { BiGridAlt, BiWallet, BiUser, BiCog} from "react-icons/bi";
import celebalLogo from "../../Assest/celebal.png";
import SkillIcon from "./skillIcon";
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
              className="li-bg"
              style={{
                padding: "1rem 0.9rem",
                borderLeft: "10px solid #088dda",
              }}
            >
              <BiGridAlt style={{ marginRight: "10px" }} />
              <Link to='/dashboard' style={{textDecoration:'none'}}>
              DashBoard
              </Link>
              
            </li>
            <li style={{ padding: "1rem 0.9rem" }}>
              <BiWallet style={{ marginRight: "10px" }} />
              <Link to='getRequest' style={{textDecoration:'none'}}>
              Myleaves
              </Link>
              
            </li>
            <li style={{ padding: "1rem 0.9rem" }}>
              <BiUser style={{ marginRight: "10px" }} />
              <Link to='getProfile' style={{textDecoration:'none'}}>
              Account
              </Link>
            </li>
            <li style={{ padding: "1rem 0.9rem" }}>
              
              <SkillIcon/>
              <Link to='skill' style={{textDecoration:'none'}}>
                Skills
              </Link>
              
            </li>
            <li style={{ padding: "1rem 0.9rem" }}>
              <BiCog style={{ marginRight: "10px" }} />
               
               <Link to='settings' style={{textDecoration:'none'}}>
               Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
