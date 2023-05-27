import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";
import { ProfileFormData } from "../../Service/ProfileService";
import { fetchSkills } from "../../Service/SkillService";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "primeicons/primeicons.css";
import "./Profile.css";

function GetProfile() {
  const { setProfileFormdata } = useContext(LoginContext);
  const [profileFormData, setProfileFormData] = useState(null);
  const [skilldata, setSkillData] = useState([]);

  // Profile Get Data
  useEffect(() => {
    ProfileFormData()
      .then((data) => {
        setProfileFormdata({
          name: data.profile.name,
          profileImage: data.profile.profileImage,
          userId: data.profile.userId,
        });
        setProfileFormData(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  useEffect(() => {
    fetchSkills().then((data) => {
      setSkillData(data);
    });
  }, []);

  return (
    <>
      <div className="profile-container">
        <div className="wallpaper-div">
          <div className="wallpaper-profile-image-div">
            <img
              className="profile-image"
              name="image"
              src={profileFormData?.profile?.profileImage}
              alt=""
            />
          </div>
          <div className="wallpaper-profile-info-div">
            <ul className="wallpaper-profile-info">
              <li>
                {profileFormData?.profile?.hrmid || ""} -{" "}
                {profileFormData?.profile?.name || ""}
              </li>
              <li>{profileFormData?.profile?.role || ""}</li>
              <li>{profileFormData?.profile?.department || ""}</li>
              <li>{profileFormData?.profile?.email || ""}</li>
            </ul>
          </div>
        </div>

        <div className="profile-options-div">
        <Link
            to="/dashboard/chart"
            style={{
              textDecoration: "none",
              color: "rgb(61, 172, 143)",
            }}
          >
            Organization Hierarchy
          </Link>

          <Link className="profile-options" to="/dashboard/profile">
            <h5 className="profile-options-h" style={{ margin: "0" }}>
              Edit
            </h5>
          </Link>

          
        </div>
        <div className="profile-details-div">
          <div className="first-column">
            <div className="about-me-div profile-details-div-common">
              <div className="inner-details-title-div">
                <div className="notch"></div>
                <span className="inner-details-title">About Me</span>
              </div>
              <div className="profile-details-content-div">
                <div className="inner-details-div">
                  <div className="profile-detail-field-div">
                    <span style={{ padding: "1rem", fontSize: "1.4rem" }}>
                      <i className="bi bi-diagram-3"></i>
                    </span>
                    <span style={{ padding: "1rem" }}>
                      {profileFormData?.profile?.department || ""}
                    </span>
                  </div>
                  <div className="profile-detail-field-div">
                    <span style={{ padding: "1rem", fontSize: "1.4rem" }}>
                      <i className="bi bi-people"></i>
                    </span>
                    <span style={{ padding: "1rem" }}>
                      {profileFormData?.profile?.role || ""}
                    </span>
                  </div>
                </div>
                <div className="inner-details-div">
                  <div className="profile-detail-field-div">
                    <span style={{ padding: "1rem", fontSize: "1.4rem" }}>
                      <i className="bi bi-phone"></i>
                    </span>
                    <span style={{ padding: "1rem" }}>
                      +91 {profileFormData?.profile?.phone || ""}
                    </span>
                  </div>
                  <div className="profile-detail-field-div">
                    <span style={{ padding: "1rem", fontSize: "1.4rem" }}>
                      <i className="bi bi-geo-alt"></i>
                    </span>
                    <span style={{ padding: "1rem" }}>
                      {profileFormData?.profile?.location || ""}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="personal-div profile-details-div-common">
              <div className="inner-details-title-div">
                <div className="notch"></div>
                <span className="inner-details-title">Personal</span>
              </div>
              <div className="profile-details-content-div">
                <div className="profile-detail-field-div">
                  <span className="inner-detail-field-title">
                    Permanent Address
                  </span>
                  <span className="inner-detail-field-value">
                    {profileFormData?.profile?.permanentAddress || ""}
                  </span>
                </div>
                <div className="profile-detail-field-div">
                  <span className="inner-detail-field-title">City</span>
                  <span className="inner-detail-field-value">
                    {profileFormData?.profile?.city || ""}
                  </span>
                </div>
                <div className="profile-detail-field-div">
                  <span className="inner-detail-field-title">State</span>
                  <span className="inner-detail-field-value">
                    {profileFormData?.profile?.state || ""}
                  </span>
                </div>
                <div className="profile-detail-field-div">
                  <span className="inner-detail-field-title">Country</span>
                  <span className="inner-detail-field-value">
                    {profileFormData?.profile?.country || ""}
                  </span>
                </div>
                <div className="profile-detail-field-div">
                  <span className="inner-detail-field-title">
                    Emergency Phone
                  </span>
                  <span className="inner-detail-field-value">
                    +91 {profileFormData?.profile?.emergencyPhone || ""}
                  </span>
                </div>
              </div>
            </div>
            <div className="skills-div profile-details-div-common">
              <div className="inner-details-title-div">
                <div className="notch"></div>
                <span className="inner-details-title">Skills</span>
              </div>
              <div className="profile-details-content-div">
                <div className="profile-detail-field-div">
                  <span className="inner-detail-field-title">
                    Primary Skills
                  </span>
                  <span className="inner-detail-field-value">
                    {skilldata?.primarySkills || ""}
                  </span>
                </div>
                <div className="profile-detail-field-div">
                  <span className="inner-detail-field-title">
                    Secondary Skills
                  </span>
                  <span className="inner-detail-field-value">
                    {skilldata?.secondarySkills || ""}
                  </span>
                </div>
                <div className="profile-detail-field-div">
                  <span className="inner-detail-field-title">
                    Certifications
                  </span>
                  <span className="inner-detail-field-value">
                    {skilldata?.certifications || ""}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="second-column">
            {profileFormData?.reportingManager ? (
              <div className="reporting-to-div  profile-details-div-common">
                <div className="inner-details-title-div">
                  <div className="notch"></div>
                  <span className="inner-details-title">Reporting To</span>
                </div>
                <div className="profile-details-content-div">
                  <div className="profile-details-card-div">
                    <div className="profile-details-card-image-div">
                      <img
                        className="profile-image-mini"
                        name="image"
                        src={profileFormData?.reportingManager?.profileImage}
                        alt=""
                      />
                    </div>

                    <div className="profile-details-card-content-div">
                      <div>
                        <span style={{ fontSize: "0.9rem" }}>
                          {profileFormData?.reportingManager?.hrmid || ""}
                          <span> - </span>
                        </span>
                        <span
                          style={{
                            fontWeight: "bold",
                            fontSize: "0.9rem",
                          }}
                        >
                          {profileFormData?.reportingManager?.name || ""}
                        </span>
                      </div>
                      <div>
                        <span>
                          {profileFormData?.reportingManager?.role || ""}
                          <span> - </span>
                        </span>
                        <span>
                          {profileFormData?.reportingManager?.department || ""}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}

            {profileFormData?.subordinates ? (
              <div className="direct-reports-div profile-details-div-common">
                <div className="inner-details-title-div">
                  <div className="notch"></div>
                  <span className="inner-details-title">Direct Reports</span>
                </div>
                <div className="profile-details-content-div">
                  {profileFormData?.subordinates.map((subordinate) => {
                    return (
                      <div className="profile-details-card-div">
                        <div className="profile-details-card-image-div">
                          <img
                            className="profile-image-mini"
                            name="image"
                            src={subordinate?.profileImage}
                            alt=""
                          />
                        </div>
                        <div className="profile-details-card-content-div">
                          <div>
                            <span style={{ fontSize: "0.9rem" }}>
                              {subordinate?.hrmid || ""}
                              <span> - </span>
                            </span>
                            <span
                              style={{
                                fontWeight: "bold",
                                fontSize: "0.9rem",
                              }}
                            >
                              {subordinate?.name || ""}
                            </span>
                          </div>
                          <div>
                            <span>
                              {subordinate?.role || ""}
                              <span> - </span>
                            </span>
                            <span>{subordinate?.department || ""}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <></>
            )}

            <div className="work-div profile-details-div-common">
              <div className="inner-details-title-div">
                <div className="notch"></div>
                <span className="inner-details-title">Work</span>
              </div>
              <div className="profile-details-content-div">
                <div className="profile-detail-field-div">
                  <span className="inner-detail-field-title">Employee ID</span>
                  <span className="inner-detail-field-value">
                    {profileFormData?.profile?.hrmid || ""}
                  </span>
                </div>
                <div className="profile-detail-field-div">
                  <span className="inner-detail-field-title">Email</span>
                  <span className="inner-detail-field-value">
                    {profileFormData?.profile?.email || ""}
                  </span>
                </div>
                <div className="profile-detail-field-div">
                  <span className="inner-detail-field-title">Role</span>
                  <span className="inner-detail-field-value">
                    {profileFormData?.profile?.role || ""}
                  </span>
                </div>
                <div className="profile-detail-field-div">
                  <span className="inner-detail-field-title">Department</span>
                  <span className="inner-detail-field-value">
                    {profileFormData?.profile?.department || ""}
                  </span>
                </div>
                <div className="profile-detail-field-div">
                  <span className="inner-detail-field-title">
                    Reporting Manager
                  </span>
                  <span className="inner-detail-field-value">
                    {profileFormData?.profile?.reportingManager || ""}
                  </span>
                </div>
                <div className="profile-detail-field-div">
                  <span className="inner-detail-field-title">
                    Date Of Joining
                  </span>
                  <span className="inner-detail-field-value">
                    {profileFormData?.profile?.joiningDate || ""}
                  </span>
                </div>
                <div className="profile-detail-field-div">
                  <span className="inner-detail-field-title">
                    Office Location
                  </span>
                  <span className="inner-detail-field-value">
                    {profileFormData?.profile?.location || ""}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default GetProfile;
