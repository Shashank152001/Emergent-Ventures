import { BiGridAlt, BiWallet, BiUser, BiCog,BiAbacus} from "react-icons/bi";
import celebalLogo from "../../Assest/celebal.png";
import SkillIcon from "./skillIcon";

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
              DashBoard
            </li>
            <li style={{ padding: "1rem 0.9rem" }}>
              <BiWallet style={{ marginRight: "10px" }} />
              Myleaves
            </li>
            <li style={{ padding: "1rem 0.9rem" }}>
              <BiUser style={{ marginRight: "10px" }} />
              Account
            </li>
            <li style={{ padding: "1rem 0.9rem" }}>
              {/* <BiAbacus style={{ marginRight: "10px" }} /> */}
              <SkillIcon/>
              Skills
            </li>
            <li style={{ padding: "1rem 0.9rem" }}>
              <BiCog style={{ marginRight: "10px" }} />
              Settings
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
