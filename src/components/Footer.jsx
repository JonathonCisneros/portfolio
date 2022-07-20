import React from 'react';
import portrait from '../assets/logo/portrait.png';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className='footer p-10 text-gray-500 footer-center'>
      <div>
        <img src={portrait} className='w-[100px]' alt='portrait' />

        <div className='inline-flex mt-0 my-6'>
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

        <p>
          Copyright &copy; {footerYear} All rights reserved. Jonathon Cisneros
        </p>
      </div>
    </footer>
  );
}

export default Footer;
