import EditPen from '../../../assets/icons/EditPen';

type TFormValues = {
	title: string;
	desc: string;
	placeholder: string;
	type?: string;
};

export const PinInputField = ({ title, desc, placeholder }: TFormValues) => {
	return (
		<div className='input-group'>
			<label className='label'>
				<div className='description'>
					<h2 className='title'>{title}</h2>
					<p className='desc'>{desc}</p>
				</div>
				<button className='edit outline-none bg-transparent border-none'>
					<EditPen />
					<span className='btn-desc'>Edit</span>
				</button>
			</label>
			<div className='main'>
				<img src='/svgs/mc_symbol.svg' alt='' className='leading-icon' />
				<input type='text' placeholder={placeholder} />
				<img src='svgs/verified-badge.svg' alt='' className='trailing-icon' />
			</div>
		</div>
	);
};

export const TextField = ({ title, desc, placeholder, type }: TFormValues) => {
	return (
		<div className='input-group __col'>
			<label className='label'>
				<div className='description'>
					<h2 className='title'>{title}</h2>
					<p className='desc'>{desc}</p>
				</div>
			</label>
			<div className='main'>
				<input type={type} placeholder={placeholder} />
				<img src='svgs/dots.svg' alt='' className='trailing-icon' />
			</div>
		</div>
	);
};

export const CustomDateField = () => {
	return (
		<div className='input-group __col'>
			<label className='label'>
				<div className='description'>
					<h2 className='title'>expiry date</h2>
					<p className='desc'>Enter the expiiration date of the card</p>
				</div>
			</label>
			<div className='grp'>
				<div className='main'>
					<input type='text' placeholder='09' />
				</div>
				<span className='divider'>/</span>
				<div className='main'>
					<input type='text' placeholder='22' />
				</div>
			</div>
		</div>
	);
};
