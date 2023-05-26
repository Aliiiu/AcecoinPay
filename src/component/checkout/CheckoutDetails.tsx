import React from 'react';
import CreditCard from './CreditCard';
import CheckoutList from './CheckoutList';
import { checkoutData } from '../../constant/checkoutData';

const CheckoutDetails = () => {
	return (
		<div className='checkout-details h-full'>
			<CreditCard />
			<div className='purchase-data -mt-20 md:mt-4 lg:-mt-16 px-8'>
				{checkoutData.map((item) => (
					<CheckoutList
						key={item.id}
						title={item.title}
						desc={item.desc}
						showImg={item.showImg}
					/>
				))}
			</div>
			<div className='divider mt-8 md:mt-20 lg:mt-12'>
				<div className='left'></div>
				<div className='right'></div>
			</div>
			<div className='purchase-total pb-6 md:pb-10 lg:pb-0 pt-6 md:pt-20 lg:pt-6 px-8'>
				<div className='total'>
					<span className='desc'>You have to Pay</span>
					<div className='t-amount'>
						<h1 className='amount'>
							549<sub>.99</sub>
						</h1>
						<span className='symbol'>USD</span>
					</div>
				</div>
				<img src='/svgs/receipt.svg' alt='' />
			</div>
		</div>
	);
};

export default CheckoutDetails;
