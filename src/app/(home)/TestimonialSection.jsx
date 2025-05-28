"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  MoveLeft,
  MoveRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Images } from "@/data/images";

const testimonials = [
  {
    id: 1,
    name: "Thomas daniel",
    age: "45, Physician ",
    avatar:
      "https://avatars.mds.yandex.net/i?id=d9b2a0b864f9d65322265c07dd2a56df3870f975-4495103-images-thumbs&n=13",
    rating: 5,
    text: "With years of experience, he has earned a reputation for being reliable, compassionate, and deeply committed to patient care",
  },
  {
    id: 2,
    name: "Alena Alex",
    age: "55, User",
    avatar:
      "https://i.pinimg.com/originals/2e/82/d2/2e82d272e5f49490efd2d733e4322e5a.jpg",
    rating: 5,
    text: "Alena Alex is a 55-year-old user known for her thoughtful insights and positive attitude. She brings a wealth of life experience and a practical perspective to any setting.",
  },
  {
    id: 3,
    age: " 65, Caregiver",
    name: "Thomas Edison",
    avatar:
      "https://www.fortunebuilders.com/wp-content/uploads/2015/02/surviving-the-real-estate-business.jpg",
    rating: 5,
    text: "Thomas Edison is a 65-year-old caregiver with a warm heart and a strong sense of responsibility. His compassionate nature and years of dedication make him a trusted presence in caregiving.",
  },
  {
    id: 1,
    name: "Thomas daniel",
    age: "45, Physician ",
    avatar:
      "https://avatars.mds.yandex.net/i?id=d9b2a0b864f9d65322265c07dd2a56df3870f975-4495103-images-thumbs&n=13",
    rating: 5,
    text: "With years of experience, he has earned a reputation for being reliable, compassionate, and deeply committed to patient care",
  },
  {
    id: 2,
    name: "Alena Alex",
    age: "55, User",
    avatar:
      "https://i.pinimg.com/originals/2e/82/d2/2e82d272e5f49490efd2d733e4322e5a.jpg",
    rating: 5,
    text: "Alena Alex is a 55-year-old user known for her thoughtful insights and positive attitude. She brings a wealth of life experience and a practical perspective to any setting.",
  },
  {
    id: 3,
    age: " 65, Caregiver",
    name: "Thomas Edison",
    avatar:
      "https://www.fortunebuilders.com/wp-content/uploads/2015/02/surviving-the-real-estate-business.jpg",
    rating: 5,
    text: "Thomas Edison is a 65-year-old caregiver with a warm heart and a strong sense of responsibility. His compassionate nature and years of dedication make him a trusted presence in caregiving.",
  },
];

export default function TestimonialsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="relative overflow-hidden section-container px-0">
      <div className="mx-auto">
        <div className="text-start main-container mb-12 ">
          <h2 className="section-title relative inline-block">
            Our Happy People
            <img
              className="title-pattern top-[100%] left-[50%]"
              src={Images.other.titlePattern}
              alt=""
            />
          </h2>
          {/* <p className="section-subtitle max-w-2xl mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p> */}
          {/*           
          <img
            className="pattern-r-top"
            src={Images.other.infoPattern}
            alt=""
          /> */}
        </div>

        <div className="relative testimonials-slider h-full">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={false}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            autoplay={{
              delay: 3000, // 4 seconds between slides
              disableOnInteraction: false, // autoplay continues after user interaction
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: {
                slidesPerView: 2.5,
                slidesOffsetBefore: 10,
                slidesOffsetAfter: 10,
              },
              1440: {
                slidesPerView: 3.5,
                slidesOffsetBefore: 32,
                slidesOffsetAfter: 32,
              },
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide className="py-6 p-4 h-full" key={testimonial.id}>
                <div className="testimonial-card h-full flex flex-col">
                  <div className="flex items-center mb-3">
                    <Image
                      src={testimonial?.avatar || Images.other.user1}
                      //   src={testimonial.avatar}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="testimonial-avatar mr-3 rounded-full"
                    />
                    <div>
                      <h4 className="font-medium text-lg">
                        {testimonial.name}
                      </h4>
                      <div className="star-rating flex gap-1 text-yellow-500">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[15px]  text-gray-600">
                    {testimonial.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <img
            className="pattern-l-bottom mb-[20px]"
            src={Images.other.infoPattern}
            alt=""
          />

          {/* Navigation Buttons */}
          <span className="flex items-center justify-center gap-4 mt-10">
            <button
              disabled={isBeginning}
              ref={prevRef}
              className="disabled:opacity-50 disabled:hover:bg-dark-teal-blue top-1/2 -translate-y-1/2 -left-4 z-10 w-[100px] h-10 flex items-center justify-center bg-dark-teal-blue shadow-md text-white hover:bg-primary hover:text-white transition-colors"
            >
              <MoveLeft size={28} />
            </button>
            <button
              disabled={isEnd}
              ref={nextRef}
              className="disabled:opacity-50 disabled:hover:bg-dark-teal-blue top-1/2 -translate-y-1/2 -left-4 z-10 w-[100px] h-10 flex items-center justify-center bg-dark-teal-blue shadow-md text-white hover:bg-primary hover:text-white transition-colors"
            >
              <MoveRight size={28} />
            </button>
          </span>
        </div>
      </div>
    </section>
  );
}
