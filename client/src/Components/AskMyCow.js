import React, { useState, useEffect } from "react";
import "./style.css";
import AI_cow from "../assets/AI_Cow.png";

function AskMyCow() {
  const [text, setText] = useState(
    "The answer to the question will be displayed here."
  );
  const [question, setQuestion] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://chatling.ai/js/embed.js";
    script.async = true;
    script.setAttribute("data-id", "1182799319");
    script.id = "chatling-embed-script";
    script.onload = () => {
      window.Chatling &&
        window.Chatling.on("ready", function () {
          console.log("Chatling is ready");
        });
    };
    document.body.appendChild(script);
  }, []);

  const openChat = () => {
    const chatling = window.Chatling;
    if (chatling) {
      chatling.open();
    } else {
      console.log("Chatling is not ready yet, trying again in 1 second");
      setTimeout(openChat, 1000);
    }
  };
  return (
    <div
      id="ASK_MY_COW"
      className="min-h-auto mt-4 mb-0 text-white bg-gradient-to-r from-greenSlack-100 to-greenSlack-600 flex flex-col md:flex-row"
    >
      <div className="left w-full md:w-1/2 flex flex-col items-center p-8">
        <h2 className="text-5xl lg:text-6xl text-center font-extrabold font-[FatFrank] mb-4">
          ask my cow
        </h2>
        <p className="text-sm w-full lg:w-3/5 text-center mb-4">
          Got questions on going plant-based? Meet Myrtle, our AI-powered cow
          chatbot ready to moo at you with helpful tips, recipe ideas, meal
          plans, and anything else you want to know about choosing and
          nutritious plant-based foods and diets.
        </p>
        <p className="text-md text-center font-semibold mb-8">
          Ask Myrtle a question below!
        </p>
        <input
          className="appearance-none block w-3/4 bg-transparent border text-white border-white focus:border-white focus:ring-white placeholder-white rounded-xl py-3 px-4 mb-3 leading-tight focus:bg-transparent focus:outline-none"
          id="question"
          type="text"
          placeholder="Ask a question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          id="Question"
          className="bg-white hover:bg-gray-100 block text-[#3C7278] py-1 px-4 mb-4 mt-2 rounded-lg"
          onClick={openChat}
        >
          ASK MYRTLE
        </button>
        <div className="w-full h-36 mt-4 mb-8 text-sm p-4 text-white bg-[#26828F] rounded-3xl">
          {text}
        </div>
      </div>

      <div className="right w-full md:w-1/2 flex items-center justify-center lg:justify-start">
        <img
          src={AI_cow}
          alt="AI_COW"
          className="h-96 w-80 lg:h-[39rem] lg:w-[33rem] z-10"
        />
      </div>
    </div>
  );
}

export default AskMyCow;

// simple code without api
// import React, { useState } from "react";
// import "./style.css";
// import AI_cow from "../assets/AI_Cow.png";

// function AskMyCow() {
//   const [text, setText] = useState(
//     "The answer to the question will be displayed here."
//   );
//   const [question, setQuestion] = useState("");

//   const askMyrtle = async () => {};
//   return (
//     <div
//       id="ASK_MY_COW"
//       className="min-h-auto mt-4 mb-0 text-white bg-gradient-to-r from-greenSlack-100 to-greenSlack-600 flex flex-col md:flex-row"
//     >
//       <div className="left w-full md:w-1/2 flex flex-col items-center p-8">
//         <h2 className="text-5xl lg:text-6xl text-center font-extrabold font-[FatFrank] mb-4">
//           ask my cow
//         </h2>
//         <p className="text-sm w-full lg:w-3/5 text-center mb-4">
//           Got questions on going plant-based? Meet Myrtle, our AI-powered cow
//           chatbot ready to moo at you with helpful tips, recipe ideas, meal
//           plans, and anything else you want to know about choosing and
//           nutritious plant-based foods and diets.
//         </p>
//         <p className="text-md text-center font-semibold mb-8">
//           Ask Myrtle a question below!
//         </p>
//         <input
//           className="appearance-none block w-3/4 bg-transparent border text-white border-white focus:border-white focus:ring-white placeholder-white rounded-xl py-3 px-4 mb-3 leading-tight focus:bg-transparent focus:outline-none"
//           id="question"
//           type="text"
//           placeholder="Ask a question"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//         />
//         <button
//           id="Question"
//           className="bg-white hover:bg-gray-100 block text-[#3C7278] py-1 px-4 mb-4 mt-2 rounded-lg"
//           onClick={askMyrtle}
//         >
//           ASK MYRTLE
//         </button>
//         <div className="w-full h-36 mt-4 mb-8 text-sm p-4 text-white bg-[#26828F] rounded-3xl">
//           {text}
//         </div>
//       </div>

//       <div className="right w-full md:w-1/2 flex items-center justify-center lg:justify-start">
//         <img
//           src={AI_cow}
//           alt="AI_COW"
//           className="h-96 w-80 lg:h-[39rem] lg:w-[33rem] z-10"
//         />
//       </div>
//     </div>
//   );
// }

// export default AskMyCow;
