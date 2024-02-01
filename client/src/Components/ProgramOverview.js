import React from "react";
import "./style.css";
import Card1 from "../assets/images/card_1.png";
import Card2 from "../assets/images/card_2.png";
import Card3 from "../assets/images/card_3.png";

function ProgramOverview() {
  return (
    <div id="PROGRAM_OVERVIEW" class=" min-h-auto w-full my-16 bg-white">
      <div data-aos="fade-down" className="program mx-10">
        <h2 className="text-5xl lg:text-6xl text-center font-FatFrank text-[#3C7278] mb-4">
          program overview
        </h2>
        <p className="text-md text-center">
          We offer personalized consultations and resources to franchise systems
          interested in adding plant-based menu options.
        </p>
      </div>
      <div className="cards mx-auto flex items-center justify-center my-5 flex-col md:flex-row">
        <Card
          logo={Card1}
          title="assess menu"
          text="We thoroughly assess your current menu offerings and customer base to determine the best plant-based options to introduce."
        />
        <Card
          logo={Card2}
          title="Create Strategy"
          text="We create a comprehensive strategy and plan for integrating new plant-based items into your menu and marketing."
        />
        <Card
          logo={Card3}
          title="implement smoothly"
          text="We develop recipes optimized for your operations, train staff on preparation and talking points, and track sales data to ensure a smooth, successful launch."
        />
      </div>
    </div>
  );
}

const Card = ({ logo, title, text }) => {
  return (
    <div data-aos="fade-up" className="max-w-sm rounded-xl overflow-hidden shadow-2xl p-6 mb-8 mx-2 mt-4 h-96 w-72 bg-white">
      <div className="text-center mt-4">
        <h2 className="text-4xl text-center font-FatFrank text-[#94A8AE] mb-4 mx-8">
          {title}
        </h2>
        <p className="mt-2 text-black text-sm mb-10">{text}</p>
        {logo && <img className="mx-auto h-16 w-16" src={logo} alt="Logo" />}
      </div>
    </div>
  );
};

export default ProgramOverview;
