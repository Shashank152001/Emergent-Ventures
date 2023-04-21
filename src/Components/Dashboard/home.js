import MyProject from "../Project/MyProject";
import Skill from "../Skills/Skills";
import Timesheet from "../Timesheet/Timesheet";
import Timer from "../Timer/Timer";
import Leaves from "../Leaves/Leaves";
import WFH from "../WFH/Wfh";

function Home() {
  return (
    <>
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
            <Skill />
          </div>

          <div className="col-6">
            <Timesheet />
          </div>
        </div>

        <div className="row gx-1" style={{ padding: "0 1rem" }}>
          <div className="col-12">
            <MyProject />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
