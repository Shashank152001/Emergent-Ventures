import React from "react";
import error from '../../Assest/error.png'
function ErrorPage() {
  return (
    <div
      className="text-center fs-1 mt-4 d-flex flex-column 
    justify-content-center align-items-center"
    style={{height:"100%"}}>
      <img
        src={error}
        alt="error"
        className="img-fluid mx-auto d-block"
      />
      <p className="text-center text-danger fs-1">Oops! page not found</p>
    </div>
  );
}

export default ErrorPage;
