import React from 'react';

import { render, RenderResult, fireEvent } from '@testing-library/react';
import { Controls } from './controls';

import { AppProviderMock } from '__mocks__/app-context-mock';

describe('<Controls />', () => {
  let rendered: RenderResult;
  let setTestimonial: jest.Mock;
  let prevButton: HTMLButtonElement;
  let nextButton: HTMLButtonElement;

  beforeEach(() => {
    setTestimonial = jest.fn();

    rendered = render(<Controls />, {
      wrapper: AppProviderMock({ dispatch: { setTestimonial } }),
    });

    prevButton = rendered.container.querySelector(
      'button[aria-label="previous"]'
    ) as HTMLButtonElement;
    nextButton = rendered.container.querySelector(
      'button[aria-label="next"]'
    ) as HTMLButtonElement;
  });

  it('renders two buttons', () => {
    const buttons = rendered.container.querySelectorAll('button');

    expect(buttons).toHaveLength(2);
  });

  it('clicks on prev button', () => {
    fireEvent.click(prevButton as Element);

    expect(setTestimonial).toHaveBeenCalledWith(-1);
  });

  it('clicks on next button', () => {
    fireEvent.click(nextButton as Element);

    expect(setTestimonial).toHaveBeenCalledWith(1);
  });
});
