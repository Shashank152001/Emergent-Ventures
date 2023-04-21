import Sidebar from "../Dashboard/sidebar";
import Header from "../Dashboard/Header";
import WFHform from "../WFH/WFHform";

const LeaveForm = ()=>{
    return (
        <section className="main-container" style={{height:'100vh'}}>
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
                <div className="content-inner d-flex justify-items-center align-items-center" style={{height:'90%'}}>
                  <WFHform/>
                </div>
              </div>
            </div>
            {/* right end */}
          </div>
          </section>
      );
}

export default LeaveForm;