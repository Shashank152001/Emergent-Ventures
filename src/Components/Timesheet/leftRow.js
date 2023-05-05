import React from 'react';
import './Timesheet.css';
const LeftRow = ({ row ,handlechange}) => {
	

	return (
		<tbody>
			<tr>
				<td style={{ textAlign: 'center' }}>{row}.</td>
				<td>
					<select className='left-table-td' name = 'clientName' onChange={handlechange}>
						<option value=''>Select Client</option>
						<option value='CT-L&D'>CT-L&D</option>
						<option value='CT-LMS'>CT-LMS</option>
					</select>
				</td>
				<td>
					<select className='left-table-td' onChange={handlechange} name="projectName">
						<option value=''>Select Project</option>
						<option value='Zoho People'>Zoho People</option>
						<option value='Zoho People'>Zoho People</option>
					</select>
				</td>
				<td>
					<select className='left-table-td' onChange={handlechange} name="jobName">
						<option value=''>Select Job</option>
						<option value='Frontend'>Frontend</option>
						<option value='Backend'>Backend</option>
					</select>
				</td>
			</tr>
		</tbody>
	);
};

export default LeftRow;
