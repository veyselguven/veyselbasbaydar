/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "react-scroll/modules/components/Link";
import Veyselpic from "../assests/veyselpic.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="flex flex-wrap justify-center">
        <div className="w-6/12 sm:w-4/12 px-4 py-14">
          <img
            src={Veyselpic}
            alt="veyselbasbaydar"
            className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600"> Hi my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Veysel BASBAYDAR
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I`m a FullStack developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <Link to="work">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-45 duration-300">
                <HiArrowNarrowRight className="ml-5" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
