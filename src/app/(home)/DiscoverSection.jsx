"use client";

import Slider from "@/components/common/Slider";
import React, { useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  {
    title: "Compass Essentials",
    description:
      "Get started with the basics mood tracking, reflections, and daily insights.",
    idealFor: "Beginners orlight users",
  },
  {
    title: "Compass Plus",
    description:
      "Unlock Al-powered journaling and deeper insights for your wellness growth.",
    idealFor: "Users wanting mor structure",
  },
  {
    title: "Compass Pro",
    comingYr: "2026",
    description:
      "Unlock Al-powered journaling and deeper insights for your wellness growth.",
  },
  {
    title: "Compass Essentials",
    description:
      "Get started with the basics mood tracking, reflections, and daily insights.",
    idealFor: "Beginners orlight users",
  },
  {
    title: "Compass Plus",
    description:
      "Unlock Al-powered journaling and deeper insights for your wellness growth.",
    idealFor: "Users wanting mor structure",
  },
];

const DiscoverSection = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const sliderId = "2";
  return (
    <Slider
      title="Discover Compass Tiers"
      description="A plan for every journey."
      isBeginning={isBeginning}
      isEnd={isEnd}
      sliderId={sliderId}
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: `.button-next-${sliderId}`,
          prevEl: `.button-prev-${sliderId}`,
        }}
        onSwiper={(swiper) => {
          //   setSwiperInstance(swiper);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1, slidesOffsetBefore: 8 },
          550: { slidesPerView: 1.7 },
          660: { slidesPerView: 2 },
          1240: {
            slidesPerView: 2.5,
            slidesOffsetBefore: 10,
            slidesOffsetAfter: 10,
          },
          1120: {
            slidesPerView: 3.3,
            slidesOffsetBefore: 10,
            slidesOffsetAfter: 10,
          },
          1250:{
            slidesPerView: 3.3,
            slidesOffsetBefore: 10,
            slidesOffsetAfter: 10,
          },
          1540: {
            slidesPerView: 4.5,
            slidesOffsetBefore: 8,
            slidesOffsetAfter: 0,
          },
        }}
        className="pt-16"
      >
        {data.map((item, index) => {
          const title = item?.title || "";
          const description = item?.description;
          const idealFor = item?.idealFor;
          const comingYr = item?.comingYr;
          return (
            <SwiperSlide key={index} className="py-6 p-2 sm:p-4">
              {comingYr ? (
                <div className="relative z-[2] cursor-pointer  shadow rounded-lg overflow-hidden p-5 bg-[#EDEDED]">
                  <h3 className="mb-10 text-dark-teal-blue text-2xl font-semibold">
                    {title}
                  </h3>
                  <p className="text-gray-blue mb-2 text-sm font-medium">
                    {description}
                  </p>
                  <span className="text-gray-blue text-sm font-medium">
                    <b className="text-black">Ideal for: </b> {idealFor}
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center text-center z-10">
                    <div className="w-full h-full backdrop-blur-xs bg-black/5 rounded-xl p-5 text-black text-3xl font-extrabold flex flex-col justify-center items-center">
                      Coming Soon <br /> {comingYr}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative z-[2] cursor-pointer  shadow rounded-lg overflow-hidden p-5">
                  <h3 className="mb-10 text-dark-teal-blue text-2xl font-semibold">
                    {title}
                  </h3>
                  <p className="text-gray-blue mb-2 text-sm font-medium">
                    {description}
                  </p>
                  <span className="text-gray-blue text-sm font-medium">
                    <b className="text-black">Ideal for: </b> {idealFor}
                  </span>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Slider>
  );
};

export default DiscoverSection;
