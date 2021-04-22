import { Meta } from '@storybook/react';
import { FC } from 'react';
import { colors } from './colors';
import { ColorName } from './Tokens';

const Color: FC<{ colorName: ColorName }> = ({ colorName }) => (
  <div>
    <div className={`h-24 rounded-2xl shadow-md bg-${colorName} mb-6`} />
    <span className="font-bold mb-4 block">{colorName}</span>
    {Object.keys(colors[colorName]).map((key) => (
      <div key={key} className="font-bold flex uppercase">
        <span className="mr-4 text-cool-gray">{key}</span>
        <span>{colors[colorName][key as 'hex' | 'rgb' | 'hsl']}</span>
      </div>
    ))}
  </div>
);

export const Colors = () => (
  <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-3 lg:grid-cols-4">
    {Object.keys(colors).map((color) => (
      <Color key={color} colorName={color as ColorName} />
    ))}
  </div>
);

export default {
  title: 'Tokens',
} as Meta;
