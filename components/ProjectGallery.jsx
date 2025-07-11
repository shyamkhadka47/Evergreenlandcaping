"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const images = [
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
  "6.webp",
  "7.webp",
  "8.webp",
  "9.webp",
  "10.webp",
  "11.webp",
  "12.webp",
  "13.webp",
  "14.webp",
  "15.webp",
  "16.webp",
  "17.webp",
  "18.webp",
  "19.webp",
  "20.webp",
  "21.webp",
  "22.webp",
  "23.webp",
  "24.webp",
  "25.webp",
  "26.webp",
  "27.webp",
  "28.webp",
  "29.webp",
  "30.webp",
  "31.webp",
  "32.webp",
  "33.webp",
  "34.webp",
  "35.webp",
  "36.webp",
  "37.webp",
  "38.webp",
  "39.webp",
  "40.webp",
  "41.webp",
  "42.webp",
  "43.webp",
  "44.webp",
  "45.webp",
  "ourwork1.webp",
  "ourwork2.webp",
  "ourwork3.webp",
  "ourwork4.webp",
  "ourwork6.webp",
  "ourwork7.webp",
  "ourwork8.webp",
  "work1.webp",
  "work2.webp",
  "work3.webp",
  "work5.webp",
  "steps.webp",
];

export default function ProjectGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openSwiper = (index) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="px-[5%] md:px-[10%]">
      {/* Masonry layout using CSS columns */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4 space-y-4">
        {images.map((src, index) => (
          <Image
            key={src}
            src={`/${src}`}
            alt=""
            width={800}
            height={600}
            sizes="(max-width:768px) 50vw, 33vw"
            className="w-full mb-4 rounded-lg cursor-pointer break-inside-avoid shadow hover:scale-105 transition-transform duration-300"
            onClick={() => openSwiper(index)}
          />
        ))}
      </div>

      {/* Swiper Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center mt-[100px]">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-4xl z-50"
          >
            ✕
          </button>

          <Swiper
            modules={[Navigation]}
            navigation
            initialSlide={startIndex}
            className="w-full h-full"
          >
            {images.map((src) => (
              <SwiperSlide key={src}>
                <div className="flex items-center justify-center h-full">
                  <Image
                    width={600}
                    height={450}
                    src={`/${src}`}
                    alt=""
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
}
