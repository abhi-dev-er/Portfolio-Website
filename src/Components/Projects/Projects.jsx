import React from "react";
import proImg1 from '../../assets/project1.png'
import proImg2 from '../../assets/project2.png'
import proImg3 from '../../assets/project3.png'
import proImg4 from '../../assets/project4.png'
import proImg5 from '../../assets/project5.png'
import proImg6 from '../../assets/project6.png'

function Projects() {
  return (
    <div className="w-full  h-[95vh] md:ml-8  mt-44">
      <h1 className="flex justify-center items-center text-3xl font-serif font-semibold">
        Projects
      </h1>
      <div className="grid md:grid-cols-3 md:grid-rows-2 gap-5 mt-12 md:ml-0 ml-12">
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={proImg1}
                alt="project1"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Pokedex App</h2>
              <div className="card-actions justify-end">
                <button className=" btn flex items-center justify-center btn-primary">
                  <a className="no-underline" href="https://github.com/abhi-dev-er/React_pokedex_app">GitHub</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={proImg2}
                alt="project2"
              />
            </figure>
            <div className="card-body">
            <h2 className="card-title">LMS Front-End</h2>
              <div className="card-actions justify-end">
                <button className=" btn flex items-center justify-center btn-primary">
                  <a className="no-underline" href="https://github.com/abhi-dev-er/lms-project">GitHub</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img 
          
                src={proImg3}
                alt="project3"
              />
            </figure>
            <div className="card-body">
            <h2 className="card-title">Simple Website using Tailwind</h2>
              <div className="card-actions justify-end">
                <button className=" btn flex items-center justify-center btn-primary">
                  <a className="no-underline" href="https://github.com/abhi-dev-er/tailwind-project">GitHub</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={proImg4}
                alt="project4"
              />
            </figure>
            <div className="card-body">
            <h2 className="card-title">Real-Estate-website</h2>
              <div className="card-actions justify-end">
                <button className=" btn flex items-center justify-center btn-primary">
                  <a className="no-underline" href="https://github.com/abhi-dev-er/Real-Estate-website">GitHub</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={proImg5}
                alt="project5"
              />
            </figure>
            <div className="card-body">
            <h2 className="card-title">Portfolio-Website</h2>
              <div className="card-actions justify-end">
                <button className=" btn flex items-center justify-center btn-primary">
                  <a className="no-underline" href="https://github.com/abhi-dev-er/Portfolio-Website">GitHub</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={proImg6}
                alt="project6"
              />
            </figure>
            <div className="card-body">
            <h2 className="card-title">Multipage-Website</h2>
              <div className="card-actions justify-end">
                <button className=" btn flex items-center justify-center btn-primary">
                  <a className="no-underline" href="https://github.com/abhi-dev-er/project--multipage-website">GitHub</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
