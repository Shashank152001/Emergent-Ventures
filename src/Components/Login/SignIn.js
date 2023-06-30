import { useNavigate } from "react-router-dom";
import celebal from "../../Assest/celebal.png";
import signin from "../../Assest/singin.png";
import { userLogin } from "../../Service/LoginService";
import bgSvg from "../Spheres.svg";
import { success } from "../../Utils/SuccessToast";
import { Error } from "../../Utils/ErrorToast";
import { serverError } from "../../Utils/ServerToast";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "../../hooks/formhook";
import Form from "../ReusableComponents/form";
import "../ReusableComponents/form.css";

function SignIn() {
  const navigate = useNavigate();

  const initialValues = {
    email:"",
    password: ""
  };

  const onSubmit = (formData) => {
    const bodyData = formData;

    userLogin(bodyData)
      .then(async (response) => {
        const msg = await response.json().then((data) => {
          return data.message;
        });

        if (response.status === 201) {
          navigate("/dashboard");
          success(msg);
          localStorage.setItem("loggedInUser", "1");
        } else {
          navigate("/");
          Error(msg);
        }
      })
      .catch((e) => {
        navigate("/");
        serverError();
      });
  };

  const { formData, formErrors, handleSubmit, handleChange } = useForm(
    initialValues,
    onSubmit
  );



  return (
    <>
      <section className="form-container position-relative">
        <div className="form-wrapper">
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
                loading="lazy"
              />
            </div>
          </div>
          <div className="right d-flex flex-column justify-content-center">
            <Form
              formData={formData}
              formErrors={formErrors}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              endText="Don't have an account"
              route="/signup"
              formTitle="Sign In"
              redirectTitle="sign up"
            />
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

export default SignIn;
