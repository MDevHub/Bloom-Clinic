import React from 'react'
import aboutImg from '../assets/Images/Img2.avif'
import { FaAward, FaClinicMedical, FaHeart, FaUserMd } from 'react-icons/fa'

const About = () => {

   const stats = [
      {value: '10+', label: 'Years Experience,', icon:<FaAward className='text-blue-500' aria-hidden='true'/>},
      {value: '2.5+', label: 'Happy Clients,', icon:<FaHeart className='text-blue-500' aria-hidden='true'/>},
      {value: '15+', label: 'Expert Doctors,', icon:<FaUserMd className='text-blue-500' aria-hidden='true'/>},
      {value: '10+', label: 'Treatments,', icon:<FaClinicMedical className='text-blue-500' aria-hidden='true'/>},
   ];

const approachItems = [
   {
      icon: <FaHeart className='text-blue-800' />,
      text: 'Lorem ipsum dolor sit aliquid totam sit nulla eveniet fugiat dignissimos laudantium velit quo, perspiciatis at perferendis.',
   },
   {
      icon: <FaUserMd className='text-blue-800' />,
      text: 'Lorem ipsum dolor sit aliquid totam sit nulla eveniet fugiat dignissimos laudantium velit quo, perspiciatis at perferendis.',
   },
   {
      icon: <FaClinicMedical className='text-blue-800' />,
      text: 'Lorem ipsum dolor sit aliquid totam sit nulla eveniet fugiat dignissimos laudantium velit quo, perspiciatis at perferendis.',
   },
]

  return (
    <section id='about' className='py-14 overflow-hidden bg-gradient-to-br from-gray-300 to-gray-500'>
      <div className='container mx-auto px-4'>
         <article data-aos='fade-up' data-aos-delay='400'
            className='flex flex-col lg:flex-row items-center gap-12'
         >
            <figure className='lg:w-5/12 relative'>
               <div className='relative z-10 rounded-2xl overflow-hidden shadow-2xl w-full max:w-md mx-auto'>
                  <img src={aboutImg} 
                     className='w-full h-auto object-cover aspect-[4/5]'
                     loading='lazy' 
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'
                     aria-hidden='true'
                  >
                  </div> 
               </div>
               <span className='hidden lg:block absolute -bottom-10 -left-8 w-32 h-32 rounded-full bg-blue-500 opacity-20 z-0' aria-hidden='true'>   
               </span>
               <span className='hidden lg:block absolute -top-10 -right-8 w-40 h-40 rounded-full bg-blue-700 opacity-20 z-0' aria-hidden='true'>   
               </span>

               <aside className='absolute bottom-1 -right-5 bg-white p-3 rounded-xl shadow-lg z-20'>
                  <strong className='text-2xl fonr-bold text-blue-600 '>10+</strong>
                  <small className='block text-xs font-medium text-gray-600'>Years Experience</small>
               </aside>
            </figure>

            <div data-aos='fade-up' data-aos-delay='600' className='lg:w-7/12'>
               <header>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                     About <span className='text-blue-600'>Glidex Clinic</span>
                  </h2> 
                  <p className='text-lg text-gray-600 mb-6'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste aspernatur saepe. Inventore dolores obcaecati voluptates qui eligendi blanditiis neque id! Sunt voluptas laudantium harum architecto maxime dolorem repellat sapiente.
                  </p>
               </header>
               <section className='m-8'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                     Our Approach 
                  </h3>
                  <ul className='space-y-3'>
                     {approachItems.map((item, index) =>(
                        <li key={index} className='flex items-start'>
                           <figure className='bg-gray-300 p-1 rounded-full mr-3'>
                              {item.icon}
                           </figure>
                           <p className='text-gray-700'>{item.text}</p>
                        </li>
                     ))}
                  </ul>
               </section>
               <section className='grid grid-cols-2 gap-4 mb-8'>
                 {stats.map((item, index) =>(
                     <article key={index} className='bg-white p-4 rounded-lg shadow-sm flex items-center'>
                        <figure className='mr-3'>
                           {item.icon}
                        </figure>
                        <div>
                           <strong className='text-xl font-bold text-gray-800'>{item.value}</strong>
                           <p className='text-sm text-gray-600'>{item.label}</p>
                        </div>
                     </article>
                 ))}
               </section>
               <nav>
                  <a href="#" className='inline-block bg-blue-800 hover-blue-600 text-white px-6 py-3 rounded-full transition shadow-md focus:outline-none focus:ring-blue-800 focus:ring-offset-2'>
                     Meet Our Specialist  
                  </a>
               </nav>
            </div>
         </article>
         <aside className='mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden'>
                 <span className='absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500 opacity-40'
                  aria-hidden='true'
                 >
                 </span>
                 <div className='relative z-10'>
                     <h3 className='text-2xl font-bold text-gray-800 mb-6 '>Our Mission</h3>
                     <blockquote className='text-lg text-gray-700 mb-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus animi nulla sed similique distinctio blanditiis consequuntur voluptatum itaque qui odio ipsam consequatur nesciunt eaque, repellat et. Adipisci, rerum quas!
                     </blockquote>
                     <figure className='flex items-center'>
                        <div className='w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4'>
                           <FaUserMd className='text-blue-800' aria-hidden='true'/>
                        </div>
                        <figcaption>
                           <cite className='font-semibold text-gray-800 not-italic'>
                              Dr.Sarah Johnson
                           </cite>
                           <p>Medical Direcor & Founder</p>
                        </figcaption>
                     </figure>
                 </div>
         </aside>
      </div>
    </section>
  );
};

export default About