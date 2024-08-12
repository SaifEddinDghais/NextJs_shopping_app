import React from "react";
import { BsFacebook, BsTwitterX, BsYoutube, BsInstagram } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="header-top border-b border-gray-200 hidden sm:block">
      <div className="container p-4">
        <div className=" flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="icons">
              <BsFacebook />
            </div>
            <div className="icons">
              <BsTwitterX />
            </div>
            <div className="icons">
              <BsInstagram />
            </div>
            <div className="icons">
              <BsYoutube />
            </div>
          </div>

          <div className="text-gray-500 text-[12px]">
            <p>
              <strong>FREE SHIPPING</strong> THIS WEEK ORDER OVER - $55
            </p>
          </div>
          <div className="flex gap-4">
            <select name="currency" id="currency" className="text-gray-500 text-[12px] w-[70px]">
              <option value="USD $">USD $</option>
              <option value="EURO">EURO €</option>
            </select>
            <select name="language" id="language" className="text-gray-500 text-[12px] w-[70px]">
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
