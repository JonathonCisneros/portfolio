import { Link } from 'react-scroll';

function Header() {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-content'>
        <div className='max-w-4xl'>
          <p className='text-lg md:text-2xl text-primary font-light'>
            Hello there! <span className='animate-wiggle'>👋🏽</span>
          </p>
          <h1 className='text-4xl md:text-5xl font-serif text-neutral'>
            I am Jonathon Cisneros,
          </h1>
          <h2 className='text-lg md:text-3xl font-light text-gray-500 inline-flex '>
            a husband, father-to-be and front end developer.
          </h2>
          <br />
          <Link
            to='projects'
            spy={true}
            smooth={true}
            offset={-50}
            duration={750}
            className='btn btn-primary text-base-100 mt-5'
          >
            Check out my projects!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
