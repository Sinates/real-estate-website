import React from 'react'
import { assets } from '../assets/assets.js'

const Projects = () => {
  return (
    <div>
      <h1 className=' text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span>Completed</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting,spaces, Building Legacies-Explore Our Portfolio</p>
     

    <div className='flex justify-end items-center mb-8 w-20'>
         <button className='p-3 bg-gray-200rounded mr-2' aria-label='previous project'>
            <img src={assets.left} alt="Projects" />
        </button>
        <button className='p3 bg-gray-200 rounded mr-2' aria-label=' next project'>
            <img src={assets.right} alt="nextProjects" />
        </button>
    </div>
    </div>

  )
}

export default Projects
