import React, { useState } from 'react'

const Header = () => {
   
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const navLinks = [
      {href:'#home', label:'Home'},
      {href:'#services', label:'Services'},
      {href:'#about', label:'About Us'},
      {href:'#specialists', label:'Our Specialists'},
      {href:'#contact', label:'Contact'},

   ]


  return (
      <header className='bg-gradient-to-r from-gray-300 to-gray-500 sticky top-0 z-50'>
         <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
            <a href="/" className='flex items-center focus:outline-none focus:ring-2 focus:ring-gray-700 rounded'>
               <h1 className='text-2xl font-bold text-blue-800'>Glidex Clinic</h1>
            </a>

            <nav aria-label='Primary navigation'>
               <ul className='hidden md:flex space-x-8' >
                  {navLinks.map((link, index)=> (
                     <li key={index}>
                        <a href={link.href} 
                        className='text-gray-700 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-blue-600 focus:rounded'>
                           {link.label}
                        </a>
                     </li>
                  ))

                  }
               </ul>
            </nav>

            <button
               className='md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded'
               onClick={toggleMenu}
               aria-label='Toggle Menu'
               aria-expanded={isMenuOpen}
               aria-controls='mobile-menu'
            >
            {isMenuOpen ? (
               <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                  />
               </svg>
            ) : (
               <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                  />
               </svg>
            )}
            </button>
            <aside
               id='mobile-menu'
               className={`md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-in-out ${
                  isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
               }`}
               aria-label='mobile-menu'
               style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
            >
               <nav aria-label='Mobile navigation'>
                  <ul className='flex flex-col space-y-4 px-4'>
                     {navLinks.map((link, index) => (
                     <li key={index}>
                        <a
                           href={link.href}
                           className='block text-gray-700 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-blue-600 focus:rounded'
                           onClick={toggleMenu}
                        >
                           {link.label}
                        </a>
                     </li>
                     ))}
                  </ul>
               </nav>
            </aside>
            <nav className='hidden md:block' aria-label='Appointment booking'>
               <a href="#appointment"
               className='bg-blue-900 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
               >
                  Book Appointment
               </a>
            </nav>
         </div>
      </header>
  )
}

export default Header