import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center text-blackish pb-4 sm:pb-0 ">
          Sick
        </div>
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            type="text"
            className="border border-gray-200 p-2 px-4 rounded-lg w-full"
            placeholder="Enter any product name..."
            name="search bar"
            id="search"
          />
          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
            size={20}
          />
        </div>
        <div className="hidden lg:flex text-gray-500 text-[30px] gap-3">
          <div className=" cursor-pointer hover:bg-gray-100 p-2 rounded-full">
            <BiUser />
          </div>
          <div className="relative cursor-pointer hover:bg-gray-100 p-2 rounded-full">
            <FiHeart />
            <div className="absolute bg-red-600 rounded-full text-center text-white right-0 top-0 w-[18px] h-[18px] text-[12px] translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          <div className="relative cursor-pointer hover:bg-gray-100 p-2 rounded-full">
            <HiOutlineShoppingBag />
            <div className="absolute bg-red-600 rounded-full text-center text-white right-0 top-0 w-[18px] h-[18px] text-[12px] translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
