import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";

// function generateId() {
// 	return Date.now() + "" + Math.floor(Math.random() * 1000);
// }

function App() {
	return (
		<div className='flex'>
			<Sidebar />
			<div className='flex flex-col w-full lg:w-[82%]'>
				<Navbar />
				<Main />
			</div>
		</div>
	);
}

export default App;
