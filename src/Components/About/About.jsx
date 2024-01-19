import React from "react";
import myImg from "../../assets/hero.jpeg";

function About() {
  return (
    <div className="w-full h-[100vh]">
      <h1 className="flex justify-center items-center font-serif text-[2.5rem] font-semibold p-14">
        About Me
      </h1>
      <div className="flex flex-row max-w-6xl w-[100vw] h-[100vh] p-12">
        <div className="">
          <img src={myImg} alt="" />
        </div>
        <div>
          <div>
            <h3>Education</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              porro!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              porro!
            </p>
            <h3>Experience</h3>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            odit tenetur minima eum temporibus exercitationem, repudiandae,
            earum neque delectus ipsum quisquam ipsam modi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
