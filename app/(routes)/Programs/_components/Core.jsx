import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Core = () => {
  const groupsData = [
    {
      title: "VLSI",
      imgSrc: "/",
      description:
        "Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.",
    },
    {
      title: "Embedded",
      imgSrc: "/",
      description:
        "Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.",
    },
    {
      title: "Robotics",
      imgSrc: "/",
      description:
        "Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.",
    },
    {
      title: "Electric Vehicle",
      imgSrc: "/",
      description:
        "Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.",
    },
  ];

  return (
    <div>
      {" "}
      <div className="relative py-16">
        <div className="container relative m-auto px-6 text-gray-500 md:px-12">
          <h2 className="text-2xl font-semibold text-black pb-6">
            <span className="text-[#286AEA]">Core </span>Courses
          </h2>
          <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
            {groupsData.map((group, index) => (
              <div
                key={index}
                className="coursecss "
              >
             <Image
                className="mx-auto"
                width={300}
                height={100}
                src={group.imgSrc}
                alt="illustration"
                loading="lazy"
              />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {group.title}
                </h3>
                <p>{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Core;
