import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/mihanBanner2.jpg";
const Header = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-[18px] font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Introduction
              </p>
            </div>
            <h2 className="max-w-lg font-sans text-3xl font-bold tracking-tight text-[#49a5e2] sm:text-4xl sm:leading-none">
              Shah Muntacher Hossain
            </h2>
            <p className="text-[18px] font-[500]  text-[#0275c2] font-mono rounded-full bg-teal-accent-400 mt-2 mb-1">
              Social Worker
            </p>
            <p className="text-base text-gray-700 md:text-lg mt-3">
              A young Energetic man have a clear,logical mind with a practical
              approach to problem solving and a drive to see things.
            </p>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-3">
            <a
              href="https://drive.google.com/file/d/11JwM5CXq-QsdFnC3p15kgpcZeTA89aJz/view"
              target="_blank"
              rel="noopener noreferrer"
              title="MY CV Link"
              className="bg-primary px-5 py-2 text-[18px] rounded text-white font-bold "
            >
              My CV
            </a>

            <Link
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              <span>Content Writer</span>
            </Link>

            <section className="flex gap-3">
              <Link
                to="/Contacts"
                aria-label=""
                className="bg-primary px-5 py-2 text-[18px] rounded text-white font-bold "
              >
                Reach Me
              </Link>
            </section>
          </div>
        </div>
        <div className="relative lg:w-1/">
          <img
            src={banner}
            className="h-[450px] w-[480px] rounded-md"
            alt="banner"
          />

          {/* <img className='h-[450px] w-[480px]' src={`https://scontent.fdac139-1.fna.fbcdn.net/v/t1.15752-9/334915891_917306799505823_723871664171805630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHa9CWUXdOIX6kCUcKnNRp5ohR7ilUus0aiFHuKVS6zRsFZ6BRQnBo9MPexKtpeLJZ_QcscJeAex6ECNZywP-75&_nc_ohc=XamQnZYNrlQAX-ViRRa&_nc_ht=scontent.fdac139-1.fna&oh=03_AdRczKNWKDp1kAk_n68q3QT2HbovKNshfHBZ2XMiJlmFLA&oe=642BB89A`} alt="mihanIm" /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
