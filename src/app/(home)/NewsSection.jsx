"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import { Images } from "@/data/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import Slider from "@/components/common/Slider";

// import { Link } from "react-router-dom" // Uncomment if using React Router

const articles = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Article Author",
    date: "May 12, 2025",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Article Author",
    date: "May 10, 2025",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Article Author",
    date: "May 8, 2025",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Article Author",
    date: "May 5, 2025",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Article Author",
    date: "May 8, 2025",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Article Author",
    date: "May 5, 2025",
  },
];

export default function NewsSection() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const sliderId = "1";

  return (
    <Slider
      title="News & Articles"
      description="here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in"
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
          setSwiperInstance(swiper);
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
          0: { slidesPerView: 1.3, slidesOffsetBefore: 8 },
          480: { slidesPerView: 1.7 },
          640: { slidesPerView: 2.5 },
          1024: {
            slidesPerView: 3.5,
            slidesOffsetBefore: 10,
            slidesOffsetAfter: 10,
          },
          1440: {
            slidesPerView: 4.5,
            slidesOffsetBefore: 8,
            slidesOffsetAfter: 0,
          },
        }}
        className="pt-16"
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index} className="py-6 p-2 sm:p-4">
            <div className="article-card relative z-[2] cursor-pointer bg-white shadow rounded-lg overflow-hidden p-5">
              <div className="relative">
                <img
                  src={Images.other.news}
                  alt={article.title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="article-content">
                <span className="bg-dark-teal-blue mt-6 mb-4 text-white font-medium px-4 py-1 inline-block rounded-lg">
                  Self care
                </span>
                <h3 className="article-title font-semibold text-xl">
                  {article.title}
                </h3>
                <p className="text-[14px] leading-6 text-gray-blue">
                  {article.excerpt}
                </p>
                <div className="article-meta flex justify-end text-sm text-dark-teal-blue mt-2">
                  <span>-{article.author}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Slider>
  );
}
