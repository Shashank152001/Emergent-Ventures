import React, { useState, useEffect } from "react";
import "./Profile.css";
import Sidebar from "../Dashboard/sidebar";
import Header from "../Dashboard/Header";
import { useNavigate } from "react-router-dom";
// import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import Avatar from "react-avatar-edit";
import "primeicons/primeicons.css";
import img from '../../Assest/profile.jpg'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ProfileFormData,
  userDetail,
  userUpdate,
} from "../../Service/ProfileService";
import {
  fetchSkills,
  postSkills,
  updateSkills,
} from "../../Service/SkillService";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Form } from "react-router-dom";

function Profile() {
  // const [image, setimage] = useState("");
  const navigate = useNavigate();
  const [imagecrop, setimagecrop] = useState(false);
  const [src, setsrc] = useState(img);
  const [profile, setprofile] = useState([]);
  const [pview, setpview] = useState(false);
  const [poststate, setPostState] = useState(false);
  const [skillstate, setSkillState] = useState(false);
  // const FormData = new URLSearchParams(formDatapost);
  const [profileformdata, setProfileFormData] = useState([]);
  const [skillsdata, setskillsData] = useState([]);

  //Post Profile Data

  const [formData, setFormData] = useState({
    profileImage: "",
    permanentAddress: "",
    city: "",
    state: "",
    country: "",
    emergencyPhone: "",
  });
  const [skillData, setSkillData] = useState({
    primarySkills: "",
    secondarySkills: "",
    certifications: "",
  });

  // console.log(formData);

  useEffect(() => {
    if (poststate) {
      // const userForm = new FormData();
      // for (const key in formData) {

      //   if (formData.hasOwnProperty(key)) {
      //     userForm.append(key, formData[key]);
      //   }
      // }

      // console.log(userForm);

      ProfileFormData().then((data) => {
        if (data.data[0].userId !== null) {
          // console.log(userForm);
          userUpdate(formData)
            .then((data) => {
              navigate("/getProfile");
              toast.success("Profile Updated Successfull", {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            })
            .catch((e) => {
              console.log(e.message);
              toast.error("Could not Connect with Server", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            });
        } else {
          userDetail(formData)
            .then((data) => {
              // console.log(data);
              if (data.message === "User profile created successfully") {
                navigate("/getProfile");
                toast.success("Profile Submitted Successfully", {
                  position: "top-left",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
                console.log("Navigate successfully");
              }
            })
            .catch((e) => {
              console.log(e.message);
              toast.error("Could not Connect with Server", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            });
        }
      });
    }
  }, [poststate]);

  useEffect(() => {
    if (skillstate) {
      fetchSkills()
        .then((data) => {
          console.log(data.data[0]);
          if (data.data[0].userId !== null) {
            updateSkills(skillData)
              .then((data) => {
                console.log(data);
                navigate("/getProfile");
                toast.success("Skills Updated Successfully", {
                  position: "top-left",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              })
              .catch((e) => {
                console.log(e.message);
                toast.error("Could not Connect with Server", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              });
          } else {
            postSkills(skillData).then((data) => {
              console.log(data);
              navigate("/getProfile");
              toast.success("Skills Submitted Successfully", {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            });
          }
        })
        .catch((e) => {
          console.log(e.message);
          toast.error("Could not Connect with Server", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    }
  }, [skillstate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPostState(true);
  };
  const handleSkillSubmit = (event) => {
    event.preventDefault();
    setSkillState(true);
  };
  // useEffect(()=>{
  //   userDetail(userForm).then((data)=>{
  //     console.log(data);
  //   })
  // },[])

  // };

  // console.log(profilefinal);

  const onClose = () => {
    setpview(null);
  };
  const onCrop = (view) => {
    setpview(view);
  };
  const savecropimage = () => {
    // setprofile([...profile, { pview }]);
    // console.log(pview);
    setFormData((prevState) => ({ ...prevState, profileImage: pview }));
    // setsrc(pview);
    // setpview(true)
    // console.log(pview);

    setsrc(pview);
    // console.log(pview);
    setimagecrop(false);
  };
  const profileclick = () => {
    // alert("clicked");
    // console.log("clicked");
    setimagecrop(true);
  };

  //Profile Get Data
  useEffect(() => {
    ProfileFormData()
      .then((profiledata) => {
        console.log(profiledata.data[0].profileImage);

        setProfileFormData(profiledata.data[0]);
        setFormData({
          profileImage: profiledata.data[0].profileImage,
          permanentAddress: profiledata.data[0].permanentAddress,
          city: profiledata.data[0].city,
          state: profiledata.data[0].state,
          country: profiledata.data[0].country,
          emergencyPhone: profiledata.data[0].emergencyPhone,
        });
        // console.log(profiledata.data[0]);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  useEffect(() => {
    fetchSkills().then((data) => {
      console.log(data.data[0]);
      setskillsData(data.data[0]);
      setSkillData({
        primarySkills: data.data[0].primarySkills,
        secondarySkills: data.data[0].secondarySkills,
        certifications: data.data[0].certifications,
      });
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(value);

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSkillChange = (event) => {
    const { name, value } = event.target;
    // console.log(value);

    setSkillData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <div className="main-container ">
        <div className="wrapper d-flex">
          <Sidebar />
          <div
            className="right-sidebar"
            style={{
              position: "absolute",
              width: "87%",
              height: "100%",
              right: "0",
            }}
          >
            <Header />

            <div className="container">
              <div className="formDetail-container">
                <div className="Profile-upload">
                  <h4 className="personal-text">Personal Details</h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="d-flex flex-column ">
                    {profileformdata ? (
                      <>
                        <img
                          className="profile-img"
                          name="image"
                          style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                          onClick={profileclick}
                          src={
                            formData.profileImage ? formData.profileImage : src
                          }
                          alt=""
                          // value={formData.profileImage}
                        />
                      </>
                    ) : (
                      <></>
                    )}

                    <label htmlFor="" className="d-flex justify-content-center">
                      {profileformdata ? profileformdata.name : ""}
                    </label>
                    <Dialog
                      className=""
                      visible={imagecrop}
                      onHide={() => setimagecrop(false)}
                    >
                      <div className=" z-2 position-absolute p-5 card">
                        <p className="">Update Profile</p>
                        <Avatar
                          width={200}
                          height={200}
                          onCrop={onCrop}
                          onClose={onClose}
                          src={src}
                          sheadingColor={"#474649"}
                          backgroundColor={"#00FFFF"}
                          // onFileLoad ={(file)=>{
                          //   console.log(file);
                          //   setFormData((prevState) => ({ ...prevState, profileImage: file }));
                          // }}
                        />
                        <div className=" w-12">
                          <div className=" w-12">
                            <Button
                              className=" btn btn-primary mt-2"
                              onClick={savecropimage}
                              label="save"
                              icon="pi pi-check"
                            />
                          </div>
                        </div>
                      </div>
                    </Dialog>
                  </div>
                  <div className="row name-form">
                    <div className="col">
                      <label className="labels">HRM ID</label>
                      <input
                        type="text"
                        className="form-control"
                        value={profileformdata?.hrmid || "HRM ID"}
                        style={{ backgroundColor: "#EAEAEA" }}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col">
                      <label className="labels">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={profileformdata?.name || "Name"}
                        style={{ backgroundColor: "#EAEAEA" }}
                        onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row name-form">
                    <div className="col">
                      <label className="labels">Job Role</label>
                      <input
                        type="text"
                        className="form-control"
                        value={profileformdata?.role || "Job Role"}
                        style={{ backgroundColor: "#EAEAEA" }}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col">
                      <label className="labels">Reproting Manager</label>
                      <input
                        type="text"
                        className="form-control"
                        value={
                          profileformdata?.reportingManager ||
                          "Reproting Manager"
                        }
                        style={{ backgroundColor: "#EAEAEA" }}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row name-form">
                    <div className="col">
                      <label className="labels">Email ID</label>
                      <input
                        type="text"
                        className="form-control"
                        value={profileformdata?.email || "Email Id"}
                        style={{ backgroundColor: "#EAEAEA" }}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col">
                      <label className="labels"> Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={profileformdata?.password || "Password"}
                        style={{ backgroundColor: "#EAEAEA" }}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row name-form">
                    <div className="col">
                      <label className="labels">Joining Date</label>
                      <input
                        type="date"
                        className="form-control"
                        value={profileformdata?.joiningDate || "Joining Date"}
                        style={{ backgroundColor: "#EAEAEA" }}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col">
                      <label className="labels">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        value={profileformdata?.location || "Location"}
                        style={{ backgroundColor: "#EAEAEA" }}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row name-form">
                    <div className="col">
                      <label className="labels">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        value={profileformdata?.phone || "Phone"}
                        style={{ backgroundColor: "#EAEAEA" }}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col">
                      <label className="labels">Emergency Phone</label>
                      <input
                        type="text"
                        name="emergencyPhone"
                        class="form-control"
                        value={formData.emergencyPhone || ""}
                        placeholder="EmergencyPhone"
                        style={{ backgroundColor: "#EAEAEA" }}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row name-form">
                    <div className="col">
                      <label className="labels">Permanent Address</label>
                      <input
                        type="text"
                        name="permanentAddress"
                        className="form-control"
                        value={formData.permanentAddress || ""}
                        placeholder="Permanent Address"
                        style={{ backgroundColor: "#EAEAEA" }}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col">
                      <label className="labels">City</label>
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        value={formData.city || ""}
                        placeholder="City"
                        style={{ backgroundColor: "#EAEAEA" }}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row name-form">
                    <div className="col">
                      <label className="labels">State</label>
                      <input
                        type="text"
                        name="state"
                        className="form-control"
                        value={formData.state || ""}
                        placeholder="State"
                        style={{ backgroundColor: "#EAEAEA" }}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col">
                      <label className="labels">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        name="country"
                        value={formData.country || ""}
                        placeholder="Country"
                        style={{ backgroundColor: "#EAEAEA" }}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="name-form">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: "15%", height: "40px" }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
                <div className="Profile-SKill mt-3">
                  <h4 className="personal-text">My Skill</h4>
                </div>

                <form onSubmit={handleSkillSubmit}>
                  <div className="row name-form">
                    <div className="d-flex flex-row">
                      <label className="p-1">PrimarySkill</label>

                      <input
                        type="text"
                        className="form-control p-1 pl"
                        name="primarySkills"
                        // value={profileformdata?.hrmid || 'Primary Skill'}
                        placeholder="Primary Skill"
                        style={{ backgroundColor: "#EAEAEA" }}
                        value={skillData.primarySkills || ""}
                        onChange={handleSkillChange}
                      />
                    </div>
                  </div>
                  <div className="row name-form">
                    <div className="d-flex flex-row">
                      <label className="p-1">SecondarySkill</label>
                      <input
                        type="text"
                        name="secondarySkills"
                        className="form-control p-1 sl"
                        placeholder="Secondary Skill"
                        style={{ backgroundColor: "#EAEAEA" }}
                        value={skillData.secondarySkills || ""}
                        onChange={handleSkillChange}
                      />
                    </div>
                  </div>
                  <div className="row name-form">
                    <div className="d-flex flex-row">
                      <label className="p-1">Certification</label>
                      <input
                        type="text"
                        name="certifications"
                        className="form-control p-1 certificate"
                        placeholder="Certification"
                        style={{ backgroundColor: "#EAEAEA" }}
                        value={skillData.certifications || ""}
                        onChange={handleSkillChange}
                      />
                    </div>
                  </div>

                  <div className="name-form">
                    <button
                      type="submit"
                      className="btn btn-success"
                      style={{ width: "15%", height: "40px" }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
