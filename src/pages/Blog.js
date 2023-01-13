import React, { useState, useEffect } from 'react'
import { client } from '../lib/client';
import { format } from "date-fns";
import { Link } from 'react-router-dom';

function Blog() {
  const [stories, setStories] = useState([])

  useEffect(() => {
    client
        .fetch(
        `*[_type == "post"] {
            title,
            slug,
            body,
            publishedAt,
            mainImage {
                asset -> {
                    _id,
                    url
                },
                alt,
            },
            "name": author -> name,
        } | order(publishedAt desc)`
    )
    .then((data) => {
        setStories(data)
        
    })
    .catch(console.error);
}, [])

  return (
    <>
    <div className='max-w-7xl px-5 mx-auto mt-20 mb-10 flex justify-center'>
      <h1 className='card-main-title2  text-slate-800 text-6xl  max-sm:mb-4 max-sm:text-5xl lg:text-6xl'>All Blog Posts</h1>
    </div>
        <section className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 mb-10'>
           {stories.map((story)=> (
                 <Link to={`/blog/${story.slug.current}`} key={story.slug.current} >
                    <article className='border border-slate-400 rounded-lg overflow-hidden bg-white hover:bg-gray-100 transition-all duration-200'>
               {story.mainImage && <img 
                    src={story.mainImage.asset.url}        
                    alt={story.mainImage.alt}   
                    loading="lazy"
                    className='md:h-64 w-full object-cover'
                />}
                    {/*  
                    <img 
                     src='https://images.pexels.com/photos/9447551/pexels-photo-9447551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
                     alt='' /> */}

                <div className='p-4'>
                <p className='text-sm leading-relaxed'>By {story.name} &middot; 
                     {format(new Date(story.publishedAt), "dd MMMM yyyy")}
                </p>
                 <h2 className='card-title text-xl my-2 text-slate-600'>{story.title}</h2>
                 {/* <p className='text-sm text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                 <p className='text-sm leading-relaxed'>
                    {`${story.body[0].children[0].text.substring(0, 110)}...`}
                </p>
                </div>
             </article>
                 </Link>
           ))}
        </section>

        <div className='max-w-7xl mx-auto px-5 mb-20 flex items-end justify-end'>
        <Link to="/" className='text-slate-600 bg-white py-2 px-8 rounded shadow tracking-wide hover:bg-opacity-75 transition-all duration-200 '>
            Back To Homepage
        </Link>
        </div>

    </>
  )
}

export default Blog