import React from "react";
import "./style.css";
import meeteliImg from "../assets/images/meeteli.png";

function MeetEli() {
  return (
    <div className="flex flex-col-reverse sm:flex z-0 sm:flex-col-reverse md:flex md:flex-row lg:flex lg:flex-row overflow-hidden">
      <div data-aos="fade-up" className="w-full">
        <img
          src={meeteliImg}
          alt="reload"
          className="md:mx-36 mx-10"
          style={{ height: "80vh", width: "85%" }}
        />
      </div>
      <div
        id="MEET_ELI"
        style={{ width: "80%" }}
        className="min-h-auto relative  bg-white flex flex-col-reverse md:flex-row w-full"
      >
        <div
          className="right z-2 md:w-1/2 mt-8 md:mt-10 mr-0 lg:mb-8 mb-0 flex flex-col justify-center p-4 ml-10"
          style={{ width: "100%" }}
        >
          <div
            className=" mr-0 ml-[10%] lg:ml-0"
            style={{ marginTop: "5%" }}
            data-aos="fade-left"
          >
            <h2 className="text-6xl text-left font-FatFrank text-[#3C7278] mb-4">
              meet eli
            </h2>
            <p className="w-full  md:w-4/5 font-AvenirNext text-left text-lg leading-6 font-medium">
              Eli Chediak went on his own journey toward plant-based eating
              after struggling with weight and health issues for years while
              working on the road as an expert in franchising. After switching
              to a Mediterranean-inspired, whole food plant-based diet, he lost
              over 50 pounds and reversed multiple chronic health conditions. He
              made it his mission to help others feel as vibrant as he does. Eli
              brings his culinary skills and passion for people and animals to
              every consultation. Additionally, Eli is available for
              motivational speaking presentations to bring his unique
              perspectives to you directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetEli;
