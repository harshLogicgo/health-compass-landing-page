"use client";

import { Images } from "@/data/images";
import React, { useCallback, useRef, useState } from "react";

const Banner = () => {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef(null);

  const handleOpenModal = useCallback(() => setIsModal(true), []);
  const handleCloseModal = useCallback(() => setIsModal(false), []);

  const handlePlay = () => {
    setIsPlay(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch((err) => {
          console.error("Autoplay failed:", err);
        });
      }
    }, 100);
  };

  const handleEnded = () => {
    setIsPlay(false);
  };
  return (
    // <div
    //   className="bannerSection"
    //   style={{ backgroundImage: `url(${Images.mainBanner})` }}
    // >
    //   <div className="container h-full relative mx-auto">
    //     <div class="absolute w-2/4 right-0 top-1/2 -translate-y-1/2 text-white p-4 rounded">
    //       <h1 className="banner-heading mb-3">Health Compass</h1>
    //       <h2 className="banner-subtitle">Your Guide to Smarter Wellness</h2>
    //       <p className="text-paragraph">
    //         Simplify your health journey with Health Compass—coming this summer.
    //         Track supplements, get AI-driven insights, and stay on top of your
    //         wellness—all in one place. Built for clarity, trusted by seniors,
    //         powered by science.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <section className="relative bannerSection overflow-hidden mb-6">
      {/* Background image with overlay */}
      {/* <div
        className="absolute inset-0 bg-cover bg-left z-0"
        style={{
          backgroundImage: `url(${Images.mainBanner})`,
          backgroundPosition: "left 30%",
        }}
      >
        <div className="absolute inset-0 bg-primary/65 xl:hidden"></div>
      </div> */}

      {isPlay ? (
        <video
          ref={videoRef}
          className="object-cover object-center w-full h-full"
          src="https://videos.pexels.com/video-files/7579843/7579843-uhd_2732_1440_25fps.mp4"
          autoPlay
          controls
          controlsList="nodownload"
          playsInline
          onEnded={handleEnded}
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-left z-0"
          style={{
            backgroundImage: `url(${Images.mainBanner})`,
            backgroundPosition: "left 30%",
          }}
        >
          {/* <div className="absolute inset-0 bg-primary/65 xl:hidden"></div> */}
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
        {/* <img className="w-[150px]" src={Images.other.play} alt="" /> */}

        {!isPlay && (
          <img
            onClick={handlePlay}
            className="w-[80px] sm:w-[150px] cursor-pointer zoom-animation"
            src={Images.other.play}
            alt=""
          />
        )}

        {/* <div className="max-w-2xl mx-aut lg:mx-0 lg:ms-auto"> */}
        {/* <h1  className="banner-heading mb-2">
            Your trusted partner in digital healthcare. 
          </h1>
          <p className="banner-paragraph">
            Simplify your health requirements with Health Compass, navigate the
            complex. Track supplements, get AI-driven insights, and stay on top
            of your wellness. All in one place. Built for clarity, trusted by
            seniors, powered by science.
          </p> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Banner;
