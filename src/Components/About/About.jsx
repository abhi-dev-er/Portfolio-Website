import React from "react";
import myImg from "../../assets/hero.jpeg";

function About() {
  return (
    <div className="w-full h-[100vh] ">
      <h1 className="flex justify-center items-center font-serif text-[2.5rem] font-semibold p-14">
        About Me
      </h1>
      <div className="flex flex-row max-w-6xl w-[100vw] h-[60vh] p-12 ml-24 mt-8">
        <div className="w-[50%] h-[300px]">
          <img
            className="object-cover overflow-hidden w-[100%] rounded-lg h-[300px]"
            src={myImg}
            alt=""
          />
        </div>
        <div className="ml-24 w-[70%]">
          <div className="font-serif">
            <h3 className="text-2xl font-serif font-bold">Education : -</h3>
            <p>
              Bachelor of Computer Science{" "}
              <span className="text-green-500">Year : 2023</span>
            </p>
            <p>
              Diploma in Computer Science & Engineering{" "}
              <span className="text-green-500">Year : 2020</span>
            </p>
            <h3 className="text-2xl font-serif font-bold">Experience : -</h3>
            <p>6 Month Front-End Web Development </p>
          </div>
          <p className="mt-4 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            odit tenetur minima eum temporibus exercitationem, repudiandae,
            earum neque delectus ipsum quisquam ipsam modi. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Tenetur, in repellat earum
            quo debitis quaerat ullam nulla eaque repellendus recusandae sed
            dolores suscipit!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
