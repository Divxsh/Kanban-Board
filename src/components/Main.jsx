import React, { useState } from "react";
import Icon from "./Icon";
import TaskCard from "./TaskCard";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import {
	todos as Todos,
	progressTasks as ProgressTasks,
	completedTasks as CompletedTasks,
} from "../constant/data.js";

const queryAttr = "data-rbd-drag-handle-draggable-id";

const Main = () => {
	const [placeholderProps, setPlaceholderProps] = useState({});
	const [data, setData] = useState({
		todo: Todos,
		progress: ProgressTasks,
		done: CompletedTasks,
	});

	const handleDragStart = (update) => {
		const draggedDOM = getDraggedDom(update.draggableId);
		if (!draggedDOM) {
			return;
		}
		const { clientHeight, clientWidth } = draggedDOM;
		let ParentNode = draggedDOM.parentElement.getBoundingClientRect();

		setPlaceholderProps({
			clientHeight,
			clientWidth,
			clientY: draggedDOM.getBoundingClientRect().y,
			clientX:
				ParentNode.x +
				parseInt(
					window
						.getComputedStyle(draggedDOM.parentElement)
						.paddingLeft.split("px")[0],
				),
		});
	};

	const handleDragEnd = (result) => {
		const { source, destination } = result;
		if (!destination) return 0;
		if (source.droppableId === destination.droppableId) {
			setData((prev) => {
				const draggedItem = prev[source.droppableId][source.index];
				prev[source.droppableId].splice(source.index, 1);
				prev[destination.droppableId].splice(destination.index, 0, draggedItem);
				return prev;
			});
		}
		if (source.droppableId !== destination.droppableId) {
			setData((prev) => {
				const draggedItem = prev[source.droppableId][source.index];
				prev[source.droppableId].splice(source.index, 1);
				prev[destination.droppableId].splice(destination.index, 0, draggedItem);
				return prev;
			});
		}
		setPlaceholderProps({});
	};

	const handleDragUpdate = (event) => {
		setPlaceholderProps({});
	};

	const getDraggedDom = (draggableId) => {
		const domQuery = `[${queryAttr}='${draggableId}']`;
		const draggedDOM = document.querySelector(domQuery);

		return draggedDOM;
	};

	return (
		<div className='flex flex-col px-6 pb-5 md:pb-0 md:px-12 pt-5 w-full'>
			{/*  */}
			<div className='flex justify-between py-5'>
				{/* Heading Side */}
				<div className='flex items-center gap-x-5 '>
					<h1 className='font-semibold md:text-5xl text-4xl leading-[55px]'>
						Mobile App
					</h1>
					<span className='flex items-center h-fit gap-x-4 mt-2 '>
						<Icon
							name='edit-square'
							size={"25px"}
							className={"cursor-pointer"}
						/>
						<Icon name='link' size={"25px"} className={"cursor-pointer"} />
					</span>
				</div>

				{/* Multiplayer Side */}
				<div className='md:flex items-center gap-x-3 hidden'>
					<div className='flex items-center gap-x-2'>
						<Icon name='add-square-filled' size={"15px"} className='mt-0.5' />
						<h4 className='text-customPurple font-medium'>Invite</h4>
					</div>
					<div className='flex w-fit'>
						<div className='-mr-3 w-9'>
							<img src='images/user1.png' alt='user' />
						</div>
						<div className='-mr-3 w-9'>
							<img src='images/user2.png' alt='user' />
						</div>
						<div className='-mr-3 w-9'>
							<img src='images/user3.png' alt='user' />
						</div>
						<div className='-mr-3 w-9'>
							<img src='images/user4.png' alt='user' />
						</div>
						<div className='bg-[#F4D7DA] text-[#D25B68] rounded-full border border-white w-9 flex justify-center items-center font-medium'>
							+2
						</div>
					</div>
				</div>
			</div>

			{/*  */}
			<div className='flex justify-between my-5 gap-x-2'>
				<div className='flex md:gap-x-5 gap-x-2 '>
					{/* Filter */}
					<div className='flex items-center h-10 px-3.5 gap-x-2  text-primary border border-primary rounded-md'>
						<Icon name='filter' size={"16px"} />
						<span className='hidden md:block md:font-medium'>Filter</span>
						<Icon name='arrow-down' size={"16px"} className={"ml-1"} />
					</div>
					{/* Calender */}
					<div className='flex items-center h-10 px-3 gap-x-2 text-primary border border-primary rounded-md'>
						<Icon name='calendar' size={"16px"} />
						<span className='hidden md:block md:font-medium'>Today</span>
						<Icon name='arrow-down' size={"16px"} className={"ml-1"} />
					</div>
				</div>

				{/* Multiplayer Side */}
				<div className='flex md:gap-x-5 gap-x-2 items-center'>
					<div className='flex items-center px-4 h-10 gap-x-2 text-primary border border-primary rounded-md'>
						<Icon name='profile' size='16px' />
						<span className='hidden md:block md:font-medium'>Share</span>
					</div>
					<div className='h-3/4 border-l border-primary'></div>
					<div className='flex justify-center items-center w-10 h-10 rounded-md bg-customPurple'>
						<Icon name='pause' size='20px' />
					</div>
					<Icon name='menu' size='21px' />
				</div>
			</div>

			{/*  */}
			<div className='pt-22px grid sm:grid-cols-1 md:grid-cols-3 gap-4 h-full  '>
				<DragDropContext
					onDragStart={handleDragStart}
					onDragUpdate={handleDragUpdate}
					onDragEnd={handleDragEnd}
				>
					{/* To Do */}
					<div className='h-full bg-customGray rounded-2xl'>
						<div className='flex  flex-wrap items-center justify-start   gap-x-2 pt-5 pb-22px mx-5 border-b-3px border-customPurple mb-2 '>
							<div className='w-2 h-2 bg-violet-500 rounded-full'></div>
							<h3 className='font-medium'>To Do</h3>
							<div className='w-5 h-5 flex items-center justify-center rounded-full text-xs font-medium text-[#625F6D] bg-[#E0E0E0] ml-1'>
								{data["todo"]?.length}
							</div>
						</div>
						<Droppable droppableId='todo'>
							{(provided) => (
								<div
									className='sm:overflow-y-auto  p-5'
									ref={provided.innerRef}
									{...provided.droppableProps}
								>
									{data["todo"].map((i, idx) => (
										<TaskCard
											task={i}
											key={idx + "todo"}
											id={idx}
											col={"todo"}
										/>
									))}
									{provided.placeholder}
									<div
										className={`absolute bg-[rgba(81,48,229,0.06)] border border-dashed  border-[rgba(80,48,229,0.59)] rounded-2xl top-[${placeholderProps.top}] mb-4`}
										style={{
											top: placeholderProps.clientY,
											left: placeholderProps.clientX,
											height: placeholderProps.clientHeight,
											width: placeholderProps.clientWidth,
										}}
									/>
								</div>
							)}
						</Droppable>
					</div>

					{/* On Progress */}
					<div className='h-full bg-customGray rounded-2xl'>
						<div className='flex items-center gap-x-2 pt-5 pb-22px border-b-3px border-[#FFA500] mb-2 mx-5'>
							<div className='w-2 h-2 bg-blue-500 rounded-full'></div>
							<h3 className='font-medium'>On Progress</h3>
							<div className='w-5 h-5 flex items-center justify-center rounded-full text-xs font-medium text-[#625F6D] bg-[#E0E0E0] ml-1'>
								{data["progress"]?.length}
							</div>
						</div>
						<Droppable droppableId='progress'>
							{(provided) => (
								<div
									className='sm:overflow-y-auto  p-5'
									ref={provided.innerRef}
									{...provided.droppableProps}
								>
									{data["progress"].map((i, idx) => (
										<TaskCard
											task={i}
											key={idx + "progress"}
											id={idx}
											col={"progress"}
										/>
									))}
									{provided.placeholder}
									<div
										className={`absolute bg-[rgba(81,48,229,0.06)] border border-dashed  border-[rgba(80,48,229,0.59)] rounded-2xl mb-4`}
										style={{
											top: placeholderProps.clientY,
											left: placeholderProps.clientX,
											height: placeholderProps.clientHeight,
											width: placeholderProps.clientWidth,
										}}
									></div>
								</div>
							)}
						</Droppable>
					</div>

					{/* Done */}
					<div className='h-full bg-customGray rounded-2xl '>
						<div className='flex items-center gap-x-2 pt-5 pb-22px border-b-3px border-[#8BC48A] mb-2 mx-5'>
							<div className='w-2 h-2 bg-green-500 rounded-full'></div>
							<h3 className='font-medium'>Done</h3>
							<div className='w-5 h-5 flex items-center justify-center rounded-full text-xs font-medium text-[#625F6D] bg-[#E0E0E0] ml-1'>
								{data["done"]?.length}
							</div>
						</div>
						<Droppable droppableId='done'>
							{(provided) => (
								<div
									className='sm:overflow-y-auto p-5 '
									ref={provided.innerRef}
									{...provided.droppableProps}
								>
									{data["done"].map((i, idx) => (
										<TaskCard
											task={i}
											key={idx + "done"}
											id={idx}
											col={"done"}
										/>
									))}
									{provided.placeholder}
									{/* <CustomPlaceholder snapshot={snapshot} /> */}
									<div
										className={`absolute bg-[rgba(81,48,229,0.06)] border border-dashed  border-[rgba(80,48,229,0.59)] rounded-2xl top-[${placeholderProps.top}] `}
										style={{
											top: placeholderProps.clientY,
											left: placeholderProps.clientX,
											height: placeholderProps.clientHeight,
											width: placeholderProps.clientWidth,
										}}
									/>
								</div>
							)}
						</Droppable>
					</div>
				</DragDropContext>
			</div>
		</div>
	);
};

export default Main;
