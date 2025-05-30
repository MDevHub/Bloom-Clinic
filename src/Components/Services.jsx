import React from 'react'
import { FaClinicMedical, FaRegSmile, FaSyringe, FaUserMd } from 'react-icons/fa'

const Services = () => {

   const services = [
      {  icon: <FaClinicMedical className='text-4xl text-blue-600' aria-hidden= 'true'/>,
         title: "Facelift Procedures",
         desc: "Restore youthful contours and reduce visible signs of aging with our expert facelift procedures, performed with precision and care.",
         link: "#facelift"
      },
       {  icon: <FaUserMd className='text-4xl text-blue-600' aria-hidden= 'true'/>,
         title: "Botox and Fillers",
         desc: "Smooth out fine lines and wrinkles or restore lost volume with safe, non-surgical Botox and dermal filler treatments tailored to your features.",
         link: "#botox"
      },
       {  icon: <FaRegSmile className='text-4xl text-blue-600' aria-hidden= 'true'/>,
         title: "Laser Treatment",
         desc: "Achieve clearer, smoother skin with advanced laser treatments designed to reduce scars, blemishes, and signs of aging—safe and effective with minimal downtime.",
         link: "#laser"
      },
       {  icon: <FaSyringe className='text-4xl text-blue-600' aria-hidden= 'true'/>,
         title: "Body Colouring",
         desc: "Even out your skin tone and enhance your natural glow with safe, non-invasive body colouring treatments tailored to your unique complexion.",
         link: "#colouring"
      },
   ]

return (
   <section
      id='services'
      className='py-20 overflow-hidden bg-gradient-to-r from-gray-300 to-gray-500'
      aria-labelledby='services-heading'
   >
      <div className='container mx-auto px-4'>
         <header data-aos='fade-up' data-aos-delay-500 className='text-center mb-16 '>
            <h2 id='services-heading' className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
                Our <span className='text-blue-700'>Premium Services</span>
            </h2> 

            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              From advanced skin care to non-surgical enhancements, our services are designed to deliver real, visible results with comfort and care.
            </p>
         </header>

         <ul data-aos='fade-up' data-aos-delay='500' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {services.map((service, index) =>(
               <li key={index}>
                  <article
                     className='bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:translate-y-[5px] h-full flex flex-col'
                  >
                     <figure className='mb-6'>
                        {service.icon}
                     </figure>
                     <h3 className='text-xl font-bold text-gray-800 mb-3'>
                        {service.title}
                     </h3>
                     <p className='text-gray-600 ml-2 flex-grow'>{service.desc}</p>
                  <a href={service.link}
                     className='text-blue-800 font-medium hover:text-blue-600 transition flex items-center mt-auto'
                     aria-label={`Learn more about ${service.title}`}
                  >
                     Learn more
                     <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                     </svg>
                  </a>
                  </article>
               </li>
            ))}
         </ul>

         <footer data-aos='fade-up' data-aos-delay='600' className='mt-20 text-center'>
            <h3 className='text-2xl font-bold text-gray-800 mb-6'>
               Ready to transfrom your look?
            </h3>
            <a href="#appointment"
               className='bg-blue-800 hover:bg-blue-600 text-white px-8 py-3 rounded-full inline-block transition shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2'
               aria-label='Book your consultation now'
            >
               Book Your Consultation Now
            </a>
         </footer>
      </div>
   </section>
  );
};

export default Services