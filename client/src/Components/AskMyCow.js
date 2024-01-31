import React, { useState } from "react";
import "./style.css";
import AI_cow from "../assets/images/AI_Cow.png";
import layer from "../assets/images/chatBubble.png";

function AskMyCow() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Moo there, partner! I'm Myrtle! Let's have a chat and get you mooooving toward more plant-powered eats!");

  const handleAskMyrtle = async () => {
    // Perform API call using the 'question' state
    const response = await fetch(`YOUR_API_ENDPOINT?question=${question}`);
    const data = await response.json();

    // Update the 'answer' state with the API response
    setAnswer(data.answer);
  };

  return (
    <div
      id="ASK_MY_COW"
      className="min-h-auto mt-4 mb-0 text-white bg-gradient-to-r from-greenSlack-100 to-greenSlack-600 flex flex-col md:flex md:flex-row w-full"
    >
      <div className="left w-full flex flex-col items-center pt-20 pl-8 md:pl-20 p-8">
        <h2 className="text-5xl lg:text-6xl text-center font-FatFrank mb-4 overflow-y-hidden">
          ask my cow
        </h2>
        <p className="text-sm w-full lg:w-4/6 font-AvenirNext text-center mb-4">
          Got questions on going plant-based? Meet Myrtle, our AI-powered cow
          chatbot ready to moo at you with helpful tips, recipe ideas, meal
          plans, and anything else you want to know about choosing and
          nutritious plant-based foods and diets.
        </p>
        <p className="text-md text-center font-semibold mb-8">
          Ask Myrtle a question below!
        </p>
        

        <div className="w-full ml-2 md:mt-[20px] md:ml-20">
          <img src={layer} alt="reload" className="w-[100%] h-20 md:w-[80%] md:h-40 " />
          <span className="absolute w-full my-[-60px] ml-12 md:my-[-120px] md:ml-20 text-xs md:text-lg lg:text-xl font-black font-AvenirNext">Click on the Bubble below to get started.</span>
        </div>
      </div>

      <div className="right w-full mt-24 md:mt-auto flex items-center justify-center lg:justify-start">
        <img
          src={AI_cow}
          alt="AI_COW"
          className="h-96 w-80 lg:h-[48rem] mt-[-100px] lg:w-[33rem] z-10"
        />
      </div>
    </div>
  );
}

export default AskMyCow;
