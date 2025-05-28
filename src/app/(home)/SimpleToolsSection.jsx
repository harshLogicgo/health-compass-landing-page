import { Images } from "@/data/images";
import React from "react";

const SimpleToolsSection = () => {
  return (
    <div className="main-container section-container">
      <h2 className="section-title inline-block">
        Simple Tools for Everyday Care{" "}
      </h2>
      <div className="flex md:w-[95%] lg:w-[80%]">
        <div className="mt-2 md:mt-6 flex  flex-col md:flex-row w-full">
          <p className="section-subtitle">
            At HealthCompass, we make managing healthcare easy and stress-free
            for seniors.
          </p>
          <span className="text-sm sm:text-base  block sm:hidden translate-y-[100%] text-center relative z-20">
            <span className="rounded-md text-gray-blue bg-white shadow-lg px-4 block sm:px-5 py-2 max-w-fit mx-auto">
              Personalized supplement and medicine tracking
            </span>
          </span>
          <div className="bg-primary text-gray-blue font-medium rounded-full  relative md:translate-x-[-10%] md:min-w-[500px] mx-auto max-w-[500px] md:max-w-full md:w-[90%] aspect-square  mt-5 sm:mt-10 md:mt-0">
            <div className="overflow-hidden w-full h-full rounded-full ">
              <img
                src={Images.other.simpleToolsBg}
                className="w-full h-full object-cover object-bottom"
                alt=""
              />
            </div>
            <span className="text-sm sm:text-base  hidden sm:flex absolute top-[0%] sm:top-[50%] text-center left-0 right-0 sm:right-auto  md:left-[-30%] lg:left-[-25%]">
              <span className="rounded-md bg-white shadow-lg px-4 block sm:px-5 py-2 max-w-fit mx-auto">
                Personalized supplement and medicine tracking
              </span>
            </span>
            <span className="text-sm sm:text-base bg-white shadow-lg px-4 sm:px-5 py-2 absolute top-[50%] sm:top-[20%] rounded-md max-w-fit right-0 sm:right-[-10%] lg:right-[-12%]">
              Easy-to-use reminders
            </span>
            <span className="text-sm sm:text-base bg-white shadow-lg px-5 py-2 absolute top-[65%] sm:top-[70%] md:top-[50%] rounded-md max-w-fit right-[5%] sm:right-[-14%] lg:right-[-20%]">
              24/7 virtual assistance
            </span>
            <span className="text-sm sm:text-base bg-white shadow-lg px-5 py-2 absolute top-[80%] sm:top-[85%] md:top-[80%] rounded-md max-w-fit right-[12%] sm:right-[-10%] lg:right-[-18%]">
              Caregiver access and updates
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleToolsSection;
