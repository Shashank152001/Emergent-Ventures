import "./addproject.css";

const AdminUpdateUser = ({setEditOpen}) => {

  return (
    <section className="section-parent">
    <div className="parent-container-form">
      <div className="form-container">
      <div>
        <h2 className="form-project-title">Update User</h2>
      </div>
        <form className="admin-form">
         
          <div className="row-field "  style={{ padding:'10px 0 0 10px'}}>
           
            <input
              type="text"
              name="role"
              id="role"
              className="field-size input-form"
              required
            />
             <label htmlFor="role" className="text-start label-form">
              Role:
            </label>
          </div>

          <div className="row-field  "   style={{ padding:'10px 0 0 10px'}}>
           
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

          <div className="row-field "   style={{ padding:'10px 0 0 10px'}}>
           
            <input
              type="text"
              name="location"
              id="location"
              className="field-size input-form"
              required
            />
             <label htmlFor="location" className="text-start label-form">
              Location:
            </label>
          </div>

         
          <div className="form-submit-button row-field flex-row justify-content-around">
            <button type="submit" className="form-submit-btn" style={{
              width:'45%'
            }}>
              Submit
            </button>
            <button type="submit" className="form-submit-btn bg-danger"
            style={{
              width:'45%'
            }}
            onClick={()=>{setEditOpen(false)
              document.getElementById('scroll-hidden').style.overflow = 'visible';
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

export default AdminUpdateUser;