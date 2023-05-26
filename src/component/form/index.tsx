import React from 'react';
import {
	CustomDateField,
	PinInputField,
	TextField,
} from '../widget/form/FormComponent';

const Form = () => {
	return (
		<section className='form-body'>
			<form>
				<PinInputField
					title='card number'
					desc='Enter the 15-digit card number on the card'
					placeholder='2412   -   7512   -   3412   -   3456'
				/>
				<TextField
					title='CVV number'
					desc='Enter the 3 or 4 digit number on the card'
					placeholder='327'
				/>
				<CustomDateField />
				<TextField
					title='Password'
					desc='Enter your Dynamic password'
					placeholder='************'
					type='password'
				/>
				<button
					type='submit'
					className='btn_submit py-3 md:py-4 lg:py-5 bg-blue01 box-border capitalize font-medium'
				>
					pay now
				</button>
			</form>
		</section>
	);
};

export default Form;
