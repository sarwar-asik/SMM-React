import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/ProviderContext";
import main_api from "../../shared/main_api";

const EditBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const {user} = useContext(AuthContext)
const [refresh,setRefresh] = useState(null)

  useEffect(() => {
    fetch(`${main_api}/blogs/blogs`)
    .then(res=>res.json())
    .then(data =>{
      setBlogs(data)
    })
  }, [refresh]);

  const deleteBlog = (data) => {
    // console.log(data);

    fetch(`${main_api}/blogs/deleteBlog?user=${user?.email}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          console.log(result);
          Swal.fire("deleted", "", "success");
        }
        else{
          Swal.fire(result.error, "", "error");
        }
        setRefresh("refresh")
      })
  };

const editBlogs =data =>{

}

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <h2 className="text-4xl font-bold font-serif mt-2  mx-auto w-[100%] text-center">
        {" "}
        Your Blogs{" "}
      </h2>
      <p className="text-slate-600 text-sm font-mono mt-5">You can delete any blog from the server</p>
      <main className="grid grid-cols-1  mt-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-3 ">
        {blogs?.map((blog, i) => {
          const { name, img, time, publisher, link, detail, date } = blog;
          return (
            <div
              key={i}
              className={`shadow-2xl rounded-xl p-2 block lg:flex gap-5 `}
            >
              <figure className="lg:w-[25%]">
                <img
                  className="w-full lg:w-[200px] mx-auto  rounded-[3%]"
                  src={img}
                  // width={300}
                  // height={300}
                  alt="Blog Img"
                />
              </figure>
              <section className="flex flex-col gap-2 w-[75%]">
                <h3 className="font-bold text-2xl font-serif">{name}</h3>
                <p className="text-[14px] font-[600] text-slate-500">
                  {detail}
                </p>
                <h6 className="text-[13px] font-[500] font-sans ">{date}</h6>
                <aside className="flex justify-between">
                  <Link to={{pathname:"/customize" }} state={blog} className="text-[18px] font-[700] font-serif">⋈ Edit⋈ </Link>
                  <button
                    onClick={() => deleteBlog(blog)}
                    className="bg-red-500 font-semibold rounded px-3 py-2 text-white"
                  >
                    Delete
                  </button>
                </aside>
              </section>
              <section>
                <button className=""></button>
              </section>
            </div>
          );
        })}
      </main>
    </div>
  );
};


export default EditBlogs;
