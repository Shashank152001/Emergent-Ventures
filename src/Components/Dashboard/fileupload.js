import React, { useEffect, useState } from "react";
import { bulkData } from "../../Service/FileUploadService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FileUpload({ isOpen, onClose }) {

  const [file, setFile] = useState(null);
  const [isFilled, setFilled] = useState(false);

  
  useEffect(()=>{
    
    if(isFilled){

      const formData = new FormData();
      formData.append("csvFile", file);

      bulkData(formData)
      .then((data) => {
        
        toast.info("File Uploaded Successfully", {
          position: "top-right",
          autoClose: 2000,
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
      });

    }

    return ()=>{
      setFilled(false);
      setFile(null);
    }


  },[isFilled])

  const handleClose = () => {
    onClose();
  };

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setFilled(true);
  };


  return (
    <>
      {isOpen && (
        <div className="modal modal-item">
          <div className="modal-content">
            <div style={{ height: "100%" }}>
              <form
                style={{ height: "100%", padding: "0.8rem 0" }}
                onSubmit={handleOnSubmit}
              >
                <input
                  type="file"
                  name="file"
                  id="name"
                  accept=".csv"
                  required
                  onChange={handleOnChange}
                />
                <div
                  style={{
                    padding: "1.6rem 0",
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    onClick={handleClose}
                    style={{
                      outline: "none",
                      border: "none",
                      borderRadius: "4px",
                      padding: "0.4rem 0.8rem",
                      backgroundColor: "#b2260f",
                      color: "#fff",
                    }}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    style={{
                      outline: "none",
                      border: "none",
                      borderRadius: "4px",
                      padding: "0.4rem 0.8rem",
                      backgroundColor: "#109865",
                      color: "#fff",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FileUpload;
