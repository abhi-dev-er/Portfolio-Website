import React from "react";
import hero from "../../assets/hero.jpeg";
import { Link } from "react-scroll";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

function Home() {
  return (
    <section className="h-[90vh] w-full max-w-6xl mt-4 mb-0 overflow-hidden ml-auto mr-auto relative">
      <div className="h-[100vh] w-[100vw] md:p-4 p-12 md:text-xl text-xs leading-8 font-semibold font-serif flex flex-col  justify-center ">
        <span className="text-[1.75rem] font-thin">
          Hello, I'm <br />
        </span>
        <span className=" text-yellow-500 text-[1.75rem] pt-4">
          Abhishek Dubey
        </span>
        <h1 className="text-[2.5rem] mt-4">Front-End Web Developer</h1>
        <p className="text-[1rem] font-thin mt-4">
          Im a Skilled and Passionate front-end web Developer <br /> with
          experience in creating visually appealing and user-friendly website{" "}
        </p>
        <div className="flex gap-2 mt-4">
          <Link>
            <button className="py-2 px-4 bg-blue-700 text-white rounded-2xl text-xs hover:bg-black transition-all ease-in-out duration-300">
              Download CV
            </button>
          </Link>
          <Link>
            <button className="py-2 px-4 bg-blue-700 text-white rounded-2xl text-xs hover:bg-black transition-all ease-in-out duration-300">
              Hire me
            </button>
          </Link>
        </div>
        <div className="flex  gap-4 mt-6">
          <span>
            <BsGithub className="text-2xl hover:text-blue-600 cursor-pointer transition-all ease-in-out duration-300" />
          </span>
          <span>
            <BsInstagram className="text-2xl hover:text-blue-600 cursor-pointer" />
          </span>
          <span>
            <BsLinkedin className="text-2xl hover:text-blue-600 cursor-pointer" />
          </span>
        </div>
      </div>
      <div className="">
        <img
          className="rounded-[50%] md:block hidden w-[400px] h-[400px] absolute -z-[1] top-[3.5rem] right-[0] "
          src={hero}
          alt=""
        />
      </div>
    </section>
  );
}

export default Home;
