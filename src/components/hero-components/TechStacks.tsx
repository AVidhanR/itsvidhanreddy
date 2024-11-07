import React from "react";

const techStacks: string[] = [
  "C",
  "C++",
  "Java",
  "Python",
  "Streamlit",
  "JavaScript",
  "ReactJS",
  "TypeScript",
  "NextJS",
  "MySQL",
  "Bash",
  "PostgreSQL",
];

// gonna do it later
const TechComponent = (tech: string) => {
  return (
    <div className="">
      <button className="">{tech}</button>
    </div>
  );
};

// trying out es6 syntax
const TechStacks = () => {
  return (
    <div className="p-4 mx-auto font-bold cursor-pointer text-start text-2xl">
      <span className=" hover:text-blue-500 hover:transition-colors">
        Technologies{" "}
      </span>{" "}
      I&apos;ve worked with:
      {techStacks.map((tech, index) => {
        return (
          <div key={index} className="p-4 text-center grid grid-cols-3 gap-1">
            <button className="border-2 p-2 rounded-xl hover:bg-slate-300 hover:text-black">
              {tech.toUpperCase()}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TechStacks;
