import React from 'react';
import portrait from '../assets/portrait/portrait-colored-square.png';
import { FaGreaterThan } from 'react-icons/fa';

function About() {
  return (
    <div id='about' className='container mx-auto min-h-screen'>
      <div className='card mx-4 shadow-lg md:p-4'>
        <h2 className='card-title font-serif text-3xl px-4 divider'>
          About Me <span className='animate-wiggle'>🤔</span>
        </h2>

        <div className='hero'>
          <div className='hero-content flex-col lg:flex-row'>
            <img
              src={portrait}
              className='w-[15rem] md:w-[18rem] lg:w-[20rem] mx-auto rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all ease-in-out'
              alt='portrait'
            />
            <div>
              <p className='py-3 px-4 md:px-2 font-light text-justify'>
                Hi! My name is Jonathon Cisneros and I am excited to join an
                awesome team to build things for the web! In 2015, I had my
                first taste of web development when I enrolled at Treehouse and
                spent all night (literally) creating my first website. It was
                exciting but I still was not sure which career path I wanted to
                take. After many years of different career paths, I have found
                myself back to web development, specifically front-end
                development.
              </p>
              <p className='py-3 px-4 md:px-2 font-light text-justify'>
                Now, I look forward to finally getting into the career I believe
                best suits me and where I can suceed. I love problem-solving,
                learning new technologies and the great outdoors! Also, I am a
                father-to-be expecting our baby girl November 2022!
              </p>
              <p className='py-3 px-4 md:px-2 font-light text-justify'>
                These are the recent tools I have used:
              </p>
              <ul className='px-4 md:px-2 grid grid-cols-2'>
                <li className='font-light'>
                  <FaGreaterThan className='text-sm text-primary inline mb-1' />{' '}
                  React
                </li>
                <li className='font-light'>
                  <FaGreaterThan className='text-sm text-primary inline mb-1' />{' '}
                  TailwindCSS
                </li>
                <li className='font-light'>
                  <FaGreaterThan className='text-sm text-primary inline mb-1' />{' '}
                  Node.js
                </li>
                <li className='font-light'>
                  <FaGreaterThan className='text-sm text-primary inline mb-1' />{' '}
                  Express.js
                </li>
                <li className='font-light'>
                  <FaGreaterThan className='text-sm text-primary inline mb-1' />{' '}
                  MongoDB
                </li>
                <li className='font-light'>
                  <FaGreaterThan className='text-sm text-primary inline mb-1' />{' '}
                  Redux
                </li>
                <li className='font-light'>
                  <FaGreaterThan className='text-sm text-primary inline mb-1' />{' '}
                  Postman
                </li>
                <li className='font-light'>
                  <FaGreaterThan className='text-sm text-primary inline mb-1' />{' '}
                  DaisyUI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
