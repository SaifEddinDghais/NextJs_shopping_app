import React from "react";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { PiSquaresFour } from "react-icons/pi";

const MobileNavbar = () => {
  return (
    <div className="lg:hidden w-full fixed bottom-0 bg-white">
      <div className="container px-4 py-2 ">
        <div className=" flex justify-around items-center gap-5  text-[28px]">
          <div className="hover:bg-gray-100 p-2 rounded-full cursor-pointer">
            <IoMdMenu />
          </div>
          <div className="relative hover:bg-gray-100 p-2 rounded-full cursor-pointer">
            <HiOutlineShoppingBag />
            <div className="absolute bg-red-600 rounded-full text-center text-white right-0 top-0 w-[18px] h-[18px] text-[12px] translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          <div className="hover:bg-gray-100 p-2 rounded-full cursor-pointer">
            <IoHomeOutline />
          </div>
          <div className="relative hover:bg-gray-100 p-2 rounded-full cursor-pointer">
            <FiHeart />
            <div className="absolute bg-red-600 rounded-full text-center text-white right-0 top-0 w-[18px] h-[18px] text-[12px] translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          <div className="hover:bg-gray-100 p-2 rounded-full cursor-pointer">
            <PiSquaresFour />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
