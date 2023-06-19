import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import { useEffect, useState } from "react";

// function generateId() {
// 	return Date.now() + "" + Math.floor(Math.random() * 1000);
// }

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      e.stopPropagation();
      setIsOpen(false);
    });
  }, []);

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex w-full flex-col lg:w-full">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Main />
      </div>
    </div>
  );
}

export default App;
