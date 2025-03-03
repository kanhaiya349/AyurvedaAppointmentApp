import React from "react";
import banner1 from "../assets/headBanner1.png";
import arrowIcon from "../assets/arrow_icon.svg";
import groupprofile from "../assets/groupProf1.png";

function Header() {
  return (
    <div className="my-5 w-full flex flex-col md:flex-row justify-between bg-[#FF2B44] px-6 md:px-8 lg:px-16 rounded-xl pt-6">
      <div className="md:w-1/2 flex flex-col gap-5 justify-center items-center md:items-start m-auto">
        <p className=" text-3xl lg:text-4xl xl:text-5xl text-white font-semibold leading-tight">
          Book Appointment <br /> With Ayurveda Specialist
        </p>
        <div className="flex flex-col md:flex-row items-center gap-5 mt-1">
          <img className="w-[65px] h-full" src={groupprofile} />
          <p className="text-white text-sm">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("doctors")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mx-auto md:mx-0 cursor-pointer w-full my-2 mb-2 py-3 rounded-full flex justify-center items-center bg-white gap-2 text-sm text-[#404040] hover:scale-110 transition-all ease-in-out duration-700"
        >
          <p>Book Appointment</p>
          <img className="w-3" src={arrowIcon} />
        </a>
      </div>
      <div className="md:w-1/2 relative flex items-end">
        <img className="w-full rounded-lg object-cover" src={banner1} />
      </div>
    </div>
  );
}

export default Header;
