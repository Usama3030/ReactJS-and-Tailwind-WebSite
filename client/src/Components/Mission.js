import React from "react";
import "./style.css";
import CowIllustration from "../assets/Cow_icon_1.png";
import Pumpkin from "../assets/bg_pumpkin.png";
import Tomato from "../assets/bg_tomato.png";

function Mission() {
  return (
    <div
      id="OUR_MISSION"
      class=" min-h-auto mb-0 bg-white flex flex-col md:flex-row"
    >
      <div class="left w-full md:w-2/5 mt-0 ">
        {/* <div class="left w-full md:w-1/2 mt-0 p-4"> */}
        <img
          src={Pumpkin}
          alt="Bg-Pumpkin"
          class="h-28 w-28 mt-12 object-cover z-0 hidden md:block"
        />
        <div
          className="z-2 mr-0 ml-[12%] lg:ml-[25%]"
          style={{ marginTop: "5%" }}
        >
          <h2 className="text-5xl lg:text-6xl text-left font-extrabold font-[FatFrank] text-[#3C7278] mb-4">
            our mission
          </h2>
          <p className="w-4/5 text-left text-xs font-normal">
            Our mission at Me and My Cow is to create healthy communities by
            making plant-based eating easy and accessible. We believe that with
            education, understanding, and delicious food, people can shift
            mindsets and cravings toward plant-based options that nurture our
            health and the health of our planet.
          </p>
          <p className="font-bold my-4 text-left">
            Cows are friends, not food!
          </p>
        </div>
      </div>

      <div class="right w-full md:w-3/5 lg:mt-20 md:mt-20 mt-0 p-4 ml-[5%] lg:ml-0">
        <img
          src={CowIllustration}
          alt="Cow Illustration"
          className="lg:h-[27rem] lg:w-[45rem] md:h-[27rem] md:w-[45rem] h-full w-full my-0 mr-0 mx-auto"
        />
      </div>
    </div>
  );
}

export default Mission;
