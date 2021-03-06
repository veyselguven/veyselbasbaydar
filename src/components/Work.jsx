/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import WorkImg from "../assests/work.png";
import Game from "../assests/game.png";
function Work() {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-600">
            Work
          </p>
          <p className="py-6 font-bold text-green-500 ">
            // Check oout some of my recent work
          </p>
          <p className="py-6 ">
            E commerce WebSite-A full-stack single-page application (SPA) of
            creating an E-commerce- website The goal of this project was to
            emulate an e-commerce storefront with a functioning backend and
            checkout system.
            <ul style={{ listStyleType: "square" }}>
              <li>
                Attended daily standups and periodic code reviews, drew up the
                team contract, reviewed pull requests.
              </li>
              <li>
                Initialized connections between users, collaborated with other
                members to implement additional features, worked on both
                front-end and back-end development.
              </li>
              <li>
                Locally stored shopping cart where any product user adds will be
                stored unless cleared by the user.
              </li>
              <li>Built with reusable functional components.</li>
            </ul>
          </p>
          <p className="py-6">
            A full-stack single-page application (SPA) of creating an web-based
            space arcade strategic game with tower defense design
            <ul style={{ listStyleType: "square" }}>
              <li>
                Collaborated with a team to create a fun, strategic gaming
                experience
              </li>
              <li>
                Participated in daily standups and periodic code reviews, drew
                up the team contract, reviewed pull requests.
              </li>
              <li>
                Created connections between users, collaborated with other
                members to implement additional features, worked on both
                front-end and back-end development.
              </li>
              <li>
                Applying JavaScript,Phaser, Express, React, Redux and deployed
                with Heroku.
              </li>
            </ul>
          </p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                E commerce Website
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://grace-shopper-mudkip-masters.herokuapp.com/"
                  target="_blank"
                  alt="e commerce"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/mudkip-masters/grace-shopper"
                  target="_blank"
                  alt="code"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Game})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Game with Phaser3
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://fullstack-invaders.herokuapp.com/"
                  target="_blank"
                  alt="game"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Blackbox-Games-LLC/FullStack_InVaders"
                  target="_blank"
                  alt="code"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
