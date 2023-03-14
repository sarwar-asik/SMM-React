import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/ProviderContext";
import main_api from "../../shared/main_api";

const CustomizeBlog = () => {
  const { state } = useLocation();
  // console.log(state,"propsData,");

  const { name, date, img, link, publication, time, detail } = state;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  // const [imgbb ,setimgBb] = useState("")

  // const handleBbChange =e =>{
  //   const photo = e.files[0]
  //   console.log(e,"and",photo);

  // }
  const { user } = useContext(AuthContext);

  const onSubmit = (data) => {
    const photo = data.img[0];
    getImgLink(data, photo);
    // console.log( photo);
  };

  const url = `https://api.imgbb.com/1/upload?key=0a1c47a73590977963bf7432c2ef0259`;

  // console.log("imagebburl", url);

  const getImgLink = (data, photo) => {
    const formData = new FormData();
    formData.append("image", photo);
    // console.log(formData, "anddd", photo);
    // Swal.fire("snowwwwwwwwwww", "", "success");

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        // console.log(imageData.data.url, "imageData");
        if (imageData.data) {
          const image = imageData.data.url;
          data["img"] = image;
          data.mainId = state._id;
          postBlogs(data);
          console.log(data, "totalData");
        } else {
          Swal.fire("Please select anJpg Image", "", "error");
        }
      });
  };

  const postBlogs = (blogsData) => {
    console.log(blogsData, "from post");
    fetch(`${main_api}/blogs/EditBlog?user=${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogsData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          console.log(result);
          //   reset();
          navigate(-1);
          Swal.fire("Added Blogs", "", "success");
        } else {
          Swal.fire(result?.error, "", "error");
        }
      });
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="text-4xl font-bold font-serif my-2  mx-auto w-[100%] text-center">
        {" "}
        Add a Blogs{" "}
      </h2>
      <section className="py-3 lg:px-[40px] px-3 lg:w-[80%] mx-auto">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            <div className="">
              <label htmlFor="" className="text-slate-700 my-2 ">
                Name
              </label>
              <input
                type="text"
                {...register("name")}
                className="w-full rounded  mt-2 outline-none py-3 bg-slate-300 px-3"
                placeholder="Your name"
                defaultValue={name}
              />
            </div>
            <div className="">
              <label htmlFor="" className="text-slate-700 my-2 ">
                Publication
              </label>
              <input
                type="text"
                {...register("publication")}
                className="w-full rounded  mt-2 outline-none py-3 bg-slate-300 px-3"
                defaultValue={publication}
                placeholder="Your publication"
              />
            </div>
          </section>
          {/* section-2 */}
          <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-3">
            <div className="">
              <label htmlFor="" className="text-slate-700 my-2 ">
                Published Time
              </label>
              <input
                type="time"
                {...register("time")}
                className="w-full rounded  mt-2 outline-none py-3 bg-slate-300 px-3"
                defaultValue={time}
              />
            </div>
            <div className="">
              <label htmlFor="" className="text-slate-700 my-2 ">
                Published Date
              </label>
              <input
                type="date"
                {...register("date")}
                className="w-full rounded  mt-2 outline-none py-3 bg-slate-300 px-3"
                defaultValue={date}
              />
            </div>
          </section>
          <div className="mt-5">
            <aside className="flex justify-between">
              <img src={img} className="h-[64px] w-[84px]" alt="alreadyImage" />
              <label htmlFor="" className="text-slate-700 my-2 ">
                Select Banner
              </label>
            </aside>
            <input
              type="file"
              name="img"
              className="w-full rounded px-5 mt-2 outline-none py-3 bg-slate-300"
              {...register("img")}
            />
            {/* <Image src={imgbb} height={80} width={50} alt="imgbb"  /> */}
          </div>
          <div className="mt-5">
            <label htmlFor="" className="text-slate-700 my-2 ">
              Blog Link
            </label>
            <input
              type="url"
              className="w-full rounded px-5 mt-2 outline-none py-3 bg-slate-300"
              {...register("link")}
              defaultValue={link}
              placeholder="paste link "
            />
          </div>
          <div className="mt-5">
            <label htmlFor="" className="text-slate-700 my-2 ">
              Blogs Detail
            </label>
            <textarea
              type="text"
              className="w-full rounded px-5 mt-2 outline-none py-3 bg-slate-300"
              {...register("detail")}
              defaultValue={detail}
              placeholder="Blog Details"
            />
          </div>
          <div className="">
            <input
              type="submit"
              className="bg-[#41a3e5] lg:px-5 px-3 py-2 text-[18px] rounded text-white font-bold "
              value="Add a blogs"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default CustomizeBlog;
