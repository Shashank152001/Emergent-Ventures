import React from "react";
import { useNavigate } from "react-router-dom";
import celebal from "../../Assest/celebal.png";
import signin from "../../Assest/singin.png";
import bgSvg from "../Spheres.svg";
import { userSignUp } from "../../Service/SignUpServeice";
import { success } from "../../Utils/SuccessToast";
import { Error } from "../../Utils/ErrorToast";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "../../hooks/formhook";
import Form from "../ReusableComponents/form";
import "../ReusableComponents/form.css";
import { BiErrorCircle } from "react-icons/bi";

function SignUp() {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = (formData) => {
    const bodyData = formData;

    userSignUp(bodyData)
      .then((data) => {
        if (data.message === "User created successfully") {
          navigate("/");
          success(data.message);
        } else {
          navigate("/signup");
          Error("User Already Exist!");
        }
      })
      .catch((e) => {
        navigate("/signup");
        Error("Server Down!");
      });
  };

  const { formData, formErrors, handleSubmit, handleChange } = useForm(
    initialValues,
    onSubmit
  );

  return (
    <>
      <section className="form-container" style={{ height: "100vh" }}>
        <div className="form-wrapper ">
          <div className="left">
            <div className="logo-title">
              <div
                style={{
                  width: "250px",
                  height: "100px",
                  marginLeft: "0.5rem",
                }}
              >
                <img
                  src={celebal}
                  alt="celebal"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ width: "80%", margin: "auto" }}>
                <p style={{ fontSize: "2rem", color: "#545A78" }}>
                  Welcome Employees!
                </p>
              </div>
            </div>
            <div
              style={{ height: "370px", width: "460px" }}
              className="left-image"
            >
              <img
                src={signin}
                alt="signin"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="right d-flex flex-column justify-content-center">
            <Form
              formData={formData}
              formErrors={formErrors}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              endText="already have an account"
              route="/"
              formTitle="Sign Up"
              redirectTitle="sign in"
            >
              <div className="field position-relative">
                <label
                  htmlFor="fullname"
                  className="label"
                  style={{ padding: "0.3rem 0" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="fullname"
                  placeholder="Full Name"
                  onChange={handleChange}
                  value={formData?.name}
                />
                {formErrors?.name && (
                  <span className="error-span">
                    <BiErrorCircle style={{ marginRight: "0.2rem" }} />
                    {formErrors?.name}
                  </span>
                )}
              </div>
            </Form>
          </div>
        </div>
      </section>
      <div
        style={{
          backgroundColor: "#2563EB",
          zIndex: "-1",
        }}
        className="position-absolute w-100 h-100 top-0 "
      >
        <img src={bgSvg} alt="background" className="w-100 h-100" />
      </div>
    </>
  );
}

export default SignUp;
