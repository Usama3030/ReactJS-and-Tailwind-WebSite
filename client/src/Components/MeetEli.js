import React from "react";
import "./style.css";
import MeetEliMain from "../assets/Meet_Eli_Main.png";
import MeetEliLeft from "../assets/Meet_Eli_Left.png";
import MeetEliRight from "../assets/Meet_Eli_Right.png";
import MeetEliBottom from "../assets/Meet_Eli_Bottom.png";
import Onion from "../assets/bg_onion.png";
import Tomato from "../assets/bg_tomato.png";
import GroupImage from "../assets/GroupImage.png";

function MeetEli() {
  return (
    <div
      id="MEET_ELI"
      className="min-h-auto relative m-0 bg-white flex flex-col-reverse md:flex-row"
    >
      <div className="right z-2 w-full md:w-1/2 z-2 mt-8 md:mt-10 mr-0 lg:mb-8 mb-0 flex flex-col justify-center p-4">
        <div className=" mr-0 ml-[12%] lg:ml-[1%]" style={{ marginTop: "5%" }}>
          <h2 className="text-6xl text-left font-extrabold font-[FatFrank] text-[#3C7278] mb-4">
            meet eli
          </h2>
          {/* <p className="text-sm md:text-base w-4/6 sm:w-full text-left font-normal font-[Avenir Next]"> */}
          <p className="w-full md:w-3/5 text-left text-xs font-normal">
            Eli Chediak went on his own journey toward plant-based eating after
            struggling with weight and health issues for years while working on
            the road as an expert in franchising. After switching to a
            Mediterranean-inspired, whole food plant-based diet, he lost over 50
            pounds and reversed multiple chronic health conditions. He made it
            his mission to help others feel as vibrant as he does. Eli brings
            his culinary skills and passion for people and animals to every
            consultation. Additionally, Eli is available for motivational
            speaking presentations to bring his unique perspectives to you
            directly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MeetEli;

{
  /* <div className="left w-full md:w-1/2 mt-8 mb-8 md:mt-0 md:mb-0 relative flex items-center justify-center">
        <img
          src={Tomato}
          alt="Bg-Tomato"
          className="h-56 w-52 object-cover absolute top-0 right-10 z-0"
        />
        <img
          src={MeetEliMain}
          alt="Main ELI"
          className="h-80 w-auto absolute z-10"
        />
        <img
          src={MeetEliLeft}
          alt="Corner Image 1"
          className="absolute h-24 w-28 rounded-lg top-0 left-0 z-20"
        />
        <img
          src={MeetEliRight}
          alt="Corner Image 2"
          className="absolute h-28 w-24 top-0 right-1 z-20"
        />
        <img
          src={MeetEliBottom}
          alt="Corner Image 4"
          className="absolute h-32 w-auto rounded-lg bottom-0 right-0 z-20"
        />
        <div className="bg-[#F9DCBA] absolute h-6 w-12 rounded-2xl top-0 left-20 z-30"></div>
        <div className="bg-[#E6EBEC] absolute h-8 w-28 rounded-2xl bottom-4 z-30"></div>
        <div className="bg-[#DADBDC] absolute h-8 w-20 rounded-3xl bottom-0 right-20 z-30"></div>
      </div> */
}
