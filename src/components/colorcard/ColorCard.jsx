import { useState } from 'react';
import ColorPickerCard from './ColorPickerCard';

const initialTextColor = {
  r: 0,
  g: 0,
  b: 0,
};
const initialBgColor = {
  r: 255,
  g: 255,
  b: 255,
};

const ColorCard = () => {
  const [color, setColor] = useState('#000');
  const [bgColor, setBgColor] = useState(initialBgColor);
  const [showColor, setShowColor] = useState(false);
  const [showBgColor, setShowBgColor] = useState(false);

  


  const textPickerHandler = () => {
    setShowColor(!showColor);
  };

  const bgPickerHandler = () => {
    setShowBgColor(!showBgColor);
  };

  // const L1 = () => {
  //   return 0.2126 * color.rgb.r + 0.7152 * color.rgb.g + 0.0722 * color.rgb.b;
  // };

  // const L2 = () => {
  //   return (
  //     0.2126 * bgColor.rgb.r + 0.7152 * bgColor.rgb.g + 0.0722 * bgColor.rgb.b
  //   );
  // };

  // const contrastRatio = () => {
  //   const ratio = (L1() + 0.05) / (L2() + 0.05);

  //   return ratio.toFixed(2);
  // };

  // console.log(contrastRatio());

  return (
    <div className='flex justify-center items-center pt-24 '>
      <ColorPickerCard
        bgColor={bgColor}
        bgPickerHandler={bgPickerHandler}
        color={color}
        showBgColor={showBgColor}
        showColor={showColor}
        textPickerHandler={textPickerHandler}
        setColor={setColor}
        setBgColor={setBgColor}
      />
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
