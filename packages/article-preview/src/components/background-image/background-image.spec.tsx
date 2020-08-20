import React from 'react';
import { render } from '@testing-library/react';
import { BackgroundImage } from './background-image';

describe('<BackgroundImage />', () => {
  const src = 'some-image.png';

  it('sets given image as background-image', () => {
    const { container } = render(<BackgroundImage src={src} />);

    expect(container.firstChild).toHaveStyle(`background-image: url(${src})`);
  });
});
