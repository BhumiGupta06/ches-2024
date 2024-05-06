"use client";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@/components/Provider";
import { useState } from "react";
import { events } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export function EventCard({
  description,
  InnerImage,
  CoverImage,
  index,
  link,
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div
        onClick={handleOpen}
        className="bg-background-900 rounded-xl cursor-pointer p-6 sm:px-6 hover:shadow-lg hover:shadow-text-500/60 w-full">
        <Image
          height={200}
          width={300}
          className=" rounded-xl  object-cover w-full "
          src={CoverImage}
          alt="titleImage"
        />
      </div>

      <Dialog
        open={open}
        handler={handleOpen}
        size="lg"
        className="bg-gradient-to-tl from-[#451452] to-[#26062d] bg-opacity-30 backdrop-filter  rounded-lg shadow-lg  h-[90dvh] md:h-auto overflow-y-scroll md:overflow-hidden"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}>
        <div className="p-4 md:p-8 ">
          <div>
            <Image
              src={InnerImage}
              alt="Event Image"
              height={200}
              width={200}
              className="rounded-lg w-full md:w-80 aspect-[1/1] object-contain md:float-left float-none mb-2 mr-4"
            />
          </div>
          <div className="">
            <h3 className="text-base md:text-xl text-text-200 text-justify">
              {description}
            </h3>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-2">
            <span>Close</span>
          </Button>
          <Link
            href={link}
            target="_blank"
            className=" bg-accent-500 hover:bg-accent-600  text-white  p-2 rounded-md">
            Know More
          </Link>
        </DialogFooter>
      </Dialog>
    </>
  );
}
export default EventCard;
