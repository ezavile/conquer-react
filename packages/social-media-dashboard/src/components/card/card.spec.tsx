import { RenderResult } from '@testing-library/react';

import { renderWithTheme } from '__mocks__/app-context-mock';
import { themes } from 'models';
import { Card } from './card';

describe('<Card />', () => {
  let rendered: RenderResult;

  describe('dark theme', () => {
    beforeEach(() => {
      rendered = renderWithTheme({ theme: 'dark', children: <Card /> });
    });

    it('sets article background-color', () => {
      expect(rendered.container.firstChild).toHaveStyleRule(
        'background-color',
        themes.dark.cardBg
      );
    });
  });

  describe('light theme', () => {
    beforeEach(() => {
      rendered = renderWithTheme({ theme: 'light', children: <Card /> });
    });

    it('sets article background-color', () => {
      expect(rendered.container.firstChild).toHaveStyleRule(
        'background-color',
        themes.light.cardBg
      );
    });
  });
});
