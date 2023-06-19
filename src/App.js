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
    <div className="flex h-screen min-h-screen md:overflow-y-hidden">
      <div className="min-w-screen flex w-screen md:overflow-y-hidden">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex h-screen flex-1 flex-col">
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="flex-1 md:overflow-hidden">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
