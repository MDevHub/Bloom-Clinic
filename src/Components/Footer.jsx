import { FaClinicMedical, FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdAccessTime, MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const Footer = () => {

   const socialLinks = [
      {icon: <FaFacebookF className='text-lg' />, label: 'facebook'},
      {icon: <FaTwitter className='text-lg' />, label: 'Twitter'},
      {icon: <FaInstagram className='text-lg' />, label: 'Instagram'},
      {icon: <FaLinkedinIn className='text-lg' />, label: 'LinkedIn'},
      {icon: <FaYoutube className='text-lg' />, label: 'Youtube'},
   ];
      const quickLinks = [
      {text: 'Home', href: '#'},
      {text: 'About Us', href: '#about'},
      {text: 'Our services', href: '#services'},
      {text: 'Our Specialists', href: '#specialists'},
      {text: 'Contact Us', href: '#contact'},
      {text: 'Book Appointment', href: '#appointment'},
   ];
      const contactInfo = [
      {
         icon: <MdLocationOn className='text-blue-500 text-xl mt-1 mr-4 flex-shrink-0' />,
         content: <a href="#" className='text-gray-400 hover:text-blue-400 transition'>
            123 Beauty Avenue, Medical District, London
         </a>
      },
       {
         icon: <MdPhone className='text-blue-500 text-xl mt-1 mr-4 flex-shrink-0' />,
         content: <a href="#" className='text-gray-400 hover:text-blue-500 transition'>
            +234 913 552 4436
         </a>
      },
      {
         icon: <MdEmail className='text-blue-500 text-xl mt-1 mr-4 flex-shrink-0' />,
         content: <a href="#" className='text-gray-400 hover:text-blue-500 transition'>
            info@glidexclinic.com
         </a>
      },
      {
         icon: <MdAccessTime className='text-blue-500 text-xl mt-1 mr-4 flex-shrink-0' />,
         content: <a href="#" className='text-gray-400 hover:text-blue-500 transition'>
            Sun-Thu: 9AM-8AM, Fri: 2PM-9PM
         </a>
      }
   ];
   const legalLinks = [
      {text: 'Privacy Policy', href: '#'},
      {text: 'Terms of Service', href: '#'},
      {text: 'Sitemap', href: '#'}
   ];

  return (
    <footer className='bg-gray-900 text-white pt-16 pb-8'>
      <div className='container mx-auto px-4'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
            <section className='lg:col-span-2 '>
               <header className='flex items-center mb-6'>
                  <FaClinicMedical className='text-3xl text-blue-500 mr-3' aria-hidden='true'/>
                  <h2 className='text-2xl font-bold'>Glidex Clinic</h2>
               </header>
               <p className='text-gray-400 mb-6'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, ducimus incidunt atque odit optio sunt laudantium consequuntur, corrupti consectetur suscipit fugit velit, laboriosam minus repudiandae illum eius architecto saepe aliquam.
               </p>
               <nav aria-label='Social media links'>
                  <ul className='flex space-x-4'>
                     {socialLinks.map((item, index) =>(
                        <li key={index}> 
                           <a 
                              href="#"
                              className='bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition'
                              aria-label={item.label}  
                           >
                              {item.icon}
                           </a> 
                        </li>
                     ))}
                  </ul>
               </nav>
            </section>
            <section>
               <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-500">
                  Quick Links
               </h3>
               <nav aria-label='Quick-links'>
                  <ul className='space-y-3'>
                     {quickLinks.map((link, index) =>(
                        <li key={index}>
                           <a href={link.href}
                              className='text-gray-400 hover:text-blue-500 transition'
                           >
                              {link.text}
                           </a>
                        </li>
                     ))}
                  </ul>
               </nav>
            </section>
            <address>
               <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-500">
                  Contact Us
               </h3>
               <ul className='space-y-4'>
                  {contactInfo.map((info, index) =>(
                     <li key={index} className='flex items-start'>
                        {info.icon}
                        {info.content}
                     </li>
                  ))}
               </ul>
            </address>
         </div>
         <section className='bg-gray-800 rounded-xl p-8 mb-12' aria-labelledby='newsletter-heading'>
            <div className='flelx flex-col lg:flex-row items-center justify-between'>
               <div className='mb-6 lg:mb-0 lg:mr-0'>
                  <h3 id='newsletter-heading' className='text-xl font-bold mb-2'>
                     Subscribe to our Newsletter
                  </h3>
                  <p className='text-gray-400'>Get updates on special offers and beauty tips</p>
               </div>
               <form className='flex flex-col sm:flex-row w-full lg:w-auto' aria-label='Newsletter sub form'>
                  <label className='sr-only'>Your email address</label>
                  <input 
                     type="email"
                     placeholder='Your email address'
                     className='px-6 py-3 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3 sm:mb-0 sm:mr-4 w-full'
                     required 
                  />
                  <button
                     type='submit'
                     className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition shadow-lg whitespace-nowrap'
                  >
                     Subscribe
                  </button>
               </form>
            </div>
         </section>
         <footer className='pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-500 text-sm mb-4 md:mb-0'>
               &copy; {new Date().getFullYear()} Glidex Clinic. All right reserved.
            </p>
            <nav aria-label='Legal links'>
               <ul className='flex space-x-6'>
                  {legalLinks.map((link, index) =>(
                     <li key={index}>
                        <a href={link.text}
                           className='text-gray-500 hover:text-blue-500 text-sm transition'
                        >
                           {link.text}
                        </a>
                     </li>
                  ))}  
               </ul>
            </nav>
         </footer>
      </div>
    </footer>
  );
};

export default Footer