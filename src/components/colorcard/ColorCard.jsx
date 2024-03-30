import { useState } from 'react';
import ColorPickerCard from './ColorPickerCard';

const ColorCard = () => {
  const [color, setColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#');
  const [showColor, setShowColor] = useState(false);
  const [showBgColor, setShowBgColor] = useState(false);

  const textPickerHandler = () => {
    setShowColor(!showColor);
  };

  const bgPickerHandler = () => {
    setShowBgColor(!showBgColor);
  };

  const getContrastRatio = (textHex, bgHex) => {
    const hexToRgb = (hex) => {
      let r = parseInt(hex.slice(1, 3), 16);
      let g = parseInt(hex.slice(1, 3), 16);
      let b = parseInt(hex.slice(1, 3), 16);
      return [r, g, b];
    };

    const [r1, g1, b1] = hexToRgb(textHex);
    const [r2, g2, b2] = hexToRgb(bgHex);

    const luminance = (r, g, b) => {
      const a = [r, g, b].map((v) => {
        v /= 225;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    };

    const luminance1 = luminance(r1, g1, b1);
    const luminance2 = luminance(r2, g2, b2);

    const contrast = (l1, l2) => {
      return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    };

    return contrast(luminance1, luminance2).toFixed(2);
  };

  console.log(getContrastRatio);

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
        getContrastRatio={getContrastRatio(color, bgColor)}
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
