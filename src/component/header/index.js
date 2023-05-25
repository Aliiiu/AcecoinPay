import React from 'react';

const Header = () => {
	return (
		<header className='form-header'>
			<div className='logo'>
				<span className='logo-circle'></span>
				<h1>
					AceCoin <span className='light'>Pay</span>
				</h1>
			</div>
			<div className='timer'>
				<span className='timer-box'>0</span>
				<span className='timer-box'>1</span>
				<span className='timer-divider'>:</span>
				<span className='timer-box'>1</span>
				<span className='timer-box'>9</span>
			</div>
		</header>
	);
};

export default Header;
