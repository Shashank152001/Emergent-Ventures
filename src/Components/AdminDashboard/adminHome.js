import MyProject from "../Project/MyProject";
import Skill from "../Skills/Skills";
import Timesheet from "../Timesheet/Timesheet";
import Timer from "../Timer/Timer";
import Leaves from "../Leaves/Leaves";
import WFH from "../WFH/Wfh";
import EmployeeTable from '../EmployeeTable/EmployeeTable';

function AdminHome() {
  return (
    <>
      <div className="content-inner">
        <div
          className="row gx-3"
          style={{ padding: "0 1rem", marginTop: "1rem" }}
        >
          <div className="col-12">
            <EmployeeTable />
          </div>
         
          <div className="col-12">
            <MyProject />
          </div>
          
        </div>

        

        <div className="row gx-1 d-none" style={{ padding: "0 1rem" }}>
          <div className="col-12">
            <MyProject />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHome;