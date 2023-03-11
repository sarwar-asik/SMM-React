import Image from "next/image";
import React from "react";
import sk1 from "../../assets/sk1.png";
import sk2 from "../../assets/sk2.png";
import sk3 from "../../assets/sk3.png";
import sk4 from "../../assets/sk4.png";

const Skills = () => {
  const skills = [
    {
      name: "Content Writer",
      img:sk1,
      details: "Working as a Content writer , published some articles",
      company: "Future Icon",
    },
    {
      name: "CV Writer",
      img: sk2,
      details: "Working as a CV Writer , published some articles",
    },
    {
      name: "Smart Communication",
      img: sk3,
      details: "Working as a Content writer , published some articles",
    },
    {
      name: "Brand Executing",
      img: sk4,
      details:
        "Already I have been worked as Brand Executive  with some company",
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="mt-1 text-3xl font-bold font-serif">MY Skills ,</h2>
      <p className="text-[16px] mb-5 mt-2 font-mono">
        ALready I have been gained these with hardworking . Updating with Modern{" "}
        <br />
        world I try to learn new regularly .
      </p>
      <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills?.map((skill) => {
          return (
            <div
              key={skill.name}
              className="px-[50px] text-center sm:px-0 hover:shadow-2xl "
            >
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <Image src={skill.img} alt="My Image" width={500} height={500} />
              </div>
              <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                {skill.name}
              </h6>
              <div className="mb-2 text-gray-700">{skill.details}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
