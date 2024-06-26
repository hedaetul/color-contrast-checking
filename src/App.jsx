import React from 'react';
import ColorCard from './components/colorcard/ColorCard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='text-center mt-24'>
        <h1 className='text-[44px] font-[900]'>Color Contrast Checker</h1>
        <h2 className='text-[16px] text-slate-500 font-bold'>
          Calculate the contrast ratio of text and background colors.
        </h2>
      </div>

      <ColorCard />

      <div className='flex justify-center items-center mt-12 font-mono'>
        <div>
          <h1 className='font-sans font-[700] text-[24px]'>
            How does it work?
          </h1>
          <p className='text-[14px]'>
            This tool follows the Web Content Accessibility Guidelines (WCAG),
            which are a series of recommendations for making the web more
            accessible.
          </p>

          <p className='text-[14px]'>
            Regarding colors, the standard defines two levels of contrast ratio:
            AA (minimum contrast) and AAA (enhanced contrast).
          </p>

          <p className='text-[14px]'>
            The level AA requires a contrast ratio of at least 4.5:1 for normal
            text and 3:1 for large text (at least 18pt) or bold text.
          </p>

          <p className='text-[14px]'>
            The level AAA requires a contrast ratio of at least 7:1 for normal
            text and 4.5:1 for large text or bold text.
          </p>
          <div className='mt-5'>
            <a href='#' className='text-blue-600'>
              Learn more
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
