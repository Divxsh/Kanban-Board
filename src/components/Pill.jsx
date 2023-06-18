import React from "react";

const Pill = ({ status }) => {
	let temp = {};

	switch (status.toLowerCase()) {
		case "low":
			temp = {
				status: "Low",
				classNames: "text-[#D58D49] bg-[#d58d4932]",
			};
			break;
		case "high":
			temp = {
				status: "High",
				classNames: "text-[#D8727D] bg-[#d8727c32]",
			};
			break;
		case "completed":
			temp = {
				status: "Completed",
				classNames: "text-[#68B266] bg-[#69b26633]",
			};
			break;
		default:
			temp = {
				status: status.toCapitalize(),
				classNames: "text-gray-500 bg-gray-300",
			};
	}
	return (
		<div
			className={`w-fit px-1.5 py-1 text-xs font-medium rounded ${temp.classNames}`}
		>
			{temp.status}
		</div>
	);
};

export default Pill;
