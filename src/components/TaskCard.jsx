import React from "react";
import Icon from "./Icon";
import Pill from "./Pill";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ task, id, col }) => {
	const dragId = col + "-task-" + id;
	return (
		<Draggable index={id} draggableId={dragId}>
			{(provided) => (
				<div
					className='p-5 mb-5 bg-white rounded-2xl cursor-pointer'
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<div className='flex justify-between items-center mb-1'>
						<Pill status={task.priority || task.status} />
						<div className='-mt-2 font-extrabold'>...</div>
					</div>
					<h2 className='text-lg font-semibold text-customBlack'>
						{task.title}
					</h2>
					{task?.description && (
						<div className='text-xs text-primary'>{task.description}</div>
					)}
					{task?.images?.length && (
						<div>
							<div className='flex gap-x-3'>
								{task.images.map((path, idx) => (
									<img
										src={path}
										alt='plant'
										style={{ width: "100%" }}
										key={idx}
									/>
								))}
							</div>
						</div>
					)}

					<div className='flex justify-between mt-7'>
						<div className='flex w-fit'>
							{task?.usersWorking.map((imageData, idx) => (
								<div className='-mr-2 w-6 z-20' key={idx}>
									<img src={imageData.path} alt={imageData?.alt || "user"} />
								</div>
							))}
						</div>
						<div className='flex gap-x-4 text-primary'>
							<div className='flex items-center'>
								<Icon name={"message"} size={"16px"} />
								<div className='ml-1.5 text-xs font-bold'>
									12 <span className='xl:inline-block md:hidden'>comments</span>
								</div>
							</div>
							<div className='flex items-center'>
								<Icon name={"folder"} size={"16px"} />
								<div className='ml-1.5 text-xs font-bold'>
									15 <span className='xl:inline-block md:hidden'>files</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default TaskCard;
