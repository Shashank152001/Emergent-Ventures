
import "./addproject.css";

const EditProject = ({setEditOpen}) => {
  return (
    <section className="section-parent">
    <div className="parent-container-form">
      <div className="form-container">
      <div>
        <h2 className="form-project-title">Edit Project</h2>
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
         
          <div className="row-field date-row-field" style={{ padding:'10px 0 0 10px'}}>     
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
          <div className="row-field " style={{ padding:'10px 0 0 10px'}}>
           
           <input
             type="text"
             name="status"
             id="status"
             className="field-size input-form"
             required
           />
            <label htmlFor="status" className="text-start label-form">
             status:
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
            onClick={()=>{setEditOpen(false)
              document.getElementById('scroll-hidden').style.overflow = 'visible';}}
            style={{
              width:'45%'
            }}>
              close
            </button>
          </div>
        </form>
      </div>
    </div>
    </section>
  );
};

export default EditProject;