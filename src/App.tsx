import React from 'react';
import './styles/index.scss';
import Header from './component/header';
import Form from './form';

function App() {
	return (
		<div className='container grid grid-cols-12'>
			<div className='col-span-12 md:col-span-8'>
				<div className='form'>
					<Header />
					<Form />
				</div>
			</div>
			<div className='col-span-12 md:col-span-4'></div>
		</div>
	);
}

export default App;
