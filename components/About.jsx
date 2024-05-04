"use client";
import React from "react";
import { Carousel, IconButton } from "./Provider";
import Image from "next/image";
import { slides } from "@/constants";
const About = () => {
  return (
    <section id="About" className="px-4 md:px-28 py-4 w-full min-h-screen">
      <h1 className="text-3xl font-bold font-heading">About Us</h1>
      <div className="my-8 p-4 md:p-8 bg-secondary-800/60 bg-opacity-30 backdrop-filter backdrop-blur-lg  rounded-lg shadow-lg">
        <Carousel
          autoplay={true}
          loop={true}
          className="rounded-xl "
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i
                      ? "w-8  bg-background-500"
                      : "w-4 bg-background-500/40"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute bottom-0 left-4 -translate-y-2/4 text-secondary-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-8 w-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute bottom-0 !right-4 -translate-y-2/4 text-secondary-400 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-8 w-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}>
          {slides.map((slide) => (
            <div key={slides.map} className="md:px-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-y-8">
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-100">
                    {slide.name}
                  </h2>
                </div>
                <div className="w-full md:w-1/2">
                  <Image
                    src={slide.img}
                    alt={slide.name}
                    width={200}
                    height={200}
                    className=" w-[80%] md:w-[40%] aspect-[3/2] object-contain rounded-xl"
                  />
                </div>
              </div>
              <div className="">
                <p className="text-text-100 text-base md:text-xl mb-14 mt-8">
                  {slide.content}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default About;
