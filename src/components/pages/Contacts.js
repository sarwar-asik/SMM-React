
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import fb from "../../assets/fbIcon.png";
import linkedIn from "../../assets/LinkedINIcon.png";
import twitter from "../../assets/Twiiter.png";

const Contacts = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    Swal.fire("sent", "", "success");
    if(data){
      reset()
    }
  };
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 block lg:flex justify-between shadow">
      <section>
        <h3 className="text-3xl font-bold font-serif"> Reach Me, </h3>
        <p className="text-slate-700 text-[16px] mt-2 mb-3">
          You can contact with me for any query about me . With my Social media{" "}
          and Contact form . I am glad to your to your message
        </p>
        <div className="flex gap-5">
        <Link href="https://www.facebook.com/shah.muntachir" target="_blanck">
          <img
           
            className="rounded-[7px] h-[30px] w-[30px] shadow-2xl"
            src={fb}
            alt="facebook"
          />
          </Link>
          <Link href="https://www.linkedin.com/in/shah-muntacher-hossain-mihan-7120541b5/" target="_blanck">
          <img
        
        className="rounded-[7px] h-[30px] w-[30px] shadow-2xl"
            src={linkedIn}
            alt="linkedIn"
          />
          </Link>

          <img
          
          className="rounded-[7px] h-[30px] w-[30px] shadow-2xl"
            src={twitter}
            alt="Twitter"
          />
        </div>
      </section>
      <section className="py-3 lg:px-[40px] lg:w-[80%] ">
        <h1 className="mb-3 lg:mt-1 mt-4 text-2xl font-bold font-serif text-[#2999e3] mx-auto w-[50%]">
          Send Message
        </h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label htmlFor="" className="text-slate-700 my-2 ">
              Type Your Gmail
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full rounded  mt-2 outline-none py-3 bg-slate-300 px-3"
              required
              placeholder="Your gmail"
            />
          </div>
          <div className=""></div>
          <div className="mt-5">
            <label htmlFor="" className="text-slate-700 my-2 ">
              Your Message
            </label>
            <textarea
              type="email"
              className="w-full rounded px-5 mt-2 outline-none py-3 bg-slate-300"
              {...register("message")}
              required
              placeholder="Your Message"
            />
          </div>
          <div className="">
            <input
              type="submit"
              className="bg-[#41a3e5] lg:px-5 px-3 py-2 text-[18px] rounded text-white font-bold "
              value="Send Message"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contacts;
