import { ChromePicker } from 'react-color';
import ReactStars from 'react-rating-stars-component';

const ColorPickerCard = ({
  textPickerHandler,
  bgPickerHandler,
  color,
  bgColor,
  showColor,
  showBgColor,
  setColor,
  setBgColor,
  contrastRatio,
}) => {
  return (
    <div>
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
              style={{ background: color.hex }}
              className='bg-[#222222] w-9 h-9 border rounded-md absolute right-1 mt-[2.5px]  cursor-pointer'
            />
            {showColor && (
              <ChromePicker
                className='absolute mt-1'
                disableAlpha
                color={color}
                onChange={(updatedColor) => {
                  setColor(updatedColor);
                }}
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
              className='w-9 h-9 bg-[#ACC8E5] rounded-md absolute right-1 mt-[2.5px] cursor-pointer'
            />
            {showBgColor && (
              <ChromePicker
                className='mt-1 absolute '
                disableAlpha
                color={bgColor}
                onChange={(updatedColor) => setBgColor(updatedColor)}
              />
            )}
          </div>
        </div>
        <div>
          <h3 className='text-[14px]'>Contrast</h3>
          <div className='flex flex-col gap-[1px] rounded-lg'>
            <div className=' flex justify-between items-center p-8 rounded-t-lg bg-[#D2FBD0]'>
              <div>
                <h1 className='text-5xl text-[#0D5F07] font-extrabold'>
                  {contrastRatio()}
                </h1>
              </div>
              <div>
                <h1>Good</h1>
                <ReactStars
                  count={5}
                  size={26}
                  value={4}
                  edit={false}
                  activeColor='#0D5F07'
                />
              </div>
            </div>
            <div className='flex justify-between gap-[1px] text-[#0D5F07]'>
              <div className='flex justify-between items-center bg-[#D2FBD0] w-full px-4 py-2 rounded-bl-lg'>
                <div>
                  <h2>Small text</h2>
                </div>
                <div>
                  <ReactStars
                    count={3}
                    size={20}
                    value={3}
                    edit={false}
                    activeColor='#0D5F07'
                  />
                </div>
              </div>
              <div className='flex justify-between items-center bg-[#D2FBD0] w-full px-4 py-2 rounded-br-lg'>
                <div>
                  <h2>Large text</h2>
                </div>
                <div>
                  <ReactStars
                    count={3}
                    size={20}
                    value={0}
                    edit={false}
                    activeColor='#0D5F07'
                  />
                </div>
              </div>
            </div>
          </div>
          <p className='text-[14px] text-gray-600 mt-2'>
            Good contrast for small text (below 18pt) and great contrast for
            large text (above 18pt) or bold above 14pt.
            <a className='text-blue-600 hover:underline' href='#'>
              Click to enhance
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorPickerCard;
