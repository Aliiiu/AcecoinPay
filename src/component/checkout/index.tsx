import React from 'react';
import CreditCard from './CreditCard';
import CheckoutDetails from './CheckoutDetails';

const Checkout = () => {
	return (
		<div className='checkout'>
			<CreditCard />
			<CheckoutDetails />
		</div>
	);
};

export default Checkout;
