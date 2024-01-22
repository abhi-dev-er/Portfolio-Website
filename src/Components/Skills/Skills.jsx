import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaGithubSquare } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

function Skills() {
  return (
    <div className="w-full h-[60vh] md:mt-0 mt-72">
      <h1 className="flex items-center justify-center font-serif font-semibold text-3xl">
        Skills & Experience
      </h1>
      <div className="w-[80%]  md:ml-32 mt-16 h-[65vh] flex md:flex-row">
        <div className="md:ml-20 ml-10 grid grid-cols-3 grid-rows-3 md:gap-0 gap-11 md:flex md:flex-row">
          <span className="m-4">
            <FaHtml5 className="w-[100px]  h-[100px] text-yellow-500" />
            <p className="ml-6 font-serif font-semibold"> HTML 5</p>
          </span>
          <span className="m-4">
            <IoLogoCss3 className="w-[100px] h-[100px] text-blue-500" />
            <p className="ml-6 font-serif font-semibold">CSS 3</p>
          </span>
          <span className="m-4">
            <TbBrandJavascript className="w-[100px] h-[100px] text-yellow-500" />
            <p className="ml-4 font-serif font-semibold">JavaScript</p>
          </span>
          <span className="m-4">
            <GrReactjs className="w-[100px] h-[100px] text-blue-400" />
            <p className="ml-6 font-serif font-semibold">React JS</p>
          </span>
          <span className="m-4">
            <BiLogoTailwindCss className="w-[100px] h-[100px] text-black" />
            <p className="ml-6 font-serif font-semibold">Tailwind</p>
          </span>
          <span className="m-4">
            <FaGithubSquare className="w-[100px] h-[100px] text-black" />
            <p className="ml-6 font-serif font-semibold">GitHub</p>
          </span>
          <span className="m-4">
            <SiRedux className="w-[100px] h-[100px] text-black" />
            <p className="ml-6 font-serif font-semibold">Redux</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
