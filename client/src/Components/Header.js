import React from "react";
import Navbar from "./Navbar";
import LoopVideo from "../assets/Loop_video.mp4";

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

      <div className="relative container mx-auto flex items-center justify-center mt-28 lg:mt-0 md:mt-0">
        <div className="text-white mt-[2%] text-center">
          <h1 className="text-6xl mt-0 font-black mb-2 lg:text-8xl md:text-8xl">
            say hello
          </h1>
          <h2
            className="text-3xl mb-8 font-black lg:text-4xl
          md:text-4xl"
          >
            to plant-based profits
          </h2>
          <p className="mb-8 text-2xs font-thin max-w-xs mx-auto font-[Avenir Next] lg:max-w-lg lg:text-base md:max-w-lg md:text-base px-4 lg:px-0 md:px-0 tracking-wider">
            We are on a mission to show people in the franchise industry that
            plant-based options are a viable, profitable, and healthful
            alternative to traditional meat-heavy menus.
          </p>
          <h2 className="text-sm font-bold mb-8 lg:text-md max-w-xs mx-auto lg:max-w-lg md:max-w-lg px-4 lg:px-0 md:px-0">
            Join us as we moo-ve toward a more compassionate, sustainable
            future.
          </h2>
          <button className="bg-white hover:bg-[#D9D9D9] text-[#3c7278] font-[Futura PT Cond] font-bold py-2 px-8 mb-28 rounded-xl text-sm lg:text-base md:text-base">
            WHAT IS THIS ALL ABOUT?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
