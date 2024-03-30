import { useState } from 'react';
import ColorPickerCard from './ColorPickerCard';

const initialTextColor = {
  rgb: {
    r: 34,
    g: 34,
    b: 34,
  },
};
const initialBgColor = {
  rgb: {
    r: 172,
    g: 200,
    b: 229,
  },
};

const ColorCard = () => {
  const [color, setColor] = useState(initialTextColor);
  const [bgColor, setBgColor] = useState(initialBgColor);
  const [showColor, setShowColor] = useState(false);
  const [showBgColor, setShowBgColor] = useState(false);

  const textPickerHandler = () => {
    setShowColor(!showColor);
  };

  const bgPickerHandler = () => {
    setShowBgColor(!showBgColor);
  };

  const L1 = () => {
    return 0.2126 * color.rgb.r + 0.7152 * color.rgb.g + 0.0722 * color.rgb.b;
  };

  console.log(L1());

  const L2 = () => {
    return parseInt(
      0.2126 * bgColor.rgb.r + 0.7152 * bgColor.rgb.g + 0.0722 * bgColor.rgb.b
    );
  };

  const contrastRatio = () => {
    const ratio = (Math.max(L1(), L2()) + 0.05) / (Math.min(L1(), L2()) + 0.05);

    return ratio.toFixed(2);
  };

  console.log(contrastRatio());

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
        contrastRatio={contrastRatio}
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
          <p style={{ color: color.hex }} className='text-[#222222] mt-6 mb-4'>
            Before I got married I had six theories about bringing up children;
            now I have six children and no theories.
          </p>
          <h2
            style={{ color: color.hex }}
            className='text-[#222222] font-sans/bold'
          >
            John Wilmot
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ColorCard;
