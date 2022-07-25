import React from 'react';
import { FaGithub, FaRegPaperPlane } from 'react-icons/fa';

function SingleProject({ project, index }) {
  const { title, description, mainImage, toolsUsed, githubURL, liveDemoURL } =
    project;
  const imgURL = mainImage.asset.url;

  const reverse = index % 2 === 0 && 'lg:flex-row-reverse'; // determine if index is odd or even to reverse flex row direction

  return (
    <div className='lg:mx-2 my-5'>
      <div
        className={`card lg:card-side ${reverse} mobile:image-full mobile:min-h-[80vw]`}
      >
        <figure>
          <img src={imgURL} alt={title} className='w-[25rem] mx-2 rounded-lg' />
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
                className='badge badge-outline lg:text-primary mobile:text-base-100 mobile:badge-sm'
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
              <FaGithub />
            </a>
            <a
              href={liveDemoURL}
              target='_blank'
              rel='noreferrer'
              className='text-3xl hover:text-primary mobile:text-base-100'
            >
              <FaRegPaperPlane />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
