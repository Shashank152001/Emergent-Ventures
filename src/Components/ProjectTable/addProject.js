

import "./addproject.css";

const AddProject = () => {
  return (
    <section className="section-parent">
    <div className="parent-container-form">
      <div className="form-container">
      <div>
        <h2 className="form-project-title">Add Project</h2>
      </div>
        <form>
          <div className="row-field">
           
            <input
              type="text"
              name="projectName"
              id="projectName"
              className="field-size"
              required
            />
             <label htmlFor="projectName" className="text-start">
              ProjectName:
            </label>
          </div>
          <div className="row-field ">
           
            <input
              type="text"
              name="clientName"
              id="clientName"
              className="field-size"
              required
            />
             <label htmlFor="clientName" className="text-start">
              ClientName:
            </label>
          </div>

          <div className="row-field date-row-field">
            <div className="row-field">
              
              <input
                type="text"
                name="assignedOn"
                id="assignedOn"
                className="field-size"
                onFocus={(event)=>{
                    event.target.type = "date"
                }}
                onBlur={(event)=>{
                    event.target.type = "type"
                }}

                required
                
              />
              <label htmlFor="assignedOn" >
                AssignedOn:
              </label>
            </div>

            <div className="row-field">
            
              <input
                type="text"
                name="completeBy"
                id="completeBy"
                className="field-size"
                onFocus={(event)=>{
                    event.target.type = "date"
                }}
                onBlur={(event)=>{
                    event.target.type = "type"
                }}
                required
              />
              <label htmlFor="completeBy">
                CompleteBy:
              </label>
            </div>
          </div>


          <div className="row-field">
           
            <input
              type="text"
              name="teamHead"
              id="teamHead"
              className="field-size"
              required
            />
               <label htmlFor="teamHead" className="text-start">
              TeamHead:
            </label>
          </div>
          <div className="row-field ">
            
            <input
              type="text"
              name="teamMembers"
              id="teamMembers"
              className="field-size"
              required
            />
            <label htmlFor="teamMembers" className="text-start">
              TeamMembers:
            </label>
          </div>
          <div className="row-field ">
           
            <input
              type="text"
              name="department"
              id="Department"
              className="field-size"
              required
            />
             <label htmlFor="Department" className="text-start">
              Department:
            </label>
          </div>
          <div className="form-submit-button">
            <button type="submit" className="form-submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </section>
  );
};

export default AddProject;
