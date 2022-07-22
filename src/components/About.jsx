import React from 'react';
import portrait from '../assets/portrait/portrait-colored-square.png';

function About() {
  return (
    <div id='about' className='container mx-auto min-h-screen'>
      <div className='card mx-4 shadow-lg md:px-4'>
        <h2 className='card-title font-serif text-3xl px-4 divider'>
          About Me 🤔
        </h2>

        <div class='hero'>
          <div class='hero-content flex-col lg:flex-row'>
            <img
              src={portrait}
              className='max-w-xs mx-auto rounded-md shadow-lg'
              alt='portrait'
            />
            <div>
              <p class='py-6'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <p class='py-6'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <p class='py-6'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
