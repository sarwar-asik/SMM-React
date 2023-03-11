import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import main_api from "../../shared/main_api";

const AllBlogs = () => {
  let [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${main_api}/blogs/blogs`)
      .then((res) => res.json())
      .then((blogs) => setBlogs(blogs));
  }, []);

  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center">
      <h2 className="mt-1 text-3xl font-bold font-serif">MY Latest Blogs</h2>
      <p className="text-slate-700 mt-1 mb-4">
        There are some latest blogs of mine . You can Explore my blogs from here
        .
      </p>

      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {/*  */}

        {blogs?.map((blog) => {
          const imageData = blog?.img;

          return (
            <div
              key={blog.name}
              className="overflow-hidden transition-shadow duration-300 bg-white rounded"
            >
              <img
                src={imageData}
                className="object-cover w-full h-64 rounded"
                alt="MyImage"
                key={new Date().getTime()}
              />
              <div className="py-5">
                <section className="flex justify-between">
                  <p className="mb-2 text-xs  font-semibold text-gray-600 uppercase">
                    {blog.date}
                  </p>
                  <h5 className="text-[24px] text-[#3594d3] font-semibold font-mono">
                    {" "}
                    {blog.publication}
                  </h5>
                </section>
                <Link
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5">{blogs.name}</p>
                </Link>
                <p className="mb-4  text-slate-600">
                  {blog.detail.length > 110
                    ? blog.detail.slice(0, 110) + "...."
                    : blog.detail}
                </p>
                <section className="flex justify-between">
                  <button className="bg-[#41a3e5] px-5 py-2 text-[18px] rounded text-white font-bold ">
                    See Details
                  </button>

                  <a
                    href={blog?.link}
                    target="_blank"
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
    </div>
  );
};

export default AllBlogs;
