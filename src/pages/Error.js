import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <>
      <section className='flex items-center justify-center h-screen text-center px-5'>
        <article className='max-w-3xl mx-auto'>
          <h1 className='text-4xl lg:text-5xl mb-8 text-slate-800'>Oops! You found a page that doesn't exist.</h1>
          <p className='mb-8'>You seem to have discovered a page on our website that doesn't exist or may have been moved</p>

          <Link to="/" className='underline text-slate-600'>Back to Homepage</Link>
        </article>
      </section>
    </>
  )
}

export default Error