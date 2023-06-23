import React, { useState, useEffect } from 'react';
import './Skill.css';
import NoRecord from '../Project/NoRecord';
import { fetchSkills } from '../../Service/SkillService';

function Skill() {
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		fetchSkills()
			.then((data) => {
				setUserData(data);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, []);

	return (
		<section className='skills-container'>
			<div className='skills-heading'>
				<h1 style={{ fontSize: '1.5rem' }}>My Skills</h1>
			</div>

			<div className='skill-content'>
				{userData ? (
					<>
						<div className='primary-skills'>
							<h6 className='skill-title h6'>Primary Skills</h6>
							<div className='content-wrapper'>
								<p className='skill-content p'>{userData?.primarySkills || ''}</p>
							</div>
						</div>

						<div className='primary-skills'>
							<h6 className='skill-title h6'>Secondary Skills</h6>
							<div className='content-wrapper'>
								<p className='skill-content p'>{userData?.secondarySkills || ''}</p>
							</div>
						</div>

						<div className='primary-skills'>
							<h6 className='skill-title h6'>Certifications</h6>
							<div className='content-wrapper'>
								<p className='skill-content border-none p'>{userData?.certifications || ''}</p>
							</div>
						</div>
					</>
				) : (
					<NoRecord />
				)}
			</div>
		</section>
	);
}

export default Skill;
