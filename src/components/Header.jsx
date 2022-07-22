import { Link } from 'react-scroll';

function Header() {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-content grid'>
        <div className='max-w-4xl space-y-4'>
          <p className='text-xl md:text-2xl text-primary font-light'>
            Hello there! <span className='animate-wiggle'>👋🏽</span>
          </p>
          <h1 className='text-5xl md:text-5xl font-serif text-neutral'>
            I am Jonathon Cisneros,
          </h1>
          <h2 className='text-xl md:text-3xl font-light text-gray-500 inline-flex '>
            a husband, father-to-be and front-end developer.
          </h2>
        </div>
        <div>
          <Link
            to='projects'
            spy={true}
            smooth={true}
            offset={-50}
            duration={750}
            className='btn btn-primary btn-outline mt-4'
          >
            Check out my work!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
