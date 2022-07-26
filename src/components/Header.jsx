import { Link } from 'react-scroll';
import { BsChevronDoubleDown } from 'react-icons/bs';

function Header() {
  return (
    <div className='hero min-h-screen '>
      <div className='hero-content grid relative'>
        <div className='max-w-4xl space-y-4 mobile:space-y-1 mobile:mt-[-5rem]'>
          <p className='text-xl md:text-2xl text-primary font-light'>
            Hello! <span className='animate-wiggle'>👋🏽</span> My name is
          </p>
          <h1 className='text-4xl md:text-5xl font-serif text-neutral'>
            Jonathon Cisneros,
          </h1>
          <h2 className='text-xl md:text-3xl font-light text-gray-500 inline-flex '>
            I am a husband, father-to-be and front-end developer.
          </h2>
        </div>
        <div>
          <Link
            to='projects'
            spy={true}
            smooth={true}
            offset={-100}
            duration={750}
            className='btn btn-primary text-base-100 shadow-lg mt-4 mobile:mt-12'
          >
            Check out my work!
          </Link>
        </div>
        <div className='absolute w-full bottom-[-10rem]'>
          <Link
            to='about'
            spy={true}
            smooth={true}
            offset={-100}
            duration={750}
          >
            <BsChevronDoubleDown className='text-3xl text-primary animate-pulse mx-auto cursor-pointer' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
