import { useState } from 'react';
import { ChromePicker } from 'react-color';

const ColorCard = () => {
  const [color, setColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#000000');
  const [showColor, setShowColor] = useState(false);
  const [showBgColor, setShowBgColor] = useState(false);

  const textPickerHandler = () => {
    setShowColor(!showColor);
  };

  const bgPickerHandler = () => {
    setShowBgColor(!showBgColor);
  };

  return (
    <div className='flex justify-center items-center pt-24 '>
      <div className='flex flex-col gap-4 w-[550px] min-h-[420px] p-5 bg-white border rounded'>
        <div className='flex justify-between gap-2'>
          <div className='relative'>
            <label className='text-[14px]'>Text color</label>

            <input
              type='text'
              placeholder={color.hex}
              className='w-full h-10 rounded-lg p-1 border  border-gray-300'
            />
            <span
              onClick={textPickerHandler}
              id='text-color'
              style={{ background: color.hex }}
              className='w-9 h-9 rounded-md absolute right-1 mt-[2.5px] bg-black cursor-pointer'
            />
            {showColor && (
              <ChromePicker
              className='absolute'
                disableAlpha
                color={color}
                onChange={(updatedColor) => setColor(updatedColor)}
              />
            )}
          </div>
          <div className='relative'>
            <label className='text-[14px]'>Background color</label>
            <input
              placeholder={bgColor.hex}
              type='text'
              className='pl-2 w-full h-10 rounded-lg p-1 border  border-gray-300'
            />
            <span
              onClick={bgPickerHandler}
              style={{ backgroundColor: bgColor.hex }}
              className='w-9 h-9 bg-black rounded-md absolute right-1 mt-[2.5px] cursor-pointer'
            />
            {showBgColor && (
              <ChromePicker
                className='absolute'
                disableAlpha
                color={bgColor}
                onChange={(updatedColor) => setBgColor(updatedColor)}
              />
            )}
          </div>
        </div>
        <div>
          <h3 className='text-[14px]'>Contrast</h3>
          <img src='/rating.png' className='rounded-lg mt-2' />
          <p className='text-[14px] text-gray-600 mt-2'>
            Good contrast for small text (below 18pt) and great contrast for
            large text (above 18pt) or bold above 14pt.
            <a className='text-blue-600 hover:underline' href='#'>
              Click to enhance
            </a>
          </p>
        </div>
      </div>
      <div
        style={{ background: bgColor.hex }}
        className=' flex justify-center items-center text-center w-[550px] min-h-[420px] bg-[#ACC8E5]  rounded'
      >
        <div className='max-w-[430px]'>
          <h1
            style={{ color: color.hex }}
            className='text-[36px] text-gray-800'
          >
            Quote n. 18
          </h1>
          <p style={{ color: color.hex }} className='text-gray-700 mt-6 mb-4'>
            Before I got married I had six theories about bringing up children;
            now I have six children and no theories.
          </p>
          <h2
            style={{ color: color.hex }}
            className='text-gray-950 font-sans/bold'
          >
            John Wilmot
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ColorCard;
