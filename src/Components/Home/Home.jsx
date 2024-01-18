import React from "react";
import hero from "../../assets/hero.jpeg";
import { Button, Link } from "react-scroll";
import { BsLinkedin, BsGithub,} from "react-icons/bs"

function Home() {
  return (
    <section className="">
      <div className="">
        <span>
          Hello, I'm <br />
          <span>Abhishek Dubey</span>
        </span>
        <h1>
          {" "}
          <span>Front-End Web Developer</span>
        </h1>
        <p>
          Im a Skilled and Passionate front-end web Developer <br /> with experience  in
          creating visually appealing and user-friendly website{" "}
        </p>
        <Link><button>Download CV</button></Link> 
        <Link><button>Hire me</button></Link>
        <div>
            <span><BsGithub/></span>
            <span><BsLinkedin/></span>
            
        </div>
      </div>
      <div>
        <img src={hero} alt="" />
      </div>
    </section>
  );
}

export default Home;
