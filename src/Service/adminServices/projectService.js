import { url } from '../../Constant/Url';

export const getProjects = async () => {
	const response = await fetch(url + 'admin/projects/get-projects', {
		mode: 'cors',
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include'
	});

	if (!response.ok) {
		throw new Error('Data could not be fetched');
	} else {
		return await response.json();
	}
};
