import React from "react";
import { FaLinkedin } from "react-icons/fa";
// import { Teams } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { dhyey, teamImg } from "@/public/assets";
import { getCommittee, getStudentHeads } from "@/sanity/utilsSanity";

const page = async () => {
  const committees = await getCommittee();
  const studentHeads = await getStudentHeads();
  return (
    <section className="px-4 md:px-28 pt-[75px] w-full min-h-screen mb-6">
      <h1 className="md:text-4xl text-3xl font-bold font-heading text-secondary-200 mt-4 decoration-4  decoration-accent-500 underline underline-offset-8  ">
        Our Team
      </h1>
      <div className="w-full mt-8 ">
        <Image
          src={teamImg}
          alt="team"
          className="h-[60dvh] object-center rounded-md w-full object-cover"
        />
      </div>

      <h1 className="md:text-3xl text-2xl font-bold font-heading text-secondary-200 mt-10 decoration-4  decoration-accent-500 underline underline-offset-8  ">
        Student Heads
      </h1>
      <div className=" my-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {studentHeads.map((StudentHead) => (
          <div
            key={StudentHead.position}
            className="bg-gradient-to-tl from-[#451452] to-[#26062d] bg-opacity-30 backdrop-filter  backdrop-blur-lg  shadow-lg p-4 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-text-500/60  sm:w-[100%] flex items-center justify-between  gap-2 ">
            <div>
              <div className="text-base sm:text-xl font-bold font-heading text-text-200 ">
                {StudentHead.position}
              </div>
              <div className="text-[.9rem] text-accent-300 pb-2 font-semibold">
                {StudentHead.name}
              </div>
              <Link
                href={`${StudentHead.linkedin}`}
                target="_blank"
                rel="noreferrer"
                aria-label="linkedIn">
                <FaLinkedin className="text-xl text-text-200 hover:text-accent-400" />
              </Link>
            </div>
            <Image
              src={StudentHead.ImageUrl}
              alt="Img"
              height={100}
              width={100}
              className="float- h-24 w-24 rounded-lg"
            />
          </div>
        ))}
      </div>

      <h1 className="md:text-3xl text-2xl font-bold font-heading text-secondary-200 mt-4 decoration-4  decoration-accent-500 underline underline-offset-8  ">
        Committee Heads
      </h1>
      <div className="my-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {committees.map((committee) => (
          <div
            key={committee.head}
            className="bg-gradient-to-tl from-[#451452] to-[#26062d] bg-opacity-30 backdrop-filter  backdrop-blur-lg  shadow-lg p-4 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-text-500/60  sm:w-[100%] flex items-center justify-between  gap-2 ">
            <div>
              <div className="text-base sm:text-xl font-bold font-heading text-text-200 ">
                {committee.committee}
              </div>
              <div className="text-[.9rem] text-accent-300 pb-2 font-semibold">
                {committee.head}
              </div>
              <Link
                href={`${committee.linkedin}`}
                target="_blank"
                rel="noreferrer"
                aria-label="linkedIn">
                <FaLinkedin className="text-xl text-text-200 hover:text-accent-400" />
              </Link>
            </div>
            <Image
              src={committee.ImageUrl}
              alt="Img"
              height={100}
              width={100}
              className="float- h-24 w-24 rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="h-screen sm:h-[50vh] w-full mt-12 bg-contain bg-center bg-no-repeat bg-aluminiMobile sm:bg-alumini"></div>
    </section>
  );
};

export default page;
