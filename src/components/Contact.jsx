import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <div id='contact' className='container mx-auto'>
      <div className='card mx-4 shadow-lg md:p-4'>
        <h2 className='card-title font-serif text-3xl px-4 divider'>
          Contact Me 👨🏻‍💻
        </h2>
        <div className='hero py-5'>
          <div className='hero-content text-center'>
            <div className='max-w-lg'>
              <p className='py-6 font-light'>
                Hey, I am available for hire! Please contact me via email and I
                will respond as soon as I am notified. I am eager for my next
                adventure. Thank you for taking the time to view my portfolio.
              </p>

              <a
                href='mailto:cisneros.jonathon@gmail.com'
                target='_blank'
                rel='noreferrer'
                className='btn btn-primary btn-outline mx-auto mb-5'
              >
                Get in touch
              </a>

              <div>
                <div className='inline-flex my-5'>
                  <a
                    href='https://www.linkedin.com/in/jonathoncisneros/'
                    target='_blank'
                    rel='noreferrer'
                    className='text-5xl mr-5 hover:text-primary'
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href='https://github.com/JonathonCisneros'
                    target='_blank'
                    rel='noreferrer'
                    className='text-5xl hover:text-primary'
                  >
                    <FaGithubSquare />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
