import { MdWavingHand } from 'react-icons/md';

function Header() {
  return (
    <div className='flex flex-col min-h-screen pt-20'>
      <div className='hero-content'>
        <div className='max-w-4xl'>
          <p className='text-lg text-neutral font-light'>
            Hello there! <MdWavingHand className='inline animate-wiggle' />
          </p>
          <h1 className='text-4xl md:text-5xl font-serif text-neutral'>
            I am Jonathon Cisneros,
          </h1>
          <h2 className='text-lg md:text-3xl font-serif text-gray-500 inline-flex '>
            a husband, father-to-be and front end developer.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
