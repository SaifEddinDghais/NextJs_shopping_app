import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div className="container py-16">
        <h2 className="font-medium text-2xl pb-4">Testimonials</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          <div className="grid lg:grid-cols-[300px,1fr] gap-4">
            <div className="border border-gray-300 rounded-2xl grid place-items-center lg:p-0">
              <div className=" text-center flex flex-col items-center gap-2 md:gap-1 ">
                <Image
                  className="rounded-full inline-block"
                  src="/user.jpg"
                  width={80}
                  height={80}
                  alt="profile"
                />
                <h2 className="text-gray-500 font-black text-[20px]">
                  elsa doe
                </h2>
                <p>CEO & Founder invision</p>
                <Image
                  className="inline-block py-2 "
                  src="/quotes.svg"
                  width={30}
                  height={30}
                  alt="quotes"
                />
                <p className="max-w-[200px] text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-600 testimonial_bg__img h-[400px] rounded-2xl grid place-items-center flex-1">
            <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
              <button className="bg-blackish text-white p-2 rounded-md">
                25% DISCOUNT
              </button>
              <h2 className="font-extrabold text-2 text-[#272727] ">
                Summer collection
              </h2>
              <p className="text-gray-500 text-[20px] ">
                Starting @ 20$ <strong>Shop Now</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
