import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import SingleProject from './SingleProject';

function Projects() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] {
      title,
      description,
      mainImage {
        asset -> {
          _id,
          url
        }
      },
      toolsUsed,
      githubURL,
      liveDemoURL
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <div id='projects' className='container mx-auto min-h-screen'>
      <div className='card mx-4 shadow-lg md:p-4'>
        <h2 className='card-title font-serif text-3xl px-4 divider'>
          Projects 🛠
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 p-4'>
          {projectData?.map((project, index) => (
            <SingleProject key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
