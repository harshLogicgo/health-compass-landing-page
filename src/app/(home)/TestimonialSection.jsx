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
    name: "Thomas Daniel",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
  },
  {
    id: 2,
    name: "Alena Alex",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
  },
  {
    id: 3,
    name: "Thomas Edison",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
  },
  {
    id: 4,
    name: "Marie Curie",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
  },
  {
    id: 5,
    name: "Albert Einstein",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
  },
  {
    id: 6,
    name: "Isaac Newton",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
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
      <div className="mx-auto ">
        <div className="text-center main-container mb-12 relative">
          <h2 className="section-title relative inline-block">
            Our Happy Clients
            <img
              className="title-pattern top-[100%] left-[50%]"
              src={Images.other.titlePattern}
              alt=""
            />
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <img
            className="pattern-l-top mt-[100px] md:mt-0"
            src={Images.other.infoPattern}
            alt=""
          />
          <img
            className="pattern-r-top"
            src={Images.other.infoPattern}
            alt=""
          />
        </div>

        <div className="relative testimonials-slider">
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
              <SwiperSlide className="py-6 p-4" key={testimonial.id}>
                <div className="testimonial-card h-full">
                  <div className="flex items-center mb-3">
                    <Image
                      src={Images.other.user1}
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
                  <p className="text-[15px] leading-6 text-gray-600 line-clamp-5">
                    {testimonial.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

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
