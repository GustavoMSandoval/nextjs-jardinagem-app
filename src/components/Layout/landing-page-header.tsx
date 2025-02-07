import React, { useState, useEffect } from "react";
import WhatsappComponent from "../WhatsappComponent/component";

export default function LandingPageHeader() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when screen size is larger than 930px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 930) {
        setMobileMenuOpen(false);
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    'sobre',
    'serviços',
    'projetos',
    'manutenção',
    'terceirização',
    'contato'
  ];

  return (
    <header className=' fixed top-0 left-0 w-full z-[999] bg-[#f8fff8] flex items-center justify-around p-5'>
      <WhatsappComponent />
      <img className='w-40 lg:w-80' src="/images/logo.png" alt="Logo" /> {/* Adjusted logo size for mobile */}

      <div className='flex items-center'>
        {/* Menu Icon */}
        <button onClick={toggleMobileMenu} className='md:hidden p-2'>
          <svg
            className='w-10 h-10 text-[#8bb38d]' 
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className='hidden md:flex flex-col'>
          <ul className='flex space-x-4'>
            {navLinks.map((item) => (
              <li key={item}>
                <a href={`#${item}`} className='text-[#8bb38d] leading-[24px] md:leading-[28px] text-[12px] lg:text-[17px] hover:text-[#6b9b60] uppercase font-headerLinkFont'>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } z-[999]`}
        >
          <div className="flex justify-between items-center px-4 py-3 bg-[#f8fff8] text-[#8bb38d]">
            <span className="text-lg font-medium">Menu</span>
            {/* Close Menu Icon */}
            <button onClick={toggleMobileMenu} className="p-2">
              <svg
                className='h-8 w-8'
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-4 py-3 bg-[#f8fff8] h-full">
            {navLinks.map((item) => (
              <a
              key={item}
              href={`#${item}`}
                className="block text-[#8bb38d] leading-[24px] md:leading-[28px] text-[16px] md:text-[18px] hover:bg-[#f8fff8] hover:text-[#6b9b60] uppercase font-headerLinkFont px-3 py-2 rounded-md"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
