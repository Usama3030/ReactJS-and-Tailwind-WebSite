import React from "react";
import "./style.css";
import FacebookLogo from "../assets/Facebook_Logo.png";
import TwitterLogo from "../assets/Twitter_new_X_logo.png";
import InstagramLogo from "../assets/instagram_Logo.png";

function Footer() {
  return (
    <div id="FOOTER" class=" min-h-auto w-full bg-white">
      <div className="Footer text-center w-5/6 lg:w-3/5 mx-auto">
        <h2 className="text-5xl lg:text-6xl font-extrabold font-[FatFrank] text-[#94A8AE] mt-6">
          join the herd on social
        </h2>
        <p className="text-md mt-4">
          Follow "Me and My Cow" on Instagram, Facebook, and Twitter to connect
          with our compassionate community. We're constantly moo-ving, sharing
          newly developed plant-based recipes, franchise success stories,
          wellness tips, and facts on the environmental and health benefits of
          plant-based eating.
        </p>
        <p className="text-sm lg:text-md font-bold mt-4">
          Come be a part of our #PlantBasedHerd!
        </p>
      </div>
      <div className="icons flex flex-row mx-5 items-center justify-center my-5">
        <img
          src={InstagramLogo}
          alt="InstagramLogo"
          className="h-8 w-8 mx-4 lg:mx-8"
        />
        <img
          src={FacebookLogo}
          alt="FacebookLogo"
          className="h-8 w-8 mx-4 lg:mx-8"
        />
        <img
          src={TwitterLogo}
          alt="TwitterLogo"
          className="h-8 w-8 mx-4 lg:mx-8"
        />
      </div>
      <div className="bg-[#F4F4F4] py-4 text-center">
        <p className="text-xs">© 2024 Me & My Cow. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;