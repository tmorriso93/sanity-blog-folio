import React from 'react'

function Newsletter() {
  return (
    <>
    <section className='py-20 px-5 bg-gradient-to-r from-indigo-700 to-slate-800'>
       <div className='max-w-4xl mx-auto grid grid-cols-1 gap-8 text-center md:text-left  md:grid-cols-2 md:gap-16 md:place-items-center'>
       <article>
        <h2 className='text-white text-3xl lg:text-4xl mb-4 '>Sign up to the newsletter</h2>
        <p className='text-slate-200'>Recieve the latest updates. No spam, unsubscribe anytime!</p>
        </article>
    
    
    <article>
    <form>
        <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder='example@email.com' 
            reqired 
            className='w-full py-2 px-4 rounded shadow mb-4 bg-transparent border border-slate-200 placeholder-slate-300 text-slate-300 tracking-wide' />
        <button 
            type='submit'
            className='bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 w-full md:w-auto'
            >Subscribe</button>
        {/* NEWSLETTER SERVICES "BUTTONDOWN" OR "CONVERTKIT" */}
    </form>        
    </article>
       </div>
    </section>
    </>
  )
}

export default Newsletter