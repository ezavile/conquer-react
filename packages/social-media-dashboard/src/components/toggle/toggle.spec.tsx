import React from 'react';

import { RenderResult, fireEvent } from '@testing-library/react';
import { Toggle } from './toggle';

import { renderAppProvider } from '__mocks__/app-context-mock';

describe('<Toggle />', () => {
  let rendered: RenderResult;
  let setTheme: jest.Mock;
  let checkBox: HTMLInputElement;

  beforeEach(() => {
    setTheme = jest.fn();

    rendered = renderAppProvider({
      children: <Toggle />,
      dispatch: { setTheme },
    });

    checkBox = rendered.container.querySelector('input') as HTMLInputElement;
  });

  it('clicks on checkbox input', () => {
    fireEvent.click(checkBox as Element);
    expect(setTheme).toHaveBeenCalledWith('light');

    fireEvent.click(checkBox as Element);
    expect(setTheme).toHaveBeenCalledWith('dark');
  });
});
