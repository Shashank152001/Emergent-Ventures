import { Link } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";

function Form({ formData, formErrors, handleSubmit, handleChange,children,endText,route,formTitle,redirectTitle}) {
  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <div>
          <h1 className="form-title">{formTitle}</h1>
        </div>
        <div>

          {children}

          <div className="field position-relative">
            <label
              htmlFor="email"
              className="label"
              style={{ padding: "0.3rem 0" }}
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />
            {formErrors?.email && (
              <span className="error-span"><BiErrorCircle style={{marginRight:'0.2rem'}}/>{formErrors?.email}</span>
            )}
          </div>

          <div className="field position-relative">
            <label
              htmlFor="password"
              className="label"
              style={{ padding: "0.3rem 0" }}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
            />
            {formErrors?.password && (
              <span className="error-span"><BiErrorCircle style={{marginRight:'0.2rem'}}/>{formErrors?.password}</span>
            )}
          </div>

          <div></div>
          <div style={{ margin: "1rem 0" }}>
            <button
              type="submit"
              style={{
                padding: "0.6rem 2.6rem",
                color: "#fff",
                backgroundColor: "#2563EB",
                border: "none",
                outline: "none",
                borderRadius: "6px",
              }}
            >
              Submit
            </button>
          </div>

          <div>
            <p>
              {endText}?<Link to={route}>{redirectTitle}</Link>
            </p>
          </div>

		  

        </div>
      </form>
    </>
  );
}

export default Form;
