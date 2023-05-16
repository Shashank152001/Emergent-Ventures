import React, { useState, useEffect, useContext } from 'react';
import { useRef } from 'react';
import { BiBell, BiChevronDown, BiSearch, BiPlusCircle } from 'react-icons/bi';
import './Dashboard.css';
import { LoginContext } from '../../Context/LoginContext';
import FileUpload from './fileupload';
import { DropDown } from '../DropDown/DropDown';
import { ProfileFormData } from '../../Service/ProfileService';
import { UserSearchBar, GetUserId } from '../../Service/UserSearchService';
import { useNavigate } from 'react-router-dom';

function Header() {
	const [showModal, setShowModal] = useState(false);
	const [openProfile, setOpenProfile] = useState(false);
	const { profileformdata, setProfileFormdata } = useContext(LoginContext);

	// search Field

	const [input, setInput] = useState([]);
	const [searchResult, setSearchResult] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const navigate = useNavigate();

	const searchBoxRef = useRef(null); //for close outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
				setShowResults(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	//for search name
	useEffect(() => {
		if (input !== '') {
			UserSearchBar(input)
				.then((UserSearch) => {
					const result = UserSearch.filter((Name) => {
						return Name && Name.name && Name.name.toLowerCase().includes(input.toLowerCase());
					});
					setSearchResult(result);
					console.log(result);
				})
				.catch((e) => {
					console.log(e.message);
				});
		} else {
			setSearchResult([]);
		}
	}, [input]);

	const handleChange = (value) => {
		setInput(value);
		setShowResults(true);
	};

	const handleSearchBoxClick = () => {
		setShowResults(true);
	};

	const handleRowClick = (id) => {
		navigate(`/dashboard/searchprofile/${id}`);
		setInput('');
	};

	const handleCloseModal = () => {
		document.getElementById('scroll-hidden').style.overflow = 'visible';
		setShowModal(false);
	};

	const handleShowModal = () => {
		document.getElementById('scroll-hidden').style.overflow = 'hidden';
		setShowModal(true);
	};

	useEffect(() => {
		ProfileFormData().then((data) => {
			setProfileFormdata({
				name: data.profile.name,
				profileImage: data.profile.profileImage,
				userId: data.profile.userId
			});
		});
	}, []);

	return (
		<div className='right-top'>
			<div className='header-inner-div'>
				<div className='search-div'>
					<div className='search-bar-div'>
						<div className='icon-div'>
							<BiSearch className='search-bar-icon' />
						</div>
						<input className='search-bar-input' type='text' placeholder='search' value={input} onChange={(e) => handleChange(e.target.value)} onClick={handleSearchBoxClick} />
					</div>
					<div className='search-results-div'>
						{showResults && (
							<div className='search-results' ref={searchBoxRef}>
								{searchResult.map((Name) => (
									<div className='search-result-card' onClick={() => handleRowClick(Name.id)}>
										<img className='search-result-profile' src={Name.profileImage} alt='profile' />
										<span className='search-result-hrmid'>{Name.hrmid}</span>
										<span className='search-result-name'>{Name.name}</span>
									</div>
								))}
							</div>
						)}
					</div>
				</div>

				<div className='upload-div'>
					<button className='upload-button' onClick={handleShowModal}>
						Upload
					</button>
					<FileUpload className='file-upload-dialog' isOpen={showModal} onClose={handleCloseModal} />
				</div>

				<div className='header-profile-div'>
					<BiBell className='header-bell-icon' />
					<div className='header-user-profile'>
						<img className='header-profile-image' src={profileformdata?.profileImage || ''} alt='profile' />
						<div className='header-profile-name-div'>
							<span className='profile-name'>{profileformdata?.name || ''}</span>
							<BiChevronDown
								className='cheveron-down'
								onClick={() => {
									setOpenProfile((prev) => !prev);
								}}
							/>
						</div>
						{openProfile && <DropDown />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
