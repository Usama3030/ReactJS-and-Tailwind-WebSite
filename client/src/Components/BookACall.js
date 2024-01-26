import React from "react";
import "./style.css";

function BookACall() {
  return (
    <div id="BOOK_A_CALL" class=" min-h-auto mb-0 w-full bg-[#F4F4F4]">
      <div className="BookCall text-center w-5/6 lg:w-3/5 mx-auto">
        <h2 className="text-5xl lg:text-6xl font-FatFrank text-[#3C7278] mt-4 overflow-y-hidden">
          book a call
        </h2>
        <p className="text-md mt-4 w-3/4 m-auto">
          Ready to learn more? Get in touch! We would love to connect with you
          to understand your franchise goals and see how plant-based options can
          work for your business.
        </p>
        <p className="text-md font-bold mt-4 w-3/5 m-auto">
          Contact us by using the form below to schedule a free assessment or
          book a motivational speaking engagement with Eli.
        </p>
      </div>
      <form class="w-full max-w-lg mt-12 m-auto">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <p class="text-red-500 text-xs absolute -my-4 mx-4">
              Form Field Required
            </p>
            <input
              class="appearance-none block w-full -pr-20 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Organization"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Title/Role"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <p class="text-red-500 text-xs absolute -my-4 mx-4">
              Form Field Required
            </p>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
        <p className="text-center mb-4 -mt-8">
          This cow's udderly excited to work with you!
        </p>
        <button
          id="Question"
          type="submit"
          className="bg-gradient-to-r from-greenSlack-100 to-greenSlack-600 hover:bg-gradient-to-r hover:from-greenSlack-200 hover:to-greenSlack-400 block text-white font-mono m-auto py-1 px-4 mb-4 mt-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookACall;
