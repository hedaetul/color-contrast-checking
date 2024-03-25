import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaSnapchat, FaWhatsapp } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import { SiInstagram } from 'react-icons/si';

const Footer = () => {
  return (
    <div className='w-screen bg-gray-100'>
      <div className='mx-12 my-12 footer-container grid grid-cols-4 gap-10 tracking-tighter'>
        <div className=''>
          <h1>Tools</h1>
          <a href='#'>Generate your palettes</a>
          <a href='#'>Explore popular palettes</a>
          <a href='#'>Extract palette from image</a>
          <a href='#'>Contrast checker</a>
          <a href='#'>Preview palettes on designs</a>
          <a href='#'>Recolor your own design</a>
          <a href='#'>Color picker</a>
          <a href='#'>Browse free fonts</a>
        </div>
        <div>
          <h1>More</h1>
          <a href='#'>List of colors</a>
          <a href='#'>Browse gradients</a>
          <a href='#'>Create a gradient</a>
          <a href='#'>Make a gradient palette</a>
          <a href='#'>Create a collage</a>
          <a href='#'>Font GEnerator</a>
        </div>
        <div>
          <div>
            <h1>Jobs</h1>
            <a href='#'>Find your next job</a>
            <a href='#'>Post a job</a>
          </div>
          <div>
            <h1>Apps</h1>
            <a href='#'>iOS App</a>
            <a href='#'>Android App</a>
            <a href='#'>Figma Plugin</a>
            <a href='#'>Adobe Extension</a>
            <a href='#'>Chrome Extension</a>
            <a href='#'>Instagram Page</a>
          </div>
        </div>
        <div>
          <h1>Company</h1>
          <a href='#'>Pricing</a>
          <a href='#'>License</a>
          <a href='#'>Terms of service</a>
          <a href='#'>Cookie and policy</a>
          <a href='#'>Manage cookie</a>
          <a href='#'>Help center</a>
          <a href='#'>Advertise</a>
          <a href='#'>Affiliate</a>
          <a href='#'>Contact</a>
        </div>
      </div>
      <div className='w-11/12 h-[1px] my-6 bg-gray-300 m-auto' />
      <div className='flex items-center justify-between mx-4 py-10'>
        <div>
          <p className='text-gray-500'>
            @ Coolors by{' '}
            <a className='hover:text-blue-600 text-gray-950' href='#'>
              Fabrizio Bianchi.
            </a>{' '}
            From a creative to all the others.
          </p>
        </div>
        <div className='flex gap-2'>
          <AiFillTwitterCircle className='text-2xl cursor-pointer' />
          <FaFacebook className='text-2xl cursor-pointer' />
          <SiInstagram className='text-2xl cursor-pointer' />
          <FaWhatsapp className='text-2xl cursor-pointer' />
          <FaSnapchat className='text-2xl cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
