import { Images } from "@/data/images";
import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";

const Slider = ({
  title,
  description,
  children,
  isBeginning,
  isEnd,
  sliderId,
}) => {
  const prevClass = `button-prev-${sliderId}`;
  const nextClass = `button-next-${sliderId}`;

  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="section-container mx-auto px-0">
        <div className="section-header main-container flex flex-col md:flex-row gap-6 items-center justify-between mb-0">
          <span className="block">
            <h2 className="section-title inline-block font-semibold relative">
              {title}
              <img
                className="title-pattern top-[100%]"
                src={Images.other.titlePattern}
                alt=""
              />
            </h2>
            <p className="section-subtitle w-2/2 md:w-2/3 mb-0">
              {description}
            </p>
          </span>

          <span className="items-center justify-center gap-4 mt-10 hidden md:flex">
            <button
              disabled={isBeginning}
              className={`${prevClass} disabled:opacity-50 disabled:hover:bg-dark-teal-blue z-10 w-[100px] h-10 flex items-center justify-center bg-dark-teal-blue shadow-md text-white hover:bg-primary hover:text-white transition-colors`}
            >
              <MoveLeft size={28} />
            </button>
            <button
              disabled={isEnd}
              className={`${nextClass} disabled:opacity-50 disabled:hover:bg-dark-teal-blue z-10 w-[100px] h-10 flex items-center justify-center bg-dark-teal-blue shadow-md text-white hover:bg-primary hover:text-white transition-colors`}
            >
              <MoveRight size={28} />
            </button>
          </span>
        </div>

        <div className="relative pt-3 sm:pt-10 xl:pt-16">
          {children}

          {/* Mobile buttons */}
          <span className="flex items-center justify-center gap-4 mt-6 md:hidden">
            <button
              disabled={isBeginning}
              className={`${prevClass} disabled:opacity-50 disabled:hover:bg-dark-teal-blue z-10 w-[100px] h-10 flex items-center justify-center bg-dark-teal-blue shadow-md text-white hover:bg-primary hover:text-white transition-colors`}
            >
              <MoveLeft size={28} />
            </button>
            <button
              disabled={isEnd}
              className={`${nextClass} disabled:opacity-50 disabled:hover:bg-dark-teal-blue z-10 w-[100px] h-10 flex items-center justify-center bg-dark-teal-blue shadow-md text-white hover:bg-primary hover:text-white transition-colors`}
            >
              <MoveRight size={28} />
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Slider;
