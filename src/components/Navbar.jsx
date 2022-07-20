import React from 'react';
import { Link } from 'react-scroll';
import portrait from '../assets/logo/portrait.png';

function Navbar() {
  return (
    <nav className='relative container mx-auto px-5 py-4 bg-base-100'>
      <div className='flex items-center justify-between'>
        {/* My Logo */}
        <a href='/'>
          <img src={portrait} className='w-[100px]' alt='logo' />
        </a>

        <div className='hidden md:flex space-x-4 text-neutral'>
          <Link
            to='about'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className='btn btn-ghost hover:text-primary'
          >
            About
          </Link>

          <Link
            to='projects'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className='btn btn-ghost hover:text-primary'
          >
            Projects
          </Link>

          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className='btn btn-ghost hover:text-primary'
          >
            Contact
          </Link>

          <a
            href='/resume.pdf'
            target='_blank'
            className='btn btn-outline btn-primary text-base-100'
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
