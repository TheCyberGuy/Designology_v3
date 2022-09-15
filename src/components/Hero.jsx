import React from "react";
import Business from "../assets/business.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center h-screen w-screen">
      <div className="flex flex-col justify-center px-8">
        <p className="text-xl py-2">20 cities and growing</p>
        <h2 className="text-5xl font-semibold">Being funders</h2>
        <h2 className="text-5xl font-semibold">Get guts</h2>
        <p className="pt-3 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
          voluptate?
        </p>
        <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
        <div className="flex justify-around md:gap-52 pb-4 md:pb-0 gap-4 pt-5">
          {/*  */}
          <button className="bg-black text-white rounded-xl flex items-center justify-center py-2 px-5">
            Book Demo
          </button>
          {/* watch us */}
          <button className="bg-black text-white md:p-5 p-2 rounded-xl flex items-center">
            <FontAwesomeIcon
              icon={faPlay}
              className="text-white hidden md:block hover:rotate-[360deg] duration-700 md:text-xl text-md text-center"
            />
            <span className="md:pl-2">Watch us during work</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-8">
        <img
          src={Business}
          alt=""
          className="md:w-[512px] mx-auto md:h-[512px]"
        />
      </div>
    </div>
  );
};

export default Hero;
