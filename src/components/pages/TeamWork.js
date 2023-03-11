import Link from "next/link";
import React from "react";
import teamIcon from "../../assets/teamIcon.png";
import team2 from "../../assets/team2.jpeg";
import team1 from "../../assets/team1.jpeg";
import team3 from "../../assets/team3.jpeg";

const TeamWork = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1253/1253748.png?w=740&t=st=1677486697~exp=1677487297~hmac=79d0361b2daa4595745d05b19e97619c82ce6e96e95a388aed04e45e0654c132"
              alt="work icon"
              key={new Date().getTime()}
            />
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Team Management
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Since a long time , I am working with some famous team in
              Bangladesh and world wide
            </p>
          </div>
          <div>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              loading="lazy"
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              key={new Date().getTime()}
              alt=""
            />
            <img
              loading="lazy"
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              key={new Date().getTime()}
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              loading="lazy"
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              key={new Date().getTime()}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamWork;
