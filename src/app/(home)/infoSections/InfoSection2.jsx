import React from "react";
import Image from "next/image";
import { Images } from "@/data/images";
import { Mail, ShieldCheck } from "lucide-react";

const InfoSection2 = () => {
  return (
    <div className="main-container mx-auto section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 ">
          <div className="rounded-lg relative max-w-[400px] mx-auto md:max-w-full">
            <Image
              src={Images.other.info2}
              alt="Healthcare professionals"
              width={500}
              height={500}
              className="md:w-[75%] h-auto mx-auto md:mx-auto  z-10"
            />
            <img
              className="infoPattern1"
              src={Images.other.infoPattern}
              alt=""
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="section-title md:mb-6 mb-4 relative">
            Smarter Care Starts Here
            <img
              className="title-pattern bottom-0 mt-5"
              src={Images.other.titlePattern}
              alt=""
            />
          </h2>
          <p className="section-subtitle mb-8 md:mb-10 xl:w-[60%]">
            HealthCompass uses advanced AI to help older adults and caregivers
            manage
          </p>
          <div className="space-y-3 mb-10 md:mb-12">
            <div className="feature-item">
              <ShieldCheck className="feature-icon" size={20} />
              <span>Top quality dental team</span>
            </div>
            <div className="feature-item">
              <ShieldCheck className="feature-icon" size={20} />
              <span>State of the art dental services</span>
            </div>
            <div className="feature-item">
              <ShieldCheck className="feature-icon" size={20} />
              <span>Discount on all dental treatment</span>
            </div>
            <div className="feature-item">
              <ShieldCheck className="feature-icon" size={20} />
              <span>Enrollment is quick and easy</span>
            </div>
          </div>
          <div className="flex w-full mb-7 mt-14 sm:mt-6">
            <div className="flex w-[300px] items-center border-black border border-r-0 rounded-l-lg py-[10px] px-4">
              <Mail className="text-black me-3 hidden md:block" size={20} />
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-1 focus:outline-none"
              />
            </div>
            <button
              // onClick={handleOpenModal}
              className="bg-primary text-nowrap text-white font-semibold px-3 md:px-6 rounded-r-lg hover:bg-primary-light transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection2;
