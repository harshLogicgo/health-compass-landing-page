import { Images } from "@/data/images";
import React from "react";

const Banner = () => {
  console.log("test")
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
      <div
        className="absolute inset-0 bg-cover bg-left z-0"
        style={{
          backgroundImage: `url(${Images.mainBanner})`,
          backgroundPosition: "left 30%",
        }}
      >
        <div className="absolute inset-0 bg-primary/65 xl:hidden"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:ms-auto">
          <h1  className="banner-heading mb-2">
            Your trusted partner in digital healthcare. 
          </h1>
          {/* <h2 className="banner-subheading">Your Guide to Smarter Wellness</h2> */}
          <p className="banner-paragraph">
            Simplify your health requirements with Health Compass, navigate the
            complex. Track supplements, get AI-driven insights, and stay on top
            of your wellness. All in one place. Built for clarity, trusted by
            seniors, powered by science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
