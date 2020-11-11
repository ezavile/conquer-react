import React from 'react';

import { RenderResult } from '@testing-library/react';

import { renderAppProvider, renderWithTheme } from '__mocks__/app-context-mock';
import { themes } from 'models';
import { SectionHeading } from './section-heading';

describe('<SectionHeading />', () => {
  let rendered: RenderResult;
  const titleText = 'Some Title';

  it('renders h2 as section-heading', () => {
    rendered = renderAppProvider({
      children: <SectionHeading>{titleText}</SectionHeading>,
    });

    const h2 = rendered.container.querySelector('h2');

    expect(h2).toHaveTextContent(titleText);
  });

  describe('dark theme', () => {
    beforeEach(() => {
      rendered = renderWithTheme({
        theme: 'dark',
        children: <SectionHeading />,
      });
    });

    it('sets color', () => {
      expect(rendered.container.firstChild).toHaveStyleRule(
        'color',
        themes.dark.sectionHeadingColor
      );
    });
  });

  describe('light theme', () => {
    beforeEach(() => {
      rendered = renderWithTheme({
        theme: 'light',
        children: <SectionHeading />,
      });
    });

    it('sets color', () => {
      expect(rendered.container.firstChild).toHaveStyleRule(
        'color',
        themes.light.sectionHeadingColor
      );
    });
  });
});
