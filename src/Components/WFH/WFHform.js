import React, { useState, useEffect } from "react";
import { leaveRequest, leaveUser } from "../../Service/LeavesService";

const WFHform = () => {
  const [formData, setFormData] = useState({
    email: "",
    startDate: "",
    endDate: "",
    request: "",
    leaveType: "",
    reason: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isFilled, setFilled] = useState(false);
  const [userDatas, setUserDatas] = useState(null);
  const FormData = new URLSearchParams(formData);

  useEffect(() => {
    leaveUser()
      .then((data) => {
        console.log(data.hrmid);
        setUserDatas(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (!formData.email) {
      errors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.reason) {
      errors.reason = "Please enter a reason";
    }
    if (!formData.startDate) {
      errors.startDate = "Please enter a start date";
    }
    if (!formData.startDate) {
      errors.endDate = "Please enter a end date";
    }
    if (!formData.request) {
      errors.request = "Please enter a request";
    }
    if (Object.keys(errors).length === 0) {
      setFilled(true);
    } else {
      setFormErrors(errors);
    }
    const bodydata = FormData;
    console.log(formData);
    if (isFilled) {
      leaveRequest(bodydata).then((data) => {
        console.log(data);
      });
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
   
    <div style={{backgroundColor:'#f7f7f7',width:'80%',position:'absolute', 
    top:'40%',left:'50%',transform:'translate(-50%,-45%)',
    padding:'1rem'}}>
      <h5 className="text-center px-2"> Enter Details </h5>

      <form onSubmit={handleSubmit}>
        {userDatas ? (
          <div className="row gx-0 ">
            <div className="col-4 p-1">
              <label className="" style={{fontWeight:'200'}}> Employee ID : </label>
            </div>
            <div className="col-8 p-1">
              <input
                style={{
                  backgroundColor: "#fff",
                  borderColor: "transparent",
                  padding: "0.6rem",
                  outline: "none",
                  borderBottom: "1px solid #3b5998",
                  width: "80%",
                }}
                className="bg-whitesmoke rounded col-12"
                type="text"
                name="userId"
                value={userDatas.hrmid}
                onChange={handleChange}
              ></input>
            </div>
          </div>
        ) : (
          <div className="row gx-0">
            <div className="col-6 p-1">
              <input
                style={{
                  backgroundColor: "#eee",
                  borderColor: "transparent",
                  width: "80%",
                }}
                className="bg-whitesmoke rounded col-12"
                type="text"
                name="userId"
                value={"hrm"}
                onChange={handleChange}
              ></input>
            </div>
          </div>
        )}
        <div className="row gx-0 ">
          <div className="col-4  p-1">
            <label className="" style={{fontWeight:'200'}}> Email: </label>
          </div>
          <div className="col-8 p-1">
            {formErrors.email && (
              <span className="error-span">{formErrors.email}</span>
            )}
            <input
              style={{
                backgroundColor: "#fff",
                borderColor: "transparent",
                padding: "0.6rem",
                outline: "none",
                borderBottom: "1px solid #3b5998",
                width: "80%",
              }}
              className="bg-whitesmoke rounded col-12"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></input>
          </div>
        </div>

        <div className="row gx-0 ">
          <div className="col-4 ">
            <label className="" style={{fontWeight:'200'}}> Date : </label>
          </div>
          <div className="col-8  d-flex ">
            <div>
            <label className="text-muted" style={{fontWeight:'200'}}> From : </label>
            {formErrors.startDate && (
              <span className="error-span">{formErrors.startDate}</span>
            )}
            <input
              style={{
                backgroundColor: "#fff",
                borderColor: "transparent",
                padding: "0.6rem",
                outline: "none",
                borderBottom: "1px solid #3b5998",
              }}
              className="bg-whitesmoke rounded mx-2 "
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            ></input>
            </div>
            <div className="">
              <label className="" style={{fontWeight:'200'}}> To : </label>
              {formErrors.endDate && (
                <span className="error-span">{formErrors.endDate}</span>
              )}
              <input
                style={{
                  backgroundColor: "#fff",
                  borderColor: "transparent",
                  padding: "0.6rem",
                  outline: "none",
                  borderBottom: "1px solid #3b5998",
                }}
                className=" mx-2 bg-whitesmoke rounded"
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              ></input>
            </div>
          </div>
        </div>

        <div className="row gx-0 py-1">
          <div className="col-4  d-flex ">
            <label className="" style={{fontWeight:'200'}}> leaveType: </label>
          </div>
          <div className="col-8  ">
            <select
              className="bg-whitesmoke rounded col-6"
              style={{
                backgroundColor: "#fff",
                border: "none",
                width: "80%",
                padding: "0.6rem",
                outline: "none",
                borderBottom: "1px solid #3b5998",
              }}
              name="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
            >
              <option selected>Select Leave Type</option>
              <option value="halfday">halfday</option>
              <option value="fullday">fullday</option>
            </select>
          </div>
        </div>

        <div className="row gx-0 py-1 ">
          <div className="col-4 ">
            <label className="" style={{fontWeight:'200'}}> Request : </label>
          </div>
          <div className="col-8 ">
            {formErrors.request && (
              <span className="error-span">{formErrors.request}</span>
            )}
            <select
              className="bg-whitesmoke rounded col-6"
              style={{
                backgroundColor: "#fff",
                borderColor: "transparent",
                width: "80%",
                padding: "0.6rem",
                outline: "none",
                borderBottom: "1px solid #3b5998",
              }}
              name="request"
              value={formData.request}
              onChange={handleChange}
            >
              <option selected>select request</option>
              <option value="Casual Intern Leave">Casual Intern Leave</option>
              <option value="Work From Home">Work From Home</option>
              <option value="Restricted Leaves">Restricted Leaves</option>
              <option value="Leave Without Pay">Leave Without Pay</option>
            </select>
          </div>
        </div>

       

        <div className="row gx-0">
          <div className="col-4  ">
            <label className="" style={{fontWeight:'200'}}> Reason: </label>
          </div>
          <div className="col-8 ">
            {formErrors.reason && (
              <span className="error-span">{formErrors.reason}</span>
            )}
            <textarea
              style={{
                backgroundColor: "#fff",
                borderColor: "transparent",
                padding: "0.6rem",
                outline: "none",
                borderBottom: "1px solid #3b5998",
                width: "80%",
              }}
              className="bg-whitesmoke rounded col-8 "
              rows={7}
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <button
          className="rounded bg-primary border-0 mx-2 mt-5 text-white btn-lg"
          type="submit"
        >
          Submit
        </button>
        <button className="rounded bg-light border-0  mx-2 btn-lg">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default WFHform;
