import React from "react";
import Image from "next/image";
import { Images } from "@/data/images";
import { ShieldCheck } from "lucide-react";

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
            It is a long established fact that a reader will be
            <img
              className="title-pattern"
              src={Images.other.titlePattern}
              alt=""
            />
          </h2>
          <p className="section-subtitle mb-8 md:mb-10">
            Many desktop publishing packages and web page <br /> editors now use
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
          <a href="#" className="btn-teal py-4 px-6 md:px-8">
            Book an appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoSection2;
