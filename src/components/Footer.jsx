import React from 'react';
import logo from '../assets/logo/portrait.png';

function Footer() {
  const footerYear = new Date().getFullYear();

  const scroll2Top = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='footer p-10 text-gray-500 footer-center'>
      <div>
        <img
          src={logo}
          className='w-[40px] cursor-pointer'
          alt='logo'
          onClick={scroll2Top}
        />

        <p className='text-xs md:text-md'>
          Copyright &copy; {footerYear} All rights reserved. Jonathon Cisneros
        </p>
      </div>
    </footer>
  );
}

export default Footer;
