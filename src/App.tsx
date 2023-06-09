import React from 'react';
import './styles/index.scss';
import Header from './component/header';
import Form from './component/form';
import Checkout from './component/checkout';
import Close from './assets/icons/Close';

function App() {
	return (
		<div className='container grid lg:grid-cols-12 gap-y-16 lg:gap-8'>
			<button className='close-btn'>
				<Close />
			</button>

			<div className='col-span-12 lg:col-span-8'>
				<div className='form'>
					<Header />
					<Form />
				</div>
			</div>
			<div className='col-span-12 lg:col-span-4'>
				<Checkout />
			</div>
		</div>
	);
}

export default App;
