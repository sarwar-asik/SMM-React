import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/ProviderContext";

const Navbar = () => {
  const { user, logout, name } = useContext(AuthContext);
  console.log(name, user, "///////////");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // const NavItem = <React.Fragment></React.Fragment>

  const myItem2 = (
    <>
      <Link
        to="/"
        className="font-serif tracking-wide  transition-colors duration-200 hover:text-teal-accent-400 text-[1em]"
      >
        Home{" "}
      </Link>
      <Link
        to="/Blogs"
        className="font-serif tracking-wide  transition-colors duration-200 hover:text-teal-accent-400 text-[1em]"
      >
        Blogs{" "}
      </Link>
      <Link
        to="/Header"
        className="font-serif tracking-wide  transition-colors duration-200 hover:text-teal-accent-400 text-[1em]"
      >
        About Me{" "}
      </Link>
      <Link
        to="/Contacts"
        className="font-serif tracking-wide  transition-colors duration-200 hover:text-teal-accent-400 text-[1em]"
      >
        Contacts{" "}
      </Link>
      <Link
        to="/Login"
        className="font-serif tracking-wide  transition-colors duration-200 hover:text-teal-accent-400 text-[1em]"
      >
        Login{" "}
      </Link>
      {user?.email && (
        <>
          <Link
            to="/AddBlogs"
            className="font-serif tracking-wide  transition-colors duration-200 hover:text-teal-accent-400 text-[1em]"
          >
            Add Blogs{" "}
          </Link>
          <Link
            to="/EditBlogs"
            className="font-serif tracking-wide  transition-colors duration-200 hover:text-teal-accent-400 text-[1em]"
          >
            Edit Blogs{" "}
          </Link>

          <Link
            to="/addExperience"
            className="font-serif tracking-wide  transition-colors duration-200 hover:text-teal-accent-400 text-[1em]"
          >
            {" "}
            Add Experience{" "}
          </Link>

          <Link
            to="/editExperience"
            className="font-serif tracking-wide  transition-colors duration-200 hover:text-teal-accent-400 text-[1em]"
          >
            Edit Experience
          </Link>
        </>
      )}
    </>
  )
  

  const handleLogout = () => {
    logout();
    navigate("/");
    Swal.fire("Success", "", "success");
  };

  return (
    <div className="bg-primary rounded-b-sm">
      <div className=" py-5 mx-auto px-5">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Name"
            title="Name"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl text-white lg:text-xl sm:text-sm font-bold tracking-wide  uppercase">
              Shah Muntacher Hossain
            </span>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex text-white">
            {myItem2}

            {user && (
              <li
                onClick={handleLogout}
                className="bg-red-400 cursor-pointer p-2 font-semibold  text-white rounded"
              >
                log Out
              </li>
            )}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-200" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase ">
                          Shah Muntacher Hossain
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4 flex flex-col text-slate-700">
                      {myItem2}
                      {user && (
                        <li
                          onClick={handleLogout}
                          className="bg-red-400 cursor-pointer p-2 font-semibold  text-white rounded"
                        >
                          log Out
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
