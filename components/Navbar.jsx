"use client";
import Image from "next/image";
import { useState } from "react";
import { NavLinks } from "@/constants";
import React from "react";
import Link from "next/link";
// import { motion } from "framer-motion";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed  px-4 lg:px-28 z-50 backdrop-blur-[8px]  bg-accent-600/20 w-full h-[70px] flex justify-between items-center shadow-md">
      <Link href={"/"} className="text-accent-200 text-xl font-bold uppercase ">
        <p className="hover:scale-105 transition-all duration-[300ms] font-heading">
          ChES-SVNIT
        </p>
      </Link>
      <ul className="hidden md:flex h-full flex-row gap-x-6 items-center">
        {NavLinks.map((link) => (
          <li
            className="  text-text-200 hover:text-text-300  hover:scale-105 transition-all duration-200 ease-in-out "
            key={link.title}>
            <Link
              scroll={true}
              onClick={() => setActive(link.title)}
              className={`${
                active === link.title ? "text-secondary-400 font-semibold " : ""
              } text-base font-normal uppercase hover:font-semibold transition-all duration-100 ease-in-out`}
              href={`${link.id}`}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="flex md:hidden text-secondary-300 text-2xl cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <IoMdClose /> : <HiMenuAlt1 />}
      </button>
      {showMenu && (
        <div className="absolute top-[70px] left-0 w-full bg-gradient-to-br from-indigo-300 from-20% via-sky-300/90 via-30% to-emerald-500 to-80%  flex flex-col h-screen p-5 items-center md:hidden z-50">
          <ul className="flex flex-col gap-8 items-center">
            {NavLinks.map((link) => (
              <li
                onClick={() => {
                  setActive(link.title), setShowMenu(false);
                }}
                className=" hover:scale-105 text-text-300  transition-all duration-200 "
                key={link.title}>
                <Link
                  scroll={true}
                  className={`${
                    active === link.title
                      ? "text-secondary-400 font-semibold"
                      : ""
                  } text-base font-normal uppercase hover:font-semibold transition-all duration-200 ease-in-out`}
                  href={`${link.id}`}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
