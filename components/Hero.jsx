"use client";
import Image from "next/image";
import { Hero } from "../public/assets/index.js";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { useEffect } from "react";
import THREE from "three";
import FOG from "vanta/src/vanta.fog";
export default function Home() {
  useEffect(() => {
    FOG({
      el: "#hero",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,

      highlightColor: "#5c64de",
      midtoneColor: "#d063dc",
      lowlightColor: "#2d00ff",
      baseColor: "#a1f7b9",
      speed: 1,
      blurFactor: 0.7,
      zoom: 1,
    });
  }, []);

  return (
    <section id="hero" className="pt-[75px] min-h-screen w-full px-4 md:px-28">
      <div className="flex md:flex-row flex-col gap-x-12 gap-y-20  mt-4 md:mt-12">
        <div className="md:w-1/2 w-full">
          <div>
            <h1 className="md:text-6xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr  from-indigo-700 via-30% to-secondary-300 to-70% py-2 font-heading">
              Chemical Engineering Society
            </h1>
            <p className="md:text-3xl text-xl font-body text-text-200 mt-1">
              Fuel your passion for Chemical Engineering – where curiosity
              sparks progress
            </p>
          </div>
          <div>
            <Link href={"/"}>
              <button className="mt-6 bg-secondary-400/60 hover:bg-primary-600/50 text-accent-200 font-bold px-8 py-3 rounded-md">
                Know More
              </button>
            </Link>
          </div>
        </div>

        {/* <div className="md:w-1/2 w-full ">
          <div className="relative w-full h-[300px] md:h-[500px] ">
            <Image
              className="drop-shadow-md pb-4"
              src={Hero}
              fill
              alt="Educator"
              priority
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
