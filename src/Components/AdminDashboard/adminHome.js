import EmployeeTable from '../EmployeeTable/EmployeeTable';
import ProjectTable from '../ProjectTable/ProjectTable';

function AdminHome() {
	return (
		<>
			<div className='content-inner'>
				<div className='row gx-3' style={{ padding: '0 1rem', marginTop: '1rem' }}>
					<div className='col-12'>
						<EmployeeTable />
					</div>

					<div className='col-12'>
						<ProjectTable />
					</div>
				</div>
			</div>
		</>
	);
}

export default AdminHome;
