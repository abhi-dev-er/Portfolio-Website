import React from "react";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <nav className="h-[50px] max-w-6xl w-full mt-0 ml-auto mr-auto pt-8 pb-4 pl-8 pr-8 flex items-center justify-between sticky top-0 z-10">
      <h1 className="text-2xl font-semibold font-serif ">Abhi .</h1>
      <div>
        <Link className="m-4 cursor-pointer font-medium hover:text-blue-500 ">Home</Link>
        <Link className="m-4 cursor-pointer font-medium hover:text-blue-500 ">About</Link>
        <Link className="m-4 cursor-pointer font-medium hover:text-blue-500 ">Skills</Link>
        <Link className="m-4 cursor-pointer font-medium hover:text-blue-500 ">Projects</Link>
      </div>
      <button className="px-4 py-2 rounded-lg text-white bg-blue-500 hover:text-white hover:bg-black transition-all ease-in-out duration-300">Contact Me</button>
    </nav>
  );
}

export default Navbar;
