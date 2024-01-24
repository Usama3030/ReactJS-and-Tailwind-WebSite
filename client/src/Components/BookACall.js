// import React from "react";
// import "./style.css";

// function BookACall() {
//   // `${process.env.REACT_APP_NODE_API}/api/signup`
//   return (
//     <div id="BOOK_A_CALL" class=" min-h-auto mb-0 w-full bg-[#F4F4F4]">
//       <div className="BookCall text-center w-5/6 lg:w-3/5 mx-auto">
//         <h2 className="text-5xl lg:text-6xl font-extrabold font-[FatFrank] text-[#3C7278] mt-4">
//           book a call
//         </h2>
//         <p className="text-md mt-4">
//           Ready to learn more? Get in touch! We would love to connect with you
//           to understand your franchise goals and see how plant-based options can
//           work for your business.
//         </p>
//         <p className="text-md font-bold mt-4">
//           Contact us by using the form below to schedule a free assessment or
//           book a motivational speaking engagement with Eli.
//         </p>
//       </div>
//       <form class="w-full max-w-lg mt-12">
//         <div class="flex flex-wrap -mx-3 mb-6">
//           <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <p class="text-red-500 text-xs">Form Field Required</p>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//               id="grid-first-name"
//               type="text"
//               placeholder="Name"
//             />
//           </div>
//           <div class="w-full md:w-1/2 px-3 mb-6">
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-last-name"
//               type="text"
//               placeholder="Organization"
//             />
//           </div>
//           <div class="w-full md:w-1/2 px-3 mb-6">
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="grid-last-name"
//               type="text"
//               placeholder="Title/Role"
//             />
//           </div>
//           <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <p class="text-red-500 text-xs">Form Field Required</p>
//             <input
//               class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//               id="grid-first-name"
//               type="text"
//               placeholder="Email"
//             />
//           </div>
//         </div>
//         <p>This cow's udderly excited to work with you!</p>
//         <button
//           id="Question"
//           type="submit"
//           className="bg-gradient-to-r from-greenSlack-100 to-greenSlack-600 hover:bg-gradient-to-r hover:from-greenSlack-200 hover:to-greenSlack-400 block text-white font-mono py-1 px-4 mb-4 mt-2 rounded-lg"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default BookACall;

import React, { useState } from "react";
import axios from "axios";
import "./style.css";

function BookACall() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    title: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    let formIsValid = true;

    if (!formData["name"]) {
      formIsValid = false;
      formErrors["name"] = "*Name is required.";
    }

    if (!formData["email"]) {
      formIsValid = false;
      formErrors["email"] = "*Email is required.";
    }

    if (typeof formData["email"] !== "undefined") {
      var pattern = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
      if (!pattern.test(formData["email"])) {
        formIsValid = false;
        formErrors["email"] = "*Please enter valid email.";
      }
    }

    setErrors(formErrors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (validateForm()) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_NODE_API}/api/signup`,
          formData
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div
      id="BOOK_A_CALL"
      className="min-h-auto mb-0 w-full bg-[#F4F4F4] flex flex-col items-center justify-center"
    >
      <div className="BookCall text-center w-5/6 lg:w-3/5 mx-auto">
        <h2 className="text-5xl lg:text-6xl font-extrabold font-[FatFrank] text-[#3C7278] mt-4">
          book a call
        </h2>
        <p className="text-md mt-4">
          Ready to learn more? Get in touch! We would love to connect with you
          to understand your franchise goals and see how plant-based options can
          work for your business.
        </p>
        <p className="text-md font-bold mt-4">
          Contact us by using the form below to schedule a free assessment or
          book a motivational speaking engagement with Eli.
        </p>
      </div>
      <form className="w-full max-w-lg mt-12" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <p className="text-red-500 text-xs h-4">{errors.name}</p>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                errors.email ? "border-red-500" : "border-gray-200"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <p className="text-red-500 text-xs h-4">{errors.organization}</p>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="organization"
              type="text"
              placeholder="Organization"
              name="organization"
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <p className="text-red-500 text-xs h-4">{errors.title}</p>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="title"
              type="text"
              placeholder="Title/Role"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <p className="text-red-500 text-xs h-4">{errors.email}</p>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                errors.email ? "border-red-500" : "border-gray-200"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <p className="text-center">
          This cow's udderly excited to work with you!
        </p>
        <div className="flex justify-center">
          <button
            id="Question"
            type="submit"
            className="bg-gradient-to-r from-greenSlack-100 to-greenSlack-600 hover:bg-gradient-to-r hover:from-greenSlack-200 hover:to-greenSlack-400 block text-white font-mono py-1 px-4 mb-4 mt-2 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookACall;
