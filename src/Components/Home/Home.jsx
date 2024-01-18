import React from "react";
import hero from "../../assets/hero.jpeg";
import { Link } from "react-scroll";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Home() {
  return (
    <section className="h-[90vh] w-full max-w-6xl mt-4 mb-0 overflow-hidden ml-auto mr-auto relative">
      <div className="h-[100vh] w-[100vw] p-8 text-xl font-semibold font-serif flex flex-col  justify-center ">
        <span className="text-[1.75rem] font-thin">
          Hello, I'm <br />
          <span className=" text-yellow-600">Abhishek Dubey</span>
        </span>
        <h1>
          {" "}
          <span className="text-[1.5rem]">Front-End Web Developer</span>
        </h1>
        <p className="text-sm font-thin">
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
        <div className="flex gap-2 mt-4">
          <span>
            <BsGithub />
          </span>
          <span>
            <BsLinkedin />
          </span>
        </div>
      </div>
      <div className="">
        <img
          className="rounded-[50%] w-[400px] h-[400px] absolute -z-[1] top-[3.5rem] right-[0] "
          src={hero}
          alt=""
        />
      </div>
    </section>
  );
}

export default Home;
