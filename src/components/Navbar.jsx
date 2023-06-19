import React from "react";
import Icon from "./Icon";

const Navbar = ({ setIsOpen }) => {
  return (
    <div className='border-["#DBDBDB] fixed top-0 flex h-16 w-full items-center justify-between border-b bg-white px-6 py-22px md:h-88px lg:px-12'>
      <Icon
        name="hamburger"
        className={"cursor-pointer text-primary lg:hidden"}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
      />
      <div className="relative hidden w-4/12 md:block ">
        <input
          type="text"
          className="bg-customWhite h-11 w-full rounded-md bg-customGray pl-14 focus:outline-none"
          placeholder="Search for anything..."
        />
        <Icon
          name={"search"}
          className={"absolute left-4 top-1/2 -translate-y-1/2"}
        />
      </div>
      <div className="flex gap-x-3 md:w-auto md:justify-evenly md:gap-x-12 ">
        <div className="flex items-center justify-between gap-x-3">
          <Icon name="search" className={"block md:hidden"} />
          <Icon name="calendar-2" className={"md:block"} />
          <Icon name="message-question" className={"md:block"} />
          <Icon
            name="notification"
            className={
              " relative before:absolute before:right-1 before:top-0.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D8727D]"
            }
          />
        </div>

        <div className="flex items-center gap-x-5">
          <div className="mb-0.5 hidden md:flex md:flex-col md:items-end">
            <span className="text-right text-black">Anima Agrawal</span>
            <span className="text-right text-primary">U.P, India</span>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="h-38px w-38px overflow-hidden rounded-full">
              <img
                src="./images/profile.png"
                alt="profile"
                className="w-full"
              />
            </div>
            <Icon name="arrow-down" size={"sm"} className={"hidden md:block"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
