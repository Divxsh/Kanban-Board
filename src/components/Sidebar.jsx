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
      className={`border-["#DBDBDB] fixed left-0 top-0 z-20 mb-10 w-[250px] bg-white lg:static lg:mb-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } border-r transition-transform lg:flex lg:w-full lg:max-w-[20rem] lg:flex-shrink-0 lg:translate-x-0`}
    >
      <div className="sticky top-0 h-screen overflow-y-scroll [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden  ">
        {/* Sidebar Menus */}
        <div className='border-["#DBDBDB] sticky top-0 flex h-16 items-center justify-between border-b bg-white px-6 py-7 md:h-88px '>
          <div className="flex items-center">
            <Icon name="colorfilter" className={"mr-2"} />
            Project M.
          </div>
          <Icon
            name={"double-arrow-left"}
            className={"hidden cursor-pointer lg:block"}
          />
          {isOpen && (
            <Icon name={"double-arrow-left"} onClick={onClickHandler} />
          )}
        </div>
        <div className='w-100% border-["#DBDBDB] mx-3 border-b py-2'>
          <div className=" my-2.5 flex flex-col">
            {SideBarItems.map((item, idx) => (
              <div
                className="flex cursor-pointer gap-x-4 px-3 py-3 text-primary hover:rounded-md hover:bg-active-bg"
                key={idx}
              >
                <Icon name={item.icon} />
                <h2 className="text-base font-medium">{item.name}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Projects & Card */}
        <div className="flex flex-col justify-between">
          <div className="flex flex-col justify-between gap-y-5 px-3 py-30px">
            {/* Heading */}
            <div className="flex items-center justify-between px-10px">
              <h3 className="text-xs font-bold text-primary">MY PROJECTS</h3>
              <Icon name={"add-square"} size={"16px"} />
            </div>

            {/* Options */}
            <div className="flex flex-col gap-y-2.5">
              <div className="flex items-center justify-between rounded-md bg-active-bg px-3 py-2.5">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <div className="ml-4 font-semibold">Mobile App</div>
                </div>
                <span className="-mt-2 font-extrabold">...</span>
              </div>

              <div className="flex items-center justify-between px-3 py-2.5">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <div className="ml-4 font-semibold">Website Redesign</div>
                </div>
                <span className="-mt-2 font-extrabold">...</span>
              </div>

              <div className="flex items-center justify-between px-3 py-2.5">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-violet-500"></div>
                  <div className="ml-4 font-semibold">Design System</div>
                </div>
                <span className="-mt-2 font-extrabold">...</span>
              </div>

              <div className="flex items-center justify-between px-3 py-2.5">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <div className="ml-4 font-semibold">Wireframes</div>
                </div>
                <span className="-mt-2 font-extrabold">...</span>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="relative bottom-0 px-22px py-30px">
            <div className="relative flex flex-col items-center gap-y-3.5 rounded-2xl bg-customGray p-5">
              <div className="left-15 absolute -top-7 flex h-16 w-16 items-center justify-center rounded-full bg-customGray">
                <Icon name={"lamp-on"} />
                <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 bg-[#FBCB18] blur-md"></div>
              </div>
              <h3 className="mt-4  text-sm">Thoughts Time</h3>
              <p className="text-center text-xs">
                We don’t have any notice for you, till then you can share your
                thoughts with your peers.
              </p>
              <button className="w-full rounded bg-white py-3 text-sm">
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
