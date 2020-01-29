import React from 'react';

import { render } from '@testing-library/react';
import { Wallpaper } from './wallpaper';

describe('wallpaper', () => {
  it('renders', () => {
    const { asFragment } = render(<Wallpaper url="algo" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
