import Image from "next/image";
import { Hero } from "../public/assets/index.js";
import Link from "next/link";
import { heroDoodle } from "../public/assets/index.js";

export default function Home() {
  return (
    <section
      id="hero"
      className="pt-[75px] min-h-screen w-full px-4 md:px-28 bg-heroBg-mobile2 sm:bg-heroBg bg-cover bg-no-repeat bg-center">
      <div className="flex md:flex-row   flex-col gap-x-20 gap-y-16  mt-4 md:mt-12">
        <div className="md:w-1/2 w-full">
          <div>
            <h1 className="md:text-6xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr  from-indigo-700 via-30% to-text-400 to-70% py-2 font-heading">
              Chemical Engineering Society
            </h1>
            <p className="md:text-3xl text-xl font-body text-text-200 mt-1">
              Fuel your passion for Chemical Engineering – where curiosity
              sparks progress
            </p>
          </div>
          {/* <div>
            <Link href={"/"}>
              <button className="mt-6 bg-secondary-600 hover:bg-primary-600/50 text-accent-300 font-bold px-8 py-3 rounded-md">
                Know More
              </button>
            </Link>
          </div> */}
        </div>

        <div className="md:w-1/2 w-full ">
          <div className="relative mt-4 ">
            <Image
              className="drop-shadow-md mb-8 mt-6"
              src={heroDoodle}
              height={550}
              width={550}
              alt="HeroImage"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
