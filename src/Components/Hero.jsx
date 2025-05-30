import React from 'react'
import hero from '../assets/Images/Img1.avif'

const Hero = () => {

   const stats = [
      {value: "2,500+", label: "Happy Clients"},
      {value: "15+", label: "Specialists"},
      {value: "50+", label: "Treatments"},
      {value: "10+", label: "Years"},
   ];

  return (
      <section id='home' className='relative overflow-hidden bg-gradient-to-r from-gray-300 to-gray-500'>
         <article className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20'>
            <div className='w-full lg:w-1/2 text-center lg:text-left'>
               <hgroup data-aos='fade-up' data-aos-delay='500'>
                  <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 mb-4'>
                     Enhance Your Natural <mark className='text-blue-700 bg-transparent'>Beauty</mark>
                  </h1>
                  <p className='text-base sm:text-lg text-gray-700 mb-8 max-w-lg mx-auto lg:max-0'>
                     Discover personalized treatments that highlight your natural beauty. At <span className='text-blue-700 font-semibold'>Bloom Clinic</span>, we combine modern aesthetics with expert care to help you look and feel your best.
                  </p>
               </hgroup>

               <nav data-aos='fade-up' data-aos-delay='600' className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4  mb-8'>
                  <a 
                     href="#appointment"
                     className='bg-blue-600 hover:bg-blue-800 text-white px-8 py-3 rounded-full text-center transition shadow-lg '
                     aria-label='Book a consultation'
                  >
                     Book a consultation
                  </a>

                  <a 
                     href="#services"
                     className='border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-center transition'
                     aria-label='Explore Our Services'
                  >
                     Explore Services
                  </a>
               </nav>

               <aside data-aos='fade-up' data-aos-delay='800' className='py-4'>
                  <ul className='flex flex-wrap justify-center gap-4 md:gap-8 text-center'>
                     {stats.map((stat, index) => (
                        <li key={index} className='px-2'>
                           <strong className='text-2xl font-bold text-blue-600'>
                              {stat.value}
                           </strong>
                           <small className='block text-sm text-gray-600'>
                              {stat.label}
                           </small>
                        </li>
                     ))}
                  </ul>   
               </aside>
            </div>

            <figure data-aos='fade-up' data-aos-delay='700' className='md:w-1/2 flex justify-center'>
               <div className='relative w-full max-w-md mx-auto md:mx-0'>
               <span
                  className='bg-blue-600 rounded-full w-80 h-80 absolute -top-10 -left-10 opacity-20'
                  aria-hidden='true'
               ></span>

               <span
                  className='bg-[#3434aa] rounded-full w-64 h-64 absolute -bottom-10 -right-10 opacity-20'
                  aria-hidden='true'
               ></span>

               <img
                  src={hero}
                  alt="cosmetic treatment"
                  className='relative z-10 rounded-full shadow-2xl w-72 h-72 object-cover object-center mx-auto'
                  width='288'
                  height='288'
                  loading='eager'
               />
               </div>
            </figure>
         </article>
      </section>
  )
}

export default Hero