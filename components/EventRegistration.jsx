"use client";
import React from "react";
import { useForm } from "react-hook-form";

function EventRegistration() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("/api/Event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Registration Successful");
        reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Registration Failed");
        reset();
      });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gradient-to-tl from-[#451452] to-[#26062d] bg-opacity-30 backdrop-filter mt-6 backdrop-blur-lg p-6 rounded-lg shadow-lg">
        <h1 className="text-xl md:text-2xl font-bold text-center mb-4 text-secondary-200 font-heading mt-4">
          Register Here
        </h1>
        <p className="text-base md:text-lg text-center mb-8 text-text-100">
          Register for the event by filling out the form below.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-4 bg-text-100 border border-gray-300 placeholder:text-text-400 text-text-700 rounded-md focus:outline-none focus:border-primary-600"
              {...register("name", { required: true })}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-4 bg-text-100 border border-gray-300 placeholder:text-text-400 text-text-700 rounded-md focus:outline-none focus:border-primary-600"
              {...register("email", { required: true })}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="admNumber"
              placeholder="Admission Number"
              className="w-full p-4 bg-text-100 border border-gray-300 placeholder:text-text-400 text-text-700 rounded-md focus:outline-none focus:border-primary-600"
              {...register("admNumber", { required: true })}
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-4 bg-text-100 border border-gray-300 placeholder:text-text-400 text-text-700 rounded-md focus:outline-none focus:border-primary-600"
              {...register("phone", { required: true })}
              required
            />
          </div>
          <div>
            <select
              name="event"
              className="w-full p-4 bg-text-100 border border-gray-300 placeholder:text-text-400 text-text-700 rounded-md focus:outline-none focus:border-primary-600"
              {...register("event", { required: true })}
              required>
              <option className="font-body" value="">
                Select Event
              </option>
              <option className="font-body" value="Siphon">
                Siphon
              </option>
              <option className="font-body" value="Alchemy">
                Alchemy
              </option>
              <option className="font-body" value="Eureka">
                Eureka
              </option>
              <option className="font-body" value="Workshop">
                Workshop
              </option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-md transition duration-300">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventRegistration;
