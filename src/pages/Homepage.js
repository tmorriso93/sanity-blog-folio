import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Profile from '../components/Profile'
import { client } from '../lib/client';
import { format } from "date-fns";
import { Link } from 'react-router-dom';

function Homepage() {
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
            setStories(data.slice(0, 3))
            
        })
        .catch(console.error);
    }, [])

    useEffect(() => {
        document.title = "T Morriso Blog"
    }, [])

  return (
    <>
       {!stories ? <h2>...Loading</h2> :  
       <>
        {stories[0] &&  <Link to={`/blog/${stories[0].slug.current}`}>
            <section className='max-w-7xl mx-auto my-20 px-5'>
            <article className='relative'>
                
               {stories[0].mainImage &&  <img 
                    src={stories[0].mainImage.asset.url} 
                    alt={stories[0].mainImage.alt}
                    className='h-96 w-full object-cover rounded-2xl'
                />}
               <div className='absolute bottom-6 left-6'>
               <h1 className='card-main-title text-slate-200 text-4xl mb-6 max-sm:mb-0 max-sm:text-2xl lg:text-5xl'>
                {stories[0].title}
               </h1>
                <p className='bg-slate-50 bg-opacity-75 text-slate-600 mb-8 max-sm:invisible w-1/2 bg-transparent rounded-2xl shadow-lg p-4'>
                    {`${stories[0].body[0].children[0].text.substring(0, 110)}...`}
                </p>
                <Link to={`/blog/${stories[0].slug.current}`} className='text-slate-600 bg-white py-2 px-8 rounded shadow tracking-wide hover:bg-opacity-75 transition-all duration-200 '>
                    Read More
                </Link>
               </div>
            </article>
        </section>
        </Link>}
       </>}

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
        <Link to="/blog" className='text-slate-600 bg-white py-2 px-8 rounded shadow tracking-wide hover:bg-opacity-75 transition-all duration-200 '>
            Read All Blog Posts
        </Link>
        </div>
        

        <Newsletter />
        <Profile />
        <Footer />
    </>
  )
}

export default Homepage