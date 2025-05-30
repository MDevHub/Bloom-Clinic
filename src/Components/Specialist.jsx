import React from 'react'
import SpecialistsImg from '../assets/Images/Img3.avif'
import SpecialistsImg1 from '../assets/Images/Img4.avif'
import SpecialistsImg2 from '../assets/Images/Img5.avif'
import { FaQuoteLeft, FaRegStar, FaStar } from 'react-icons/fa'

const Specialist = () => {

   const specialists = [
      {
         id: 1,
         name: 'Dr. Mary Williams',
         role: 'Plastic Surgeon',
         image: SpecialistsImg,
         bio: 'Dr. Mary Williams is a board-certified plastic surgeon with over 15 years of experience specializing in facial rejuvenation.',
         rating: 5,
         specialties: ['Facelifts', 'Rhinoplasty', 'Biopharoplasty']
      },
      {
         id: 2,
         name: 'Dr. Elenma Rodig',
         role: 'Aesthetic Physician',
         image: SpecialistsImg2,
         bio: 'Dr. Elenma Rodig is an experienced aesthetic physician with a passion for non-surgical enhancements. She combines advanced techniques.',
         rating: 4,
         specialties: ['CoolSculpting', 'Ultheraphy', 'Thread Lifts']
      },
      {
         id: 3,
         name: 'Dr. Micheal Chan',
         role: 'Damatologist',
         image: SpecialistsImg1,
         bio: 'Dr. Micheal Chan is a skilled dermatologist with a strong background in advanced skin and facial treatments.He is well knows and one of the best.',
         rating: 5,
         specialties: ['Laser Treatment', 'Rhinoplasty', 'Biopharoplasty']
      },
   ];
   const renderStars = (rating) => {
      return [...Array(5)].map((_, i) =>(
         i < rating ?
         <FaStar key={i} className='text-yellow-400 inline' aria-hidden='true' /> :
         <FaRegStar key={i} className='text-yellow-400 inline' aria-hidden='true' />
      ));
   }
;
  return (
      <section id='specialists' className='py-20 overflow-hidden bg-gradient-to-r from-gray-300 to-gray-500'>
         <div className='container mx-auto px-4'>
            <header data-aos='fade-up' data-aos-delay='400' className='text-center mb-16 relative'>
               <span className='absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-blue-100 opacity-30 z-0' aria-hidden='true'>
               </span>
               <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10'>
                  Meet Our <span className='text-blue-700'>Expert Item</span>
               </h2>
               <p className='text-lg text-gray-600 max-w-2xl mx-auto relative z-10'>
                   Our dedicated team of specialists brings years of experience and a passion for excellence to every treatment. You're in the hands of professionals who truly care.
               </p>
               <span className='absolute -bottom-6 right-1/4 w-16 h-16 rounded-full bg-gray-300 opacity-20 z-0' aria-hidden='true'>

               </span>
            </header>
            <ul data-aos='fade-up' data-aos-delay='500' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
               {
                  specialists.map((doctor) => (
                     <li key={doctor.id} className='group relative'>
                        <article className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300'>
                           <figure className='relative h-80 overflow-hidden'>
                              <img 
                                 src={doctor.image} 
                                 className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                                 loading='lazy'
                              />
                              <span className='absolute inset-0 bg-gradient-to-t from-black/60 to transparent' aria-hidden='true'> </span>
                              <aside className='absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center shadow-sm'
                                 aria-label={`Rating: ${doctor.rating} stars`}
                              >
                                 {renderStars(doctor.rating)}
                                 <span className='ml-1 text-sm font-medium'>{doctor.rating}</span>
                              </aside>
                           </figure>
                           <div className='p-6 relative -mt-10'>
                              <div className='bg-blue-50 rounded-lg shadow-md p-6'>
                                 <header>
                                    <h3 className='text-xl font-bold text-gray-800 mb-1'>{doctor.name}</h3>
                                    <p className='text-blue-800 font-medium mb-3'>{doctor.role}</p>
                                 </header>
                                 <p className='text-gray-600 mb-4'>{doctor.bio}</p>
                                 <ul className='flex flex-wrap gap-2 mb-4'>
                                    {doctor.specialties.map((spec, i) => (
                                       <li key={i}>
                                          <span className='bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full'></span>
                                          {spec}
                                       </li>
                                    ))}
                                 </ul>
                                 <figure className='absolute -top-6 left-6 bg-blue-600 text-white p-3 rounded-full shadow-lg' aria-hidden='true'>
                                    <FaQuoteLeft className='text-lg' />
                                 </figure>
                              </div>
                           </div>
                        </article>
                     </li>
                  ))
               }
            </ul>
            <aside data-aos='fade-up' data-aos-delay='500' className='bg-gradient-to-r from-gray-300 to-gray-500 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden'>
               <span className='absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-200 opacity-20' aria-hidden='true'></span>

               <span className='absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-blue-200 opacity-20' aria-hidden='true'></span>
               <div className='relative z-10'>
                  <h3 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6'>
                     Ready to Consult With our Specialists? 
                  </h3>
                  <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>  Whether you have questions or you're ready to begin your treatment journey, our experienced team is here to guide you every step of the way.</p>
                  <nav className='flex flex-col sm:flex-row justify-center gap-4'>
                     <a 
                        href="#"
                        className='bg-blue-800 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2'
                        aria-label='Book a consultation'
                     >
                        Book Consultation
                     </a>

                      <a 
                        href="#" 
                        className='border border-blue-800 hover:border-blue-600 text-blue-600 px-8 py-3 rounded-full transition shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                        aria-label='Contact us'
                     >
                        Contact Us
                     </a>
                  </nav>
               </div>
            </aside>
         </div>
      </section>
  );
};

export default Specialist