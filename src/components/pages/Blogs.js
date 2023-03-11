import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import main_api from "../../shared/main_api";

const Blogs = () => {
  let [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${main_api}/blogs/blogs`)
      .then((res) => res.json())
      .then((blogs) => setBlogs(blogs));
  }, []);

  // console.log(blogs, "from Blogs.js");
  if (blogs.length > 3) {
    blogs = blogs.splice(3, 1);
  }

  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center">
      <h2 className="mt-1 text-3xl font-bold font-serif">MY Latest Blogs</h2>
      <p className="text-slate-700 mt-1 mb-4 font-mono">
        There are some latest blogs of mine . You can Explore my blogs from
        here. My new blog will publishe soon
      </p>

      {blogs.length > 0 ? (
        ""
      ) : (
        <div className="mt-1 text-xl font-bold font-serif text-center">
          coming soon my latest blogs
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {/*  */}
        {blogs?.map((blog, i) => {
          return (
            <div
              key={i}
              className="overflow-hidden transition-shadow duration-300 bg-white rounded"
            >
              <Link to="/" aria-label="Article">
                <img
                  src={blog?.img}
                  className="object-cover w-full h-64 rounded"
                  alt="blogs"
                />
              </Link>
              <div className="py-5">
                <section className="flex justify-between">
                  <p className="mb-2 text-xs  font-semibold text-gray-600 uppercase">
                    {blog.time}
                  </p>
                  <h5 className="text-[24px] text-[#3594d3] font-semibold font-mono">
                    {" "}
                    {blog.publisher}
                  </h5>
                </section>
                <Link
                  to="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5">{blog.name}</p>
                </Link>
                <p className="mb-4  text-slate-600">
                  {blog.detail.length > 84
                    ? blog.detail.slice(0, 84) + "...."
                    : blog.detail}
                </p>
                <section className="flex justify-between">
                  <button className="bg-[#41a3e5] px-5 py-2 text-[18px] rounded text-white font-bold ">
                    See Details
                  </button>

                  <a
                    target="_blank"
                    href={blog?.link}
                    rel="noopener noreferrer"
                    className="bg-[#41a3e5] px-5 py-2 text-[18px] rounded text-white font-bold "
                  >
                    Visit
                  </a>
                </section>
              </div>
            </div>
          );
        })}
      </div>

      {blogs.length >= 3 && (
        <section className="py-5 shadow-2xl w-[30%] mx-auto">
          <Link
            to="/allBlogs"
            className="bg-slate-700 text-center mx-auto sm:px-[36px] lg:px-[46px] mt-5 py-3 sm:text-[15px] lg:text-[18px] rounded text-white font-bold "
          >
            See All
          </Link>
        </section>
      )}
    </div>
  );
};

export default Blogs;
