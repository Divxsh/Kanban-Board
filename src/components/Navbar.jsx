import React from "react";
import Icon from "./Icon";

const Navbar = ({ setIsOpen }) => {
	return (
		<div className='sticky top-0 bg-white flex justify-between items-center w-full h-16 md:h-88px md:px-12 px-6 py-22px border-b border-["#DBDBDB]'>
			<Icon
				name='hamburger'
				className={"text-primary lg:hidden cursor-pointer"}
				onClick={(e) => {
					e.stopPropagation();
					setIsOpen(true);
				}}
			/>
			<div className='md:block hidden relative w-4/12 '>
				<input
					type='text'
					className='h-11 pl-14 bg-customWhite rounded-md w-full bg-customGray focus:outline-none'
					placeholder='Search for anything...'
				/>
				<Icon
					name={"search"}
					className={"absolute top-1/2 left-4 -translate-y-1/2"}
				/>
			</div>
			<div className='flex md:justify-evenly md:w-auto md:gap-x-12 gap-x-3 '>
				<div className='flex justify-between items-center gap-x-3'>
					<Icon name='search' className={"md:hidden block"} />
					<Icon name='calendar-2' className={"md:block"} />
					<Icon name='message-question' className={"md:block"} />
					<Icon
						name='notification'
						className={
							" relative before:bg-[#D8727D] before:w-1.5 before:h-1.5 before:absolute before:top-0.5 before:right-1 before:rounded-full"
						}
					/>
				</div>

				<div className='flex items-center gap-x-5'>
					<div className='hidden mb-0.5 md:flex md:flex-col md:items-end'>
						<span className='text-black text-right'>Anima Agrawal</span>
						<span className='text-primary text-right'>U.P, India</span>
					</div>
					<div className='flex items-center gap-x-2'>
						<div className='w-38px h-38px rounded-full overflow-hidden'>
							<img
								src='./images/profile.png'
								alt='profile'
								className='w-full'
							/>
						</div>
						<Icon name='arrow-down' size={"sm"} className={"md:block hidden"} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
