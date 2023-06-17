import React, { useEffect, useState } from "react";
import main_api from "../../shared/main_api";

const Experience = () => {
  let [experince, setexperince] = useState([]);

  useEffect(() => {
    fetch(`${main_api}/experience`)
      .then((res) => res.json())
      .then((experince) => setexperince(experince));
  }, []);

  const experiences = [
    {
      name: "Best writer",
      img: "https://media.licdn.com/dms/image/C510BAQG6EIIAQKW8zA/company-logo_200_200/0/1576346172766?e=2147483647&v=beta&t=VTLaLDWL_ZclnhSzJ1a2bZPyLfxS8RpuUwj9lPuLbzk",
      details: "I Worked as Content Writer and regular publisher",
      company: "Future Icon",
      time: "25 Decembar 2022",
    },
    {
      name: "Content Editor",
      img: "https://cdn5.vectorstock.com/i/1000x1000/42/29/two-color-future-icon-from-halloween-concept-vector-25744229.jpg",
      details: "I Worked as Content Writer and regular publisher",
      company: "Future Icon",
      time: "25 Decembar 2022",
    },
    {
      name: "Best writer",
      img: "https://media.licdn.com/dms/image/C510BAQG6EIIAQKW8zA/company-logo_200_200/0/1576346172766?e=2147483647&v=beta&t=VTLaLDWL_ZclnhSzJ1a2bZPyLfxS8RpuUwj9lPuLbzk",
      details: "I Worked as Content Writer and regular publisher",
      company: "Future Icon",
      time: "25 Decembar 2022",
    },
  ];
  return (
    <main className="px-2 bg-primary py-12 text-white">
      <section>
        <h3
          className="text-text1 text-[1.8rem] text-center font-bold font-serif
              "
        >
          <span> Education & </span>
          <span className="text-text2">Certification</span>
        </h3>
        <h5 className="font-bold text-text1 text-center"> ————————</h5>

        <p className="text-[1em] font-mono text-text2 text-center">
          I shared my educational and Certification achivement where I learned a
          lot of things .
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
        {experince?.map((item, i) => {
          const { name, img, details, time, company } = item;
          return (
            <div
              key={name}
              className="flex justify-between gap-2 items-center shadow-2xl shadow-inherit border-2 border-slate-500 px-2 py-8 rounded"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <aside className="flex flex-col ">
                <img src={img} className="h-[60px] w-[80px] rounded" alt="" />
                <h5 className="text-text1 font-mono font-bold text-[0.6em] mt-1">
                  {company}
                </h5>
              </aside>

              <section className=" text-end">
                <h2 className="text-text1 font-semibold text-[1em]">{name}</h2>
                <p className="text-text2 text-[0.8em]">
                  {details?.slice(0, 36)}
                </p>
                <button className="text-[0.7em] font-mono text-slate-400">
                  Started on {time}
                </button>
              </section>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Experience;
