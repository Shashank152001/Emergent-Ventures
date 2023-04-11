import React,{useState} from "react";
import {bulkData} from '../../Service/FileUploadService'
function FileUpload({ isOpen, onClose }) {
  const [file, setFile] = useState();
  const fileReader = new FileReader();
  const handleClose = () => {
    onClose();
  };
  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
    // console.log(file)
};
const handleOnSubmit = (e) => {
  e.preventDefault();
  console.log(file)
    const formData = new FormData();
    formData.append("csvFile", file);
      // console.log(fileReader);
        bulkData(formData).then((data)=>{
          console.log(data)
        })

  };
  return (
    <>
      {isOpen && (
        <div className="modal modal-item">
          <div className="modal-content">
             <div style={{height:"100%"}}>
              <form style={{height:'100%',padding:"0.8rem 0"}} onSubmit={handleOnSubmit}>
                 <input type='file' name='file' id='name' accept=".csv" required onChange={handleOnChange}/>
                 <div style={{padding:'1.6rem 0',display:'flex',width:'100%',justifyContent:"space-between"}}>
                 <button onClick={handleClose} style={{outline:'none',border:'none',borderRadius:"4px",padding:'0.4rem 0.8rem',backgroundColor:'#b2260f',color:'#fff'}}>Close</button>
                 <button type='submit' style={{outline:'none',border:'none',borderRadius:"4px",padding:'0.4rem 0.8rem',backgroundColor:'#109865',color:'#fff' }}>Submit</button>
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
