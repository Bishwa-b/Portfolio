import React from 'react';
import project1 from "../assets/project1.avif"
import project2 from "../assets/project2.avif"
import project3 from "../assets/project3.avif"
import project4 from "../assets/project4.avif"

import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "HappyDrivez - Car Rentals",
      description: "Developed a comprehensive car rental web application leveraging React, TypeScript, and Tailwind CSS for a responsive, intuitive user interface.",
      links: {
        site: "https://happy-drivez.vercel.app/",
        github: "https://github.com/Bishwa-b/HappyDrivez",
      },
    },
    {
      img: project2,
      title: 'Assembly: Endgame',
      description:
        'A responsive Hangman-style game built with React, featuring dynamic UI updates as users make guesses.',
      links: {
        site: "https://assembly-endgame-liard.vercel.app/",
        github: "https://github.com/Bishwa-b/WebProjects/tree/main/AssemblyEndgame",
      },
    },
    {
      img: project3,
      title: 'ChefClaude – AI-Powered Recipe Generator',
      description:
        'A fully responsive web app that suggests personalized recipes based on user-input ingredients, built with React and integrated with the Hugging Face API.',
      links: {
        site: "https://chef-claude-seven.vercel.app/",
        github: "https://github.com/Bishwa-b/WebProjects/tree/main/ChefClaude",
      },
    },
    {
      img: project4,
      title: 'Meme Generator',
      description:
        'Creates memes with top and bottom text provided on the meme image. Built using JavaScript and React, featuring API integration.',
      links: {
        site: "https://memegenerate-seven.vercel.app/",
        github: "https://github.com/Bishwa-b/WebProjects/tree/main/MemeGenerator",
      },
    },
   
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio