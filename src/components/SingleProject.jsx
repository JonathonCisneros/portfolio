import React from 'react';
import { FaGithub, FaRegPaperPlane } from 'react-icons/fa';

function SingleProject({ project }) {
  const { title, description, mainImage, toolsUsed, githubURL, liveDemoURL } =
    project;
  const imgURL = mainImage.asset.url;

  return (
    <div className='m-2'>
      <div className='h-full rounded-xl card image-full'>
        <figure>
          <img src={imgURL} alt={title} />
        </figure>
        <div className='card-body p-4'>
          <a
            href={liveDemoURL ? liveDemoURL : githubURL}
            target='_blank'
            rel='noreferrer'
            className='mb-2 text-3xl font-serif hover:text-primary'
          >
            {title}
          </a>

          <p className='font-light text-justify'>{description}</p>

          <div className='inline-flex gap-3'>
            {toolsUsed?.map((tool, index) => (
              <div className='badge badge-outline' key={index}>
                {tool}
              </div>
            ))}
          </div>
          <div className='inline-flex gap-4 mt-5 pl-1'>
            <a
              href={githubURL}
              target='_blank'
              rel='noreferrer'
              className='text-3xl hover:text-primary'
            >
              <FaGithub />
            </a>
            <a
              href={liveDemoURL}
              target='_blank'
              rel='noreferrer'
              className='text-3xl hover:text-primary'
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
