import React, { useState, useEffect } from "react";
import "./skill.css";
import NoRecord from "../Project/norecord";
import { fetchSkills } from "../../Service/SkillService";

function Skill() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchSkills()
      .then((data) => {
        setUserData(data[0]);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <section className="skills-container">
      <div className="skills-heading">
        <h1 style={{ fontSize: "1.5rem" }}>My Skills</h1>
      </div>

      <div className="skill-content">
        {userData ? (
          <>
            <div className="primary-skills">
              <h6 className="skill-title">Primary Skills</h6>
              <div className="content-wrapper">
                <p className="skill-content">{userData?.primarySkills || ""}</p>
              </div>
            </div>

            <div className="primary-skills">
              <h6 className="skill-title">Secondary Skills</h6>
              <div className="content-wrapper">
                <p className="skill-content">
                  {userData?.secondarySkills || ""}
                </p>
              </div>
            </div>

            <div className="primary-skills">
              <h6 className="skill-title">Certifications</h6>
              <div className="content-wrapper">
                <p className="skill-content border-none p" >
                  {userData?.certifications || ""}
                </p>
              </div>
            </div>
          </>
        ) : (
          <NoRecord />
        )}
      </div>
    </section>
  );
}

export default Skill;
