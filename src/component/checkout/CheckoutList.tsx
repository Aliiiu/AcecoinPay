import React from 'react';

type TCheckoutList = {
	title: string;
	desc: string;
	showImg?: boolean;
};
const CheckoutList = ({ title, desc, showImg }: TCheckoutList) => {
	return (
		<div className='data'>
			<span className='title'>{title}</span>
			<span className='value'>
				{showImg && <img src='/svgs/apple-13.svg' alt='' />}
				<span className='inner-text'>{desc}</span>
			</span>
		</div>
	);
};

export default CheckoutList;
