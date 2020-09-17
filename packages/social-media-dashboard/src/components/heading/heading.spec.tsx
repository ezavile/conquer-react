import React from 'react';

import { RenderResult } from '@testing-library/react';

import { renderAppProvider, renderWithTheme } from '__mocks__/app-context-mock';
import { Heading } from './heading';
import { themes } from 'models';

describe('<Heading />', () => {
  let rendered: RenderResult;
  const titleText = 'Some Title';

  it('renders h1 as heading', () => {
    rendered = renderAppProvider({
      children: <Heading>{titleText}</Heading>,
    });

    const h1 = rendered.container.querySelector('h1');

    expect(h1).toHaveTextContent(titleText);
  });

  describe('dark theme', () => {
    beforeEach(() => {
      rendered = renderWithTheme({
        theme: 'dark',
        children: <Heading />,
      });
    });

    it('sets color', () => {
      expect(rendered.container.firstChild).toHaveStyleRule(
        'color',
        themes.dark.headingColor
      );
    });
  });

  describe('light theme', () => {
    beforeEach(() => {
      rendered = renderWithTheme({
        theme: 'light',
        children: <Heading />,
      });
    });

    it('sets color', () => {
      expect(rendered.container.firstChild).toHaveStyleRule(
        'color',
        themes.light.headingColor
      );
    });
  });
});
