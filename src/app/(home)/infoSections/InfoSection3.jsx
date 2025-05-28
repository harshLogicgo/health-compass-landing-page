import React from "react";
import Image from "next/image";
import { Images } from "@/data/images";
import { CircleCheck } from "lucide-react";

const InfoSection3 = () => {
  return (
    <div className="main-container mx-auto section-container mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="section-title md:mb-6 mb-7 relative font-bold">There are many variations</h2>
          <p className="section-subtitle mb-6">
            Mankind Pharma is not just a workplace. It's a fountain of
            innovation. And by joining us, you will be one of the trailblazers
            using science to shape a healthier Bharat.
          </p>
          <div className="space-y-3 mb-10 md:mb-12">
            <div className="feature-item">
              <CircleCheck className="feature-icon" size={20} />
              <span>Nurturing growth in a world-class environment</span>
            </div>
            <div className="feature-item">
              <CircleCheck className="feature-icon" size={20} />
              <span>Industry-leading compensation and perks</span>
            </div>
            <div className="feature-item">
              <CircleCheck className="feature-icon" size={20} />
              <span>Innovation that impacts global healthcare</span>
            </div>
          </div>
          <a href="#" className="uppercase border border-primary mt-6 py-3 px-9 rounded-full btn-teal font-medium  text-sm md:text-base">
            View open positions
          </a>
        </div>
        <div className="relative">
          <div className="rounded-lg relative max-w-[400px] mx-auto md:max-w-full">
            <Image
              src={Images.other.info3}
              alt="Healthcare professional with patient"
              width={500}
              height={500}
              className="md:w-[75%] h-auto mx-auto md:mx-auto  z-10"
            />
          </div>
          <img className="infoPattern1" src={Images.other.infoPattern} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InfoSection3;
