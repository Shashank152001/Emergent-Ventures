import { url } from '../Constant/Url';

export const UserCheckIn = async (formData) => {
	const response = await fetch(url + 'user/check-in', {
		method: 'POST',
		mode: 'cors',
		credentials: 'include',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams(formData)
	});

	if (!response.ok) {
		throw new Error('not checked in');
	} else {
		return response.json();
	}
};

export const UserCheckOut = async (formDataOut) => {
	const response = await fetch(url + 'user/check-out', {
		method: 'PUT',
		mode: 'cors',
		credentials: 'include',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams(formDataOut)
	});
	if (!response.ok) {
		throw new Error('not checked out');
	} else {
		return response.json();
	}
};
export const fetchCurrentCheckinTime = async () => {
	const response = await fetch(url + 'user/get-user-current-attendance', {
		mode: 'cors',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include'
	});
	// console.log(response)
	if (!response.ok) {
		throw new Error('Data could not be fetched');
	} else {
		return await response.json();
	}
};

export const fetchCurrentTime = () => {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	if (hours === 24) {
		hours = 0;
	}
	if (hours < 10) {
		hours = '0' + hours;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	return hours + ':' + minutes + ':' + seconds;
};

export const getTimeDifference = (time1, time2, date) => {
	const date1 = new Date(`${date} ${time1}`);
	const date2 = new Date(`${date} ${time2}`);
	let diff = Math.abs((date2.getTime() - date1.getTime()) / 1000);
	let seconds = Math.floor(diff) % 60;
	if (seconds < 10 || seconds === 0) {
		seconds = '0' + seconds;
	}
	diff /= 60;
	let minutes = Math.floor(diff) % 60;
	if (minutes < 10 || minutes === 0) {
		minutes = '0' + minutes;
	}
	diff /= 60;
	let hours = Math.floor(diff) % 24;
	if (hours < 10 || hours === 0) {
		hours = '0' + hours;
	}
	return hours + ':' + minutes + ':' + seconds;
};
