import React from 'react';
import './styles/index.scss';

function App() {
	return (
		<div className='container grid grid-cols-12'>
			<div className='col-span-12 md:col-span-8'>
				<div className='form'>
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
				</div>
			</div>
			<div className='col-span-12 md:col-span-4'></div>
		</div>
	);
}

export default App;
