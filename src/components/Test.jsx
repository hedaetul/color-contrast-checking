import React, { useState } from 'react';

function ColorContrastChecker() {
  const [color1, setColor1] = useState('#000000');
  const [color2, setColor2] = useState('#FFFFFF');

  const getContrastRatio = (hex1, hex2) => {
    // Convert hex colors to RGB
    const hexToRgb = (hex) => {
      let r = parseInt(hex.slice(1, 3), 16);
      let g = parseInt(hex.slice(3, 5), 16);
      let b = parseInt(hex.slice(5, 7), 16);
      return [r, g, b];
    };

    const [r1, g1, b1] = hexToRgb(hex1);
    const [r2, g2, b2] = hexToRgb(hex2);

    // Calculate luminance
    const luminance = (r, g, b) => {
      const a = [r, g, b].map((v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    };

    const luminance1 = luminance(r1, g1, b1);
    const luminance2 = luminance(r2, g2, b2);

    // Calculate contrast ratio
    const contrast = (l1, l2) => {
      return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    };

    return contrast(luminance1, luminance2).toFixed(2);
  };

  return (
    <div>
      <h1>Color Contrast Checker</h1>
      <div>
        <label>Color 1:</label>
        <input
          type='color'
          value={color1}
          onChange={(e) => setColor1(e.target.value)}
        />
      </div>
      <div>
        <label>Color 2:</label>
        <input
          type='color'
          value={color2}
          onChange={(e) => setColor2(e.target.value)}
        />
      </div>
      <div>
        <p>Contrast Ratio: {getContrastRatio(color1, color2)}</p>
      </div>
    </div>
  );
}

export default ColorContrastChecker;
