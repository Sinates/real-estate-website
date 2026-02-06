 import React from 'react'
import { assets } from '../assets/assets.js'

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{' '}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </h1>

      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate about properties, Dedicated to your vision
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20 w-full">
        <img src={assets.about} className="w-full sm:w-1/2 max-w-lg" alt="About" />

        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600 w-full">
          {/* stats grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Experience</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. of Sq.Ft Delivered</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>

          {/* paragraph UNDER the grid so it doesn't become skinny */}
          <p className="text-gray-500 max-w-xl leading-relaxed text-center md:text-left mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            natus suscipit odio itaque illum repellat, aspernatur voluptas ut
            consequuntur facilis dolores, autem quae labore nemo, quidem soluta
            rerum exercitationem doloremque!</p>
           <button className='mt-4 bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-600 transition duration-300'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default About
