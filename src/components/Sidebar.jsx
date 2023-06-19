import React from "react";
import SideBarItems from "../constant/sidebar";
import Icon from "./Icon";

const Sidebar = ({ isOpen, setIsOpen }) => {
	const onClickHandler = (e) => {
		e.stopPropagation();
		setIsOpen(!isOpen);
	};
	return (
		<aside
			className={`w-[250px] absolute top-0 left-0 z-20 border-["#DBDBDB] mb-10 lg:mb-0 lg:static bg-white ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			} transition-transform lg:translate-x-0 lg:flex lg:w-[18%] lg:min-w-[230px] lg:flex-shrink-0 border-r`}
		>
			<div className="sticky top-0 h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']  ">
				{/* Sidebar Menus */}
				<div className='sticky top-0 flex justify-between items-center px-6 py-7 md:h-88px h-16 border-b border-["#DBDBDB] bg-white '>
					<div className='flex items-center'>
						<Icon name='colorfilter' className={"mr-2"} />
						Project M.
					</div>
					<Icon
						name={"double-arrow-left"}
						className={"lg:block hidden cursor-pointer"}
					/>
					{isOpen && (
						<Icon name={"double-arrow-left"} onClick={onClickHandler} />
					)}
				</div>
				<div className='w-100% mx-3 py-2 border-b border-["#DBDBDB]'>
					<div className=' flex flex-col my-2.5'>
						{SideBarItems.map((item, idx) => (
							<div
								className='flex gap-x-4 text-primary cursor-pointer hover:bg-active-bg hover:rounded-md px-3 py-3'
								key={idx}
							>
								<Icon name={item.icon} />
								<h2 className='font-medium text-base'>{item.name}</h2>
							</div>
						))}
					</div>
				</div>

				{/* Projects & Card */}
				<div className='flex flex-col justify-between'>
					<div className='flex flex-col justify-between gap-y-5 px-3 py-30px'>
						{/* Heading */}
						<div className='flex justify-between items-center px-10px'>
							<h3 className='text-xs font-bold text-primary'>MY PROJECTS</h3>
							<Icon name={"add-square"} size={"16px"} />
						</div>

						{/* Options */}
						<div className='flex flex-col gap-y-2.5'>
							<div className='flex justify-between items-center py-2.5 px-3 bg-active-bg rounded-md'>
								<div className='flex items-center'>
									<div className='w-2 h-2 rounded-full bg-green-500'></div>
									<div className='ml-4 font-semibold'>Mobile App</div>
								</div>
								<span className='-mt-2 font-extrabold'>...</span>
							</div>

							<div className='flex justify-between items-center py-2.5 px-3'>
								<div className='flex items-center'>
									<div className='w-2 h-2 rounded-full bg-yellow-500'></div>
									<div className='ml-4 font-semibold'>Website Redesign</div>
								</div>
								<span className='-mt-2 font-extrabold'>...</span>
							</div>

							<div className='flex justify-between items-center py-2.5 px-3'>
								<div className='flex items-center'>
									<div className='w-2 h-2 rounded-full bg-violet-500'></div>
									<div className='ml-4 font-semibold'>Design System</div>
								</div>
								<span className='-mt-2 font-extrabold'>...</span>
							</div>

							<div className='flex justify-between items-center py-2.5 px-3'>
								<div className='flex items-center'>
									<div className='w-2 h-2 rounded-full bg-blue-500'></div>
									<div className='ml-4 font-semibold'>Wireframes</div>
								</div>
								<span className='-mt-2 font-extrabold'>...</span>
							</div>
						</div>
					</div>

					{/* Card */}
					<div className='px-22px py-30px relative bottom-0'>
						<div className='p-5 flex flex-col items-center rounded-2xl bg-customGray gap-y-3.5 relative'>
							<div className='flex justify-center items-center rounded-full w-16 h-16 absolute -top-7 left-15 bg-customGray'>
								<Icon name={"lamp-on"} />
								<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#FBCB18] blur-md'></div>
							</div>
							<h3 className='text-sm  mt-4'>Thoughts Time</h3>
							<p className='text-xs text-center'>
								We don’t have any notice for you, till then you can share your
								thoughts with your peers.
							</p>
							<button className='text-sm bg-white w-full py-3 rounded'>
								Write a message
							</button>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
