import React from "react";
import Icon from "./Icon";

const Navbar = () => {
	return (
		<div className='sticky top-0 bg-white flex justify-between items-center w-full h-88px md:px-12 px-6 py-22px border-b border-["#DBDBDB]'>
			<div className='hidden md:block md:relative w-4/12'>
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
			<div className='flex md:justify-evenly md:w-auto justify-between w-full md:gap-x-12 gap-x-6'>
				<div className='flex justify-between items-center gap-x-7'>
					<Icon name='calendar-2' />
					<Icon name='message-question' />
					<Icon
						name='notification'
						className={
							" relative before:bg-[#D8727D] before:w-1.5 before:h-1.5 before:absolute before:top-0.5 before:right-1 before:rounded-full"
						}
					/>
				</div>

				<div className='flex items-center gap-x-5'>
					<div className='flex flex-col items-end mb-0.5 '>
						<span className='text-black text-right'>Anima Agrawal</span>
						<span className='text-[#787486]'>U.P, India</span>
					</div>
					<div className='flex items-center gap-x-2'>
						<div className='w-38px h-38px rounded-full overflow-hidden'>
							<img
								src='./images/profile.png'
								alt='profile'
								className='w-full'
							/>
						</div>
						<Icon name='arrow-down' size={"sm"} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
