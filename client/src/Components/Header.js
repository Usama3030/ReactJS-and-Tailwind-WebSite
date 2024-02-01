import React from "react";
import Navbar from "./Navbar";
import LoopVideo from "../assets/images/Loop_video.mp4";

const Header = () => {
  return (
    <div className="relative bg-white overflow-hidden w-full">
      <Navbar />
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 z-0 w-full h-[100vh] object-cover lg:h-auto"
        source
        src={LoopVideo}
        type="video/mp4"
      />

      {/* <div className="absolute inset-0 bg-black opacity-0"></div> */}

      <div className="relative container mx-auto w-full flex items-center justify-center mt-28 lg:mt-0 md:mt-0">
        <div className="text-white mt-[2%] text-center">
          <h1 className="text-6xl mt-0 font-FatFrank mb-2 lg:text-8xl md:text-9xl+[20px]">
            say hello
          </h1>
          <h2
            className="text-3xl mb-8 font-FatFrank lg:text-6xl
          md:text-4xl"
          >
            to plant-based profits
          </h2>
          <p className="mb-8 text-2xs font-AvenirNext font-medium mx-auto lg:text-base md:max-w-3xl md:text-base px-4 lg:px-0 md:px-0 tracking-wider">
            We are on a mission to show people in the franchise industry that
            plant-based options are a viable, profitable, and healthful
            alternative to traditional meat-heavy menus.
          </p>
          <h2 className="text-sm font-AvenirBold font-extrabold mb-8 lg:text-lg max-w-sm mx-auto lg:max-w-2xl md:max-w-lg px-4 lg:px-0 md:px-0">
            Join us as we moo-ve toward a more compassionate, sustainable
            future.
          </h2>
          <button className="bg-white font-FuturaCond tracking-wider hover:bg-[#D9D9D9] text-[#3c7278] font-bold py-2 px-8 mb-28 rounded-xl text-sm lg:text-2xl md:text-base">
            WHAT IS THIS ALL ABOUT?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
