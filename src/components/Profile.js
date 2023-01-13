import React from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import { FiYoutube } from 'react-icons/fi'


function Profile() {
  return (
    <>
        <div className='max-w-2xl mx-auto my-20 grid grid-cols-1 gap-8 bg-white  md:grid-cols-2 rounded-lg shadow-lg md:place-items-center overflow-hidden'>
            <article>
                <img 
                    src="https://images.pexels.com/photos/14706912/pexels-photo-14706912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="T Morriso" 
                    className='md:h-60 md:object-fit'
                />
            </article>

            <article className='md:pr-8 max-md:pl-4 max-md:pb-4 '>
                <h3 className='text-slate-500 text-2xl mb-2'>T MORRISO</h3>
                <p>Is a Front-End Web Developer, based in Toronto, Canada</p>

                <ul className='flex items-center justify-start gap-4 mt-8'>
                    <li><AiOutlineLinkedin className='text-2xl text-slate-500' /></li>
                    <li><FiYoutube className='text-2xl text-slate-500' /></li>
                    <li><FiTwitter className='text-2xl text-slate-500' /></li>
                </ul>
            </article>
        </div>
    </>
  )
}

export default Profile