import { RenderResult } from '@testing-library/react';

import { renderAppProvider, renderWithTheme } from '__mocks__/app-context-mock';
import { themes } from 'models';
import { Subheading } from './subheading';

describe('<Subheading />', () => {
  let rendered: RenderResult;
  const titleText = 'Some Title';

  it('renders subheading as strong', () => {
    rendered = renderAppProvider({
      children: <Subheading>{titleText}</Subheading>,
    });

    const strong = rendered.container.querySelector('strong');

    expect(strong).toHaveTextContent(titleText);
  });

  describe('dark theme', () => {
    beforeEach(() => {
      rendered = renderWithTheme({
        theme: 'dark',
        children: <Subheading />,
      });
    });

    it('sets color', () => {
      expect(rendered.container.firstChild).toHaveStyleRule(
        'color',
        themes.dark.subheadingColor
      );
    });
  });

  describe('light theme', () => {
    beforeEach(() => {
      rendered = renderWithTheme({
        theme: 'light',
        children: <Subheading />,
      });
    });

    it('sets color', () => {
      expect(rendered.container.firstChild).toHaveStyleRule(
        'color',
        themes.light.subheadingColor
      );
    });
  });
});
