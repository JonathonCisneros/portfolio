import React from 'react';
import logo from '../assets/logo/portrait.png';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

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

        <div className='inline-flex my-4'>
          <a
            href='https://www.linkedin.com/in/jonathoncisneros/'
            target='_blank'
            rel='noreferrer'
            className='text-4xl mr-5 hover:text-primary'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://github.com/JonathonCisneros'
            target='_blank'
            rel='noreferrer'
            className='text-4xl hover:text-primary'
          >
            <FaGithubSquare />
          </a>
        </div>

        <p className='text-xs md:text-md'>
          Copyright &copy; {footerYear} All rights reserved. Jonathon Cisneros
        </p>
      </div>
    </footer>
  );
}

export default Footer;
