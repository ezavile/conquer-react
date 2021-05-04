import { Meta } from '@storybook/react';
import { FC } from 'react';
import { colors, ColorName, typography } from './Tokens';

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

const TypographyDetail: FC<{ variant: string }> = ({ variant }) => (
  <p className="text-ship-cove mb-4 text-body-small">
    <span>{variant}</span>
    {Object.keys(typography[variant]).map((key) => (
      <span key={key}>
        <span className="ml-1 mr-1">{' | '}</span>
        <span>
          {/* @ts-ignore */}
          {typography[variant][key]} {key}
        </span>
      </span>
    ))}
  </p>
);

export const Typography = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="">
        {['h1', 'h2', 'h3', 'h4'].map((variant) => (
          <div key={variant} className="mb-12">
            <TypographyDetail variant={variant} />
            <p className={`text-${variant} font-bold`}>
              Aliquam porttitor mauris sit amet orci Aenean
            </p>
          </div>
        ))}
      </div>
      <div className="">
        {['body', 'body-small'].map((variant) => (
          <div key={variant} className="mb-12">
            <TypographyDetail variant={variant} />
            <p className={`text-${variant}`}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi.
              <br />
              <br />
              Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
              sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
              justo. Suspendisse potenti. Sed egestas, ante et vulputate
              volutpat, eros pede semper est, vitae luctus metus libero eu
              augue. Morbi purus libero, faucibus adipiscing, commodo quis,
              gravida id, est. Sed lectus. Praesent elementum hendrerit tortor.
              Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices
              sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare
              nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed,
              urna.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default {
  title: 'Tokens',
} as Meta;
