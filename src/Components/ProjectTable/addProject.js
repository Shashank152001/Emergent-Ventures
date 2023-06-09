

import "./addproject.css";

const AddProject = ({setAddOpen}) => {
  return (
    <section className="section-parent">
    <div className="parent-container-form">
      <div className="form-container">
      <div>
        <h2 className="form-project-title">Add Project</h2>
      </div>
        <form className="admin-form">
          <div className="row-field" style={{ padding:'10px 0 0 10px'}}>
           
            <input
              type="text"
              name="projectName"
              id="projectName"
              className="field-size input-form"
              required
            />
             <label htmlFor="projectName" className="text-start label-form">
              ProjectName:
            </label>
          </div>
          <div className="row-field " style={{ padding:'10px 0 0 10px'}}>
           
            <input
              type="text"
              name="clientName"
              id="clientName"
              className="field-size input-form"
              required
            />
             <label htmlFor="clientName" className="text-start label-form">
              ClientName:
            </label>
          </div>

          <div className="row-field date-row-field" style={{ padding:'10px 0 0 10px'}}>
            <div className="row-field" style={{ padding:'10px 0 0 10px'}}>
              
              <input
                type="text"
                name="assignedOn"
                id="assignedOn"
                className="field-size input-form"
                onFocus={(event)=>{
                    event.target.type = "date"
                }}
                onBlur={(event)=>{
                    event.target.type = "type"
                }}

                required
                
              />
              <label htmlFor="assignedOn"className="label-form" >
                AssignedOn:
              </label>
            </div>

            <div className="row-field" style={{ padding:'10px 0 0 10px'}}>
            
              <input
                type="text"
                name="completeBy"
                id="completeBy"
                className="field-size input-form"
                onFocus={(event)=>{
                    event.target.type = "date"
                }}
                onBlur={(event)=>{
                    event.target.type = "type"
                }}
                required
              />
              <label htmlFor="completeBy" className="label-form">
                CompleteBy:
              </label>
            </div>
          </div>


          <div className="row-field" style={{ padding:'10px 0 0 10px'}}>
           
            <input
              type="text"
              name="teamHead"
              id="teamHead"
              className="field-size input-form"
              required
            />
               <label htmlFor="teamHead" className="text-start label-form">
              TeamHead:
            </label>
          </div>
          <div className="row-field " style={{ padding:'10px 0 0 10px'}}>
            
            <input
              type="text"
              name="teamMembers"
              id="teamMembers"
              className="field-size input-form"
              required
            />
            <label htmlFor="teamMembers" className="text-start label-form">
              TeamMembers:
            </label>
          </div>
          <div className="row-field " style={{ padding:'10px 0 0 10px'}}>
           
            <input
              type="text"
              name="department"
              id="Department"
              className="field-size input-form"
              required
            />
             <label htmlFor="Department" className="text-start label-form">
              Department:
            </label>
          </div>
          <div className="form-submit-button row-field flex-row justify-content-center">
            <button type="submit" className="form-submit-btn"
             style={{
              width:'45%'
            }}>
              Submit
            </button>
            <button type="submit" className="form-submit-btn bg-danger"
             style={{
              width:'45%'
            }}
            onClick={()=>{setAddOpen(false)
              document.getElementById('scroll-hidden').style.overflow = 'visible';}}>
              close
            </button>
          </div>

        </form>
      </div>
    </div>
    </section>
  );
};

export default AddProject;
