import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/ProviderContext";
import main_api from "../../shared/main_api";

const AddExperience = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
        console.log(imageData.data.url, "imageData");
        const image = imageData.data.url;
        data["img"] = image;
        postBlogs(data);
      });
  };

  const postBlogs = (blogsData) => {
    console.log(blogsData, "from post");
    fetch(`${main_api}/experience/addExperience?user=${user?.email}`, {
      method: "POST",
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
        Add a Experience
      </h2>
      <section className="py-3 lg:px-[40px] px-3 lg:w-[80%] mx-auto">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            <div className="">
              <label htmlFor="" className="text-slate-700 my-2 ">
                Experience
              </label>
              <input
                type="text"
                {...register("name")}
                className="w-full rounded  mt-2 outline-none py-3 bg-slate-300 px-3"
                required
                placeholder="Experience name"
              />
            </div>
            <div className="">
              <label htmlFor="" className="text-slate-700 my-2 ">
              Company Name
              </label>
              <input
                type="text"
                {...register("company")}
                className="w-full rounded  mt-2 outline-none py-3 bg-slate-300 px-3"
                required
                placeholder="Your Company"
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
                required
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
                required
              />
            </div>
          </section>
          <div className="mt-5">
            <label htmlFor="" className="text-slate-700 my-2 ">
              Select Banner
            </label>
            <input
              type="file"
              name="img"
              className="w-full rounded px-5 mt-2 outline-none py-3 bg-slate-300"
              {...register("img")}
              required
            />
            {/* <Image src={imgbb} height={80} width={50} alt="imgbb"  /> */}
          </div>
          <div className="mt-5">
            <label htmlFor="" className="text-slate-700 my-2 ">
              Blogs Detail
            </label>
            <textarea
              type="text"
              className="w-full rounded px-5 mt-2 outline-none py-3 bg-slate-300"
              {...register("details")}
              required
              placeholder="Blog Details"
            />
          </div>
          <div className="">
            <input
              type="submit"
              className="bg-[#41a3e5] lg:px-5 px-3 py-2 text-[18px] rounded text-white font-bold "
              value="Add a Experience"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddExperience;
