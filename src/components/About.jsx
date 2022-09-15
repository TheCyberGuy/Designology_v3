import React from "react";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

const About = () => {
  const [us, setUs] = useState(false);
  return (
    <div className="flex h-[45rem] md:flex-row flex-col w-screen md:justify-evenly justify-between bg-main pt-12 text-white">
      <div className="flex flex-1 flex-col items-center">
        <p className="text-2xl">About Us.</p>
        <p className="text-center pt-3 md:w-[40%] w-[90%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex
          rem sint fugit facilis, molestiae sit laudantium voluptates culpa
          officiis consequatur saepe omnis assumenda odit explicabo neque itaque
          placeat in eaque, expedita soluta aliquid sequi.
        </p>
      </div>
      <div className="flex flex-1 flex-col items-start justify-center">
        <motion.div
          className="h-[625px] rounded-md bg-white w-[450px]"
          animate={{
            x: us ? 150 : -150,
          }}
          transition={{ type: "slide", duration: 0.3 }}
        >
          <h2 className="text-black text-center text-2xl pt-3 duration-200">
            {us ? "Sas Csanad" : "Szoke-kiss adam"}
          </h2>
          <img
            src={
              us
                ? "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            alt=""
            className="mt-4 mx-auto w-[350px] rounded-md h-[350px]"
          />
          <p className="text-black w-[425px] mx-auto text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt fugit
            dolore eum quo, nobis, unde labore fuga placeat minus nesciunt neque
            ipsam nostrum provident sapiente similique beatae saepe nisi atque,
            error nam vitae facilis libero suscipit natus. Eveniet, ratione
            provident.
          </p>

          <div className="w-full flex justify-center items-center pt-8">
            <FontAwesomeIcon
              icon={faArrowRight}
              className={
                us
                  ? "text-center rotate-180 duration-300"
                  : "text-center rotate-0 duration-300"
              }
              color="black"
              onClick={() => setUs(!us)}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
