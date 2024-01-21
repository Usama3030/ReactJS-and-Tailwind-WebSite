import React from "react";
import "./style.css";
import AI_cow from "../assets/AI_Cow.png";

function AskMyCow() {
  return (
    <div
      id="ASK_MY_COW"
      class=" min-h-auto mt-0 mb-12 bg-gradient-to-r from-greenSlack-100 to-greenSlack-600 flex flex-col md:flex-row"
      // hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-600
    >
      <div className="left w-full md:w-1/2">
        <h2 className="text-5xl lg:text-6xl text-center text-white font-extrabold font-[FatFrank] text-[] mb-4">
          ask my cow
        </h2>
        <p className=" text-sm text-center">
          Got questions on going plant-based? Meet Myrtle, our AI-powered cow
          chatbot ready to moo at you with helpful tips, recipe ideas, meal
          plans, and anything else you want to know about choosing and
          nutritious plant-based foods and diets.
        </p>
        <p className="text-md font-semibold">Ask Myrtle a question below!</p>
      </div>
      <div className="right w-full md:w-1/2 flex items-center justify-center">
        <h1> image</h1>
        <img src={AI_cow} alt="AI_COW" className="h-96 w-64 z-2" />
      </div>
    </div>
  );
}

export default AskMyCow;
