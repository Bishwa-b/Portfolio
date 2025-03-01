import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h2 className='text-2xl text-gray-200 font-semibold'>Made with love ❤</h2>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/Bishwa-b"><FaGithubSquare /></a>
                <a href="https://www.instagram.com/bishwa_12/"><FaInstagram /></a>
            </div>

        </div>

        <p className='text-gray-400'>@2025 B. Bishwa</p>
        
    </div>
  )
}

export default Footer