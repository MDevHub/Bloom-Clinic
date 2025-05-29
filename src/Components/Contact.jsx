import ContactImg from '../assets/Images/Img1.avif'
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {

   const contactItems = [
      {
         icon: <FaMapMarkerAlt className='text-blue-600 text-xl'/>,
         title: 'Our Location',
         content: (
            <p className='text-gray-600'>
               123 Beaty Avenue, Medical District <br />
               London
            </p>
         )
      },
      {
         icon: <FaPhoneAlt className='text-blue-600 text-xl'/>,
         title: 'Phone Numbers',
         content: (
            <p className='text-gray-600'>
               Appointments: <a href="#" className='hover:text-blue-600'>+234 913 552 4436</a> <br />
               Emergency: <a href="#" className='hover:text-blue-600'>+234 901 354 3364</a> 
            </p>
         )
      },
       {
         icon: <FaEnvelope className='text-blue-600 text-xl'/>,
         title: 'Email',
         content: (
            <p className='text-gray-600'>
               <a href="#" className='hover:text-blue-600'>info@glidexclinic.com</a> <br />
               <a href="#" className='hover:text-blue-600'>appoin@gmail.com</a> 
            </p>
         )
      },
       {
         icon: <FaClock className='text-blue-600 text-xl'/>,
         title: 'Working Hours',
         content: (
            <p className='text-gray-600'>
              Sunday - Thursday: 9: 00AM - 8:00 PM <br />
              Friday: 2:00PM - 9:00 PM
              Saturday: Closed
            </p>
         )
      },
   ];

   const services = [
      {value: 'botox', label: 'Botox Treatments'},
      {value: 'fillers', label: 'Dernal Fillers'},
      {value: 'laser', label: 'Laser Therapy'},
      {value: 'facelift', label: 'Mon-Surgical Facelift'},
      {value: 'other', label: 'Other'},
   ];

  return (
   <article id='contact' className='py-20 overflow-hidden bg-gradient-to-r from-blue-100 to-blue-100'>
      <div className='container mx-auto px-4'>
         <header data-aos='fade-up' data-aos-delay='400' className='text-center mb-16 relative'>
            <div className='absolute -top-10 left-1/2  transform -translate-x-1/2 w-24 h-24 rounded-full bg-blue-100 opacity-30 z-0'> 
            </div>
               <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10'>
                  Contact <span className='text-blue-600'>Our Clinic</span>
               </h1>
               <p className='text-lg text-gray-600 max-w-2xl mx-auto relative z-10'>
                  facere praesentium nam, iste explicabo veniam autem. Est, consequatur!
               </p>
         </header> 
         <main className='flex flex-col lg:flex-row gap-12'>
            <aside data-aos='fade-up' data-aos-delay='500' className='lg:w-2/5'>
               <section className='bg-white rounded-2xl shadow-xl p-8 h-full'>
                  <h2 className='text-xl font-bold text-gray-800 mb-6'>Get In Touch</h2>
                  <address className='space-y-6'>
                     {
                        contactItems.map((item, index) => (
                           <article key={index} className='flex items-start'>
                              <figure className='bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0'>
                                 {item.icon}
                              </figure>
                              <div>
                                 <h3 className='font-medium text-gray-800 mb-1'>{item.title}</h3>
                                 {item.content}
                              </div>
                           </article>
                        ))
                     }
                  </address>
                  <figure className='mt-8 rounded-xl overflow-hidden shadow-md'>
                     <img
                        src={ContactImg} 
                        className='w-full h-48 object-cover hover:scale-105 transition-transform duration-500'   
                        width='400'
                        height='200'
                        loading='lazy'
                     />
                  </figure>
               </section>
            </aside>
            <section data-aos='fade-up' data-aos-delay='600' className='lg:w-3/5'>
               <div className='bg-white rounded-2xl shadow-xl p-8 h-full'>
                  <h2 className='text-2xl font-bold text-gray-800 mb-6'>Send Us a Message </h2>
                  <form className='space-y-6'>
                     <fieldset className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                           <label className='block text-gray-700 font-medium mb-2'>Full name</label>
                           <input 
                              type="text"
                              id='name'
                              name='name'
                              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                              placeholder='Your name'
                              required
                           />
                        </div>

                        <div>
                           <label className='block text-gray-700 font-medium mb-2'>Phone Number</label>
                           <input 
                              type="text"
                              id='phone'
                              name='phone'
                              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                              placeholder='+234 xxx xxx xxxx'
                              required
                           />
                        </div>
                     </fieldset>
                     <div>
                        <label className='block text-gray-700 font-medium mb-2'>Email Address</label>
                        <input 
                           type="email"
                           id='email'
                           name='email'
                           className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                           placeholder='your@email.com'
                           required
                        />
                     </div>

                     <div>
                        <label className='block text-gray-700 font-medium mb-2'>Service Interested In</label>
                        <select
                           id='service'
                           name='service'
                           className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                           placeholder='your@email.com'
                           required
                        >
                           <option value=""> Select a service</option>
                           {services.map((service) =>(
                              <option key={service.value} value={service.value}>
                                 {service.label}
                              </option>
                           ))}
                        </select>
                     </div>

                     <div>
                        <label className='block text-gray-700 font-medium mb-2'>Your Message</label>
                        <textarea
                           id='message'
                           name='message'
                           rows='5'
                           className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                           placeholder='Tell us about your concerns or question'
                           required
                        />
                     </div>

                     <div>
                        <button
                           type='submit'
                           className='bg-blue-800 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition shadow-lg w-full md:w-auto'
                           aria-label='Submit Contact from'
                        >
                           Send Message
                        </button>
                     </div>
                  </form>
               </div>
            </section>
         </main>
         <figure data-aos='fade-up' data-aos-delay='500' className='mt-16 bg-white rounded-2xl shadow-xl overflow-hidden'>
            <iframe
               src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1363%2C51.5121%2C-0.1293%2C51.5151&layer=mapnik&marker=51.5136%2C-0.1328"
               width="100%"
               height="450"
               style={{ border: 0 }}
               allowFullScreen=""
               loading="lazy"
               title="Clinic Location Map"
               className="rounded-2xl"
               aria-label="Map showing clinic location"
            >
            </iframe>
         </figure>
      </div>
   </article>
  );
};

export default Contact