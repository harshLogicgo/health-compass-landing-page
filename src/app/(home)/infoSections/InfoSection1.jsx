import React from "react";
import Image from "next/image";
import { Images } from "@/data/images";
import { CheckCircle, Phone } from "lucide-react";

const InfoSection1 = () => {
  return (
    <div className="main-container mx-auto section-container" id="service">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-between h-full items-start md:py-8">
            <span>
              <h2 className="section-title md:mb-8 mb-4 relative">
                Stay On Track with HealthCompass
                <span>
                  <img
                    className="title-pattern"
                    src={Images.other.titlePattern}
                    alt=""
                  />
                </span>
              </h2>
              <p className="section-subtitle mb-8 md:mb-6">
                Helping seniors manage their health, appointments, and
                supplements with smart AI support. Effortlessly track
                medications, set reminders, and stay connected with your
                healthcare journey.
              </p>
            </span>
            {/* <div className="flex w-full items-center xl:mb-8">
              <div className="flex w-full sm:w-[300px] w-md border-gray-300 border border-r-0 rounded-l-lg py-[10px] px-4">
                <Phone
                  className="text-primary me-3 hidden md:block"
                  size={20}
                />
                <input
                  type="tel"
                  placeholder="Enter your Phone Number"
                  className="flex-1  focus:outline-none"
                />
              </div>
              <button className="bg-primary text-white font-semibold px-3 md:px-6 rounded-r-lg hover:bg-primary-light transition-colors">
                Submit
              </button>
            </div> */}

            <div className="flex w-full xl:mb-8 px-4 sm:px-0">
              <div className="flex w-full sm:w-[300px] items-center border-black border border-r-0 rounded-l-lg py-[10px] px-4">
                <Phone className="text-black me-3 hidden md:block" size={20} />
                <input
                  type="tel"
                  placeholder="Enter your Phone Number"
                  className="flex-1 focus:outline-none"
                />
              </div>
              <button
                // onClick={handleOpenModal}
                className="bg-primary text-nowrap text-white font-semibold px-3 md:px-6 rounded-r-lg hover:bg-primary-light transition-colors"
              >
                Submit{" "}
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg relative max-w-[400px] mx-auto md:max-w-full">
              <Image
                src={Images.other.info1}
                alt="Healthcare professional with patient"
                width={500}
                height={500}
                className="md:w-[75%] h-auto mx-auto md:mx-auto  z-10"
              />
            </div>
            <img
              className="infoPattern1"
              src={Images.other.infoPattern}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection1;
