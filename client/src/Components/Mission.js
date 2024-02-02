import React, { useEffect } from "react";
import "./style.css";
import CowIllustration from "../assets/images/Cow_icon_1.png";
import Pumpkin from "../assets/images/bg_pumpkin.png";
import Aos from "aos";

function Mission() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div
      id="OUR_MISSION"
      class=" min-h-auto mb-0 bg-white flex flex-col md:flex-row overflow-hidden"
    >
      <div class="left w-full md:w-3/5 mt-0 ">
        <img
          src={Pumpkin}
          alt="Bg-Pumpkin"
          class="h-28 w-28 mt-12 object-cover z-0 hidden md:block"
        />
        <div
          className="z-2 mr-0 ml-[12%] lg:ml-[25%]"
          style={{ marginTop: "5%" }}
        >
          <h2 data-aos="fade-up" className="text-6xl text-left font-FatFrank text-[#3C7278] mb-4">
            our mission
          </h2>
          <p data-aos="fade-up" className="mb-8 text-2xs font-AvenirNext font-medium mx-auto lg:text-base md:max-w-3xl md:text-base px-4 lg:px-0 md:px-0 tracking-wider">
            Our mission at Me and My Cow is to create healthy communities by
            making plant-based eating easy and accessible. We believe that with
            education, understanding, and delicious food, people can shift
            mindsets and cravings toward plant-based options that nurture our
            health and the health of our planet.
          </p>
          <p data-aos="fade-up" className="font-AvenirBold my-4 text-left">
            Cows are friends, not food!
          </p>
        </div>
      </div>

      <div data-aos="fade-up" class="right w-full md:w-3/5 lg:mt-20 md:mt-20 mt-0 ml-[5%] lg:ml-0">
        <img
          src={CowIllustration}
          alt="Cow Illustration"
          className="lg:h-[32rem] lg:w-[40rem] md:h-[27rem] md:w-[45rem] h-full w-full my-0 mr-0 mx-auto"
        />
      </div>
    </div>
  );
}

export default Mission;
