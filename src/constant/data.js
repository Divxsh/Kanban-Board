const todos = [
	{
		title: "Brainstorming",
		description:
			"Brainstorming brings team members' diverse experience into play. ",
		priority: "Low",
		usersWorking: [
			{
				path: "./images/user1.png",
			},
			{
				path: "./images/user2.png",
			},
			{
				path: "./images/user3.png",
			},
			{
				path: "./images/user4.png",
			},
		],
	},
	{
		title: "Research",
		description:
			"User research helps you to create an optimal product for users.",
		priority: "High",
		usersWorking: [
			{
				path: "./images/user1.png",
			},
			{
				path: "./images/user2.png",
			},
			{
				path: "./images/user3.png",
			},
		],
	},
	{
		title: "Wireframes",
		description:
			"Low fidelity wireframes include the most basic content and visuals.",
		priority: "High",
		usersWorking: [
			{
				path: "./images/user1.png",
			},
			{
				path: "./images/user4.png",
			},
		],
	},
];

const progressTasks = [
	{
		title: "Onboarding Illustrations",
		description: "",
		images: ["./images/flower.png"],
		priority: "Low",
		usersWorking: [
			{
				path: "./images/user1.png",
			},
			{
				path: "./images/user2.png",
			},
			{
				path: "./images/user3.png",
			},
		],
	},
	// {
	// 	title: "Moodboard",
	// 	images: ["./images/flower1.png", "./images/flower2.png"],
	// 	priority: "Low",
	// 	usersWorking: [
	// 		{
	// 			path: "./images/user1.png",
	// 		},
	// 	],
	// },
];

const completedTasks = [
	{
		title: "Mobile App Design",
		description: "",
		images: ["./images/plant.png"],
		status: "Completed",
		usersWorking: [
			{
				path: "./images/user1.png",
			},
			{
				path: "./images/user2.png",
			},
		],
	},
	// {
	// 	title: "Design System",
	// 	description: "It just needs to adapt the UI from what you did before ",
	// 	status: "Completed",
	// 	usersWorking: [
	// 		{
	// 			path: "./images/user1.png",
	// 		},
	// 		{
	// 			path: "./images/user2.png",
	// 		},
	// 		{
	// 			path: "./images/user3.png",
	// 		},
	// 	],
	// },
];

export { todos, progressTasks, completedTasks };
