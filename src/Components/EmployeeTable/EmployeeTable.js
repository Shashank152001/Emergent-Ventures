import './EmployeeTable.css';



function EmployeeTable() {

    var data = [
        {
            EmployeeName: "",
            EmployeeId: "",
            Department: "",
            JobRole: "",
            Location: ""
        }];



    return (
        <>
            <div className='main-div'>
                <div className='container'>

                    <table className='tabledata table' id="table" data-show-header="true" data-pagination="true" data-id-field="name" data-page-list="[5, 10, 25, 50, 100, ALL]" data-page-size="5">
                        <thead className="theading  bg-primary" >
                            <tr>
                                <th scope="col" data-field="EmployeeName" data-formatter="nameFormatter">Employee Name</th>
                                <th scope="col" data-field="EmployeeId" data-formatter="nameFormatter">Employee Id</th>
                                <th scope="col" data-field="Department" data-formatter="nameFormatter">Departmenrt</th>
                                <th scope="col" data-field="JobRole" data-formatter="nameFormatter"> Job Role</th>
                                <th scope="col" data-field="Location" data-formatter="nameFormatter">Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>

                    </table>

                    <div className=" row pag">

                        <ul class="pagination justify-content-center">
                            <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1">Previous</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1">Next</a>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </>
    )
}
export default EmployeeTable;