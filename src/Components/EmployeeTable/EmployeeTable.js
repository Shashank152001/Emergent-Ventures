import { useState } from 'react';
import './EmployeeTable.css';


let data = [
    {
        EmployeeName: "akash15",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "Harsh16",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "Harsh17",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "prajwal",
        EmployeeId: "hrm223",
        Department: "node",
        JobRole: "dev",
        Location: "Hudacity"
    }, {
        EmployeeName: "Harsh19",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur6"
    },
     {
        EmployeeName: "Harsh9",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "srivasya10",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "Rahul11",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "Harsh12",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "Harsh13",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "Harsh14",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "akash15",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "Harsh16",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "Harsh17",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "Harsh18",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "Harsh19",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur6"
    },
    {
        EmployeeName: "shashank",
        EmployeeId: "hrm0987",
        Department: "software",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "Ajeet",
        EmployeeId: "hrm223",
        Department: "Node",
        JobRole: "Backend",
        Location: "jaipur"
    }, {
        EmployeeName: "srivasya10",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "Rahul11",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "Kruna",
        EmployeeId: "hrm223",
        Department: "Intern",
        JobRole: "dev",
        Location: " Pune"
    }, {
        EmployeeName: "Harsh13",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "Harsh14",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "akash15",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "Harsh16",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "Harsh17",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur"
    }, {
        EmployeeName: "prajwal",
        EmployeeId: "hrm223",
        Department: "node",
        JobRole: "dev",
        Location: "Hudacity"
    }, {
        EmployeeName: "Harsh19",
        EmployeeId: "hrm223",
        Department: "app",
        JobRole: "dev",
        Location: "jaipur6"
    }
];

function EmployeeTable() {

    const [curentPage, setCurrentPage] = useState(1);
    const recordPerPage = 10;
    const lastIndex = curentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = data.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(data.length/ recordPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);

    return (
        <>
            <div className='main-div'>

                <div className='tables'>

                    <table className='tabledata table' id="table" >
                        <thead className="theading  " >
                            <tr>
                                <th scope="col-sm-3"  >Employee Name</th>
                                <th scope="col-sm-3" >Employee Id</th>
                                <th scope="col-sm-3" >Departmenrt</th>
                                <th scope="col-sm-3" > Job Role</th>
                                <th scope="col-sm-3" >Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.EmployeeName}</td>
                                    <td>{d.EmployeeId}</td>
                                    <td>{d.Department}</td>
                                    <td>{d.JobRole}</td>
                                    <td>{d.Location}</td>
                                </tr>

                            ))}


                        </tbody>

                    </table>
                    <nav className='pagging'>
                        <div className=" row pag">
                            <div className='col-sm-4 pagination page-item '>

                                <a href="#" className='a3' onClick={prePage} > ❮ </a>
                                < a href="#" className='a3' onClick={prePage} > Previous </a>
                                
                            </div>
                            
                            <div className='col-sm-4 pagination m-t-2 p-2 a2'>

                            {
                                numbers.map((n, i) => (
                                    <div className=  {`page-item  ${curentPage === n ? 'active' : ''} `} key={i} >
                                   {curentPage==n ?( <a href='#' className='page-item pre pagenumber' onClick={()=> changecPage(n)} >  {n}  </a>):
                                   ( <a href='#' className='page-item pre' onClick={()=> changecPage(n)} >  {n}  </a>)}
                                       
                                    </div>
                                ))
                            }
                            </div>
                            <div className='col-sm-4 pagination '>
                                < a className='Next a1' href="#" onClick={nextPage} >Next</a>
                                <a href="#"  className='next a1' onClick={nextPage} >❯</a>
                            </div>
                        </div>
                    </nav>


                </div>
            </div>
        </>
    )
    function prePage(){
    if (curentPage!==firstIndex && curentPage>1)
    {    
        setCurrentPage(curentPage-1)
        
    }
    }
    function changecPage(id){
           setCurrentPage(id)
    }
    function nextPage(){
        if (curentPage!==lastIndex && curentPage<nPage)  
        {
           
            setCurrentPage(curentPage+1)
        }
    }
}
export default EmployeeTable;