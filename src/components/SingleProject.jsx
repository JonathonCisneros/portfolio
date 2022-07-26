import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { MdOutlineOpenInNew } from 'react-icons/md';

function SingleProject({ project, index }) {
  const { title, description, mainImage, toolsUsed, githubURL, liveDemoURL } =
    project;
  const imgURL = mainImage.asset.url;

  const reverse = index % 2 === 0 && 'lg:flex-row-reverse'; // determine if index is odd or even to reverse flex row direction

  return (
    <div className='md:mx-2 my-2'>
      <div
        className={`card md:pt-4 md:pb-8 lg:card-side ${reverse} mobile:image-full mobile:min-h-[80vw]`}
      >
        <figure>
          {/* desktop project image */}
          <a
            href={liveDemoURL}
            target='_blank'
            rel='noreferrer'
            className='w-[25rem] mx-2 mobile:hidden'
          >
            <img
              src={imgURL}
              alt={title}
              className='rounded-lg shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all'
            />
          </a>

          {/* mobile hero image */}
          <img src={imgURL} alt={title} className='brightness-50 md:hidden' />
        </figure>

        <div className='card-body p-4'>
          <a
            href={liveDemoURL ? liveDemoURL : githubURL}
            target='_blank'
            rel='noreferrer'
            className='mb-2 text-3xl md:text-4xl font-serif hover:text-primary mobile:text-base-100'
          >
            {title}
          </a>

          <p className='font-light text-justify mb-2 mobile:text-base-100 mobile:text-md'>
            {description}
          </p>

          <div className='inline-flex gap-2 lg:gap-3 mobile:justify-between'>
            {toolsUsed?.map((tool, index) => (
              <div
                className='badge badge-outline text-xs lg:text-primary mobile:text-base-100 mobile:badge-sm'
                key={index}
              >
                {tool}
              </div>
            ))}
          </div>
          <div className='inline-flex gap-4 mt-5 pl-1'>
            <a
              href={githubURL}
              target='_blank'
              rel='noreferrer'
              className='text-3xl hover:text-primary mobile:text-base-100'
            >
              <FiGithub />
            </a>
            <a
              href={liveDemoURL}
              target='_blank'
              rel='noreferrer'
              className='text-3xl hover:text-primary mobile:text-base-100'
            >
              <MdOutlineOpenInNew />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
