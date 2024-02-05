import React from "react";
import meeteli2Img from "../assets/images/meeteli2.png";
import meeteliMobile from "../assets/images/meeteliMobile.png";

function MeetEliDetail() {
  return (
    <div className="">
      <div data-aos="fade-up">
        <img
          src={meeteli2Img}
          alt="Reload"
          className="hidden md:block w-[100%] pl-8 md:pl-20 h-full md:h-[102vh] mt-[-80px] z-50 overflow-x-hidden"
        />
        <img
          src={meeteliMobile}
          alt="Reload"
          className="block md:hidden w-[100%] pl-8 md:pl-20 h-auto mt-20 z-10"
        />
      </div>
      <div data-aos="fade-up" className="px-[10%] lg:px-[15%] mt-16 text-center md:ml-10 z-0">
        <p className="mb-8 text-2xs font-AvenirNext font-medium mx-auto lg:text-base md:max-w-6xl md:text-base lg:px-0 md:px-0 tracking-wider">
          After struggling with years of health issues, including reaching 288
          pounds, undergoing a kidney transplant, and suffering a heart attack
          at the young age of 45, I knew I needed to make a radical change.
          That's when I adopted a whole food, plant-based lifestyle. By removing
          processed foods and animal proteins and focusing on natural,
          nutrient-dense fruits, vegetables, grains and legumes, I lost 64
          pounds and brought all of my health numbers into normal ranges in just
          a few short months.
        </p>
        <p className="mb-8 text-2xs font-AvenirNext font-medium mx-auto lg:text-base md:max-w-6xl md:text-base lg:px-0 md:px-0 tracking-wider">
          My transformation sparked in me a passion for helping others take
          control of their health. I want to provide the knowledge and tools for
          people to prevent and even reverse disease through diet and lifestyle
          changes. I offer one-on-one guidance to track biomarkers and tangible
          proof that what we eat matters. Diets centered around plants can
          empower us and future generations to lead vibrant, healthy lives while
          also preserving our planet.{" "}
        </p>
        <p className="text-center font-bold text-md mt-4 mx-auto">
          I couldn’t be more thrilled to walk this journey with you!
        </p>
      </div>
    </div>
  );
}

export default MeetEliDetail;
