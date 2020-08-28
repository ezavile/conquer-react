import React from 'react';

import { render, RenderResult } from '@testing-library/react';
import { Image } from './image';

import { AppProviderMock } from '__mocks__/app-context-mock';
import { initialState } from 'app-context';

describe('<Image />', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<Image />, {
      wrapper: AppProviderMock({}),
    });
  });

  it('sets user image as background-image', () => {
    const wrapper = rendered.container.querySelector('.absolute');

    expect(wrapper).toHaveStyle(`background-image: url(${initialState.image})`);
  });
});
