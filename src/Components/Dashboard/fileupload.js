import React,{useState} from "react";
function FileUpload({ isOpen, onClose }) {

  const handleClose = () => {
    onClose();
  };

  


  return (
    <>
      {isOpen && (
        <div className="modal modal-item">
          <div className="modal-content">
             <div style={{height:"100%"}}>
              <form style={{height:'100%',padding:"0.8rem 0"}} >
                 <input type='file' name='file' id='name'/>
                 <div style={{padding:'1.6rem 0',display:'flex',width:'100%',justifyContent:"space-between"}}>
                 <button onClick={handleClose} style={{outline:'none',border:'none',borderRadius:"4px",padding:'0.4rem 0.8rem',backgroundColor:'#b2260f',color:'#fff'}}>Close</button>
                 <button type='submit' style={{outline:'none',border:'none',borderRadius:"4px",padding:'0.4rem 0.8rem',backgroundColor:'#109865',color:'#fff'}}>Submit</button>
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
