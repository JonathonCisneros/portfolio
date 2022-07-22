import React from 'react';
import { Link } from 'react-scroll';
import { CgMenuRight } from 'react-icons/cg';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo/portrait.png';

function Navbar() {
  const scroll2Top = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className='mx-auto px-3 md:px-10 py-4 bg-base-100 fixed z-50 left-0 right-0 bg-opacity-80 backdrop-blur-lg'>
      <div className='flex items-center justify-between'>
        {/* My Logo */}
        <img
          src={logo}
          className='w-[35px] md:w-[40px] cursor-pointer'
          alt='logo'
          onClick={scroll2Top}
        />

        {/* Main nav */}
        <div className='hidden md:flex space-x-4 text-neutral'>
          <Link
            to='about'
            spy={true}
            smooth={true}
            offset={-70}
            duration={750}
            className='btn btn-ghost'
          >
            About
          </Link>

          <Link
            to='projects'
            spy={true}
            smooth={true}
            offset={-70}
            duration={750}
            className='btn btn-ghost'
          >
            Projects
          </Link>

          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={-70}
            duration={750}
            className='btn btn-ghost'
          >
            Contact
          </Link>

          <a
            href='/resume.pdf'
            target='_blank'
            className='btn btn-primary btn-outline text-base-100'
          >
            Resume
          </a>
        </div>

        {/* Mobile nav */}
        <div className='dropdown md:hidden'>
          <label tabIndex='0' className='btn btn-ghost btn-circle'>
            <CgMenuRight className='text-4xl' />
          </label>
          <ul
            tabIndex='0'
            className='menu menu-compact dropdown-content right-[-10px] mt-4 p-2 shadow-lg bg-base-100 rounded-box w-52 gap-2'
          >
            <li className='mx-auto pt-7'>
              <Link
                to='about'
                spy={false}
                smooth={true}
                offset={-100}
                duration={750}
                className='btn btn-ghost'
              >
                About
              </Link>
            </li>
            <li className='mx-auto'>
              <Link
                to='projects'
                spy={false}
                smooth={true}
                offset={-100}
                duration={750}
                className='btn btn-ghost'
              >
                Projects
              </Link>
            </li>
            <li className='mx-auto'>
              <Link
                to='contact'
                spy={false}
                smooth={true}
                offset={-100}
                duration={750}
                className='btn btn-ghost'
              >
                Contact
              </Link>
            </li>
            <li className='mx-auto mt-4 pb-7'>
              <a
                href='/resume.pdf'
                target='_blank'
                className='btn btn-primary btn-outline text-base-100'
              >
                Resume
              </a>
            </li>
            <div className='inline-flex mb-5 mx-auto'>
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
