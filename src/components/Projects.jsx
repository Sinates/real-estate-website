 import React, { useState } from "react";
import { assets, projectsData } from "../assets/assets.js";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 4; // how many cards show on desktop

  const next = () => {
    // if you are at the last slide, go back to first
    if (currentIndex >= projectsData.length - itemsPerView) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    // if you are at the first slide, go to last possible slide
    if (currentIndex === 0) {
      setCurrentIndex(Math.max(projectsData.length - itemsPerView, 0));
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="container mx-auto px-6 md:px-20 lg:px-32 py-16" id='Projects'>
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects <span className="font-light">Completed</span>
      </h1>

      <p className="text-center text-gray-500 mb-10 max-w-80 mx-auto">
        Crafting spaces, building legacies. Explore our portfolio.
      </p>

      {/* Arrows */}
      <div className="flex justify-end items-center mb-6 gap-2">
        <button
          onClick={prev}
          className="p-2 bg-gray-200 rounded"
          aria-label="previous project"
        >
          <img src={assets.left} alt="Previous" className="w-5 h-5" />
        </button>

        <button
          onClick={next}
          className="p-2 bg-gray-200 rounded"
          aria-label="next project"
        >
          <img src={assets.right} alt="Next" className="w-5 h-5" />
        </button>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 25}%)`, // 25% because 4 cards per row
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full sm:w-1/4 bg-white rounded-xl shadow overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
             <div> </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-500">{project.location}</p>
                <p className="font-bold">{project.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
