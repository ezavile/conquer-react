import React from 'react';

import { RenderResult } from '@testing-library/react';

import { renderWithTheme } from '__mocks__/app-context-mock';
import { DashboardHeader } from './dashboard-header';
import { initialState, themes } from 'models';

describe('<DashboardHeader />', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = renderWithTheme({
      theme: 'dark',
      children: <DashboardHeader />,
    });
  });

  it('renders total followers', () => {
    const subheading = rendered.container.querySelector('strong');

    expect(subheading).toContainHTML(initialState.totalFollowers);
  });

  const getTitleWrapper = () =>
    rendered.container.querySelector('header > div') as HTMLElement;

  describe('dark theme', () => {
    beforeEach(() => {
      rendered = renderWithTheme({
        theme: 'dark',
        children: <DashboardHeader />,
      });
    });

    it('sets border-bottom-color', () => {
      expect(getTitleWrapper()).toHaveStyleRule(
        'border-bottom-color',
        themes.dark.hrBg
      );
    });
  });
  describe('light theme', () => {
    beforeEach(() => {
      rendered = renderWithTheme({
        theme: 'light',
        children: <DashboardHeader />,
      });
    });

    it('sets border-bottom-color', () => {
      expect(getTitleWrapper()).toHaveStyleRule(
        'border-bottom-color',
        themes.light.hrBg
      );
    });
  });
});
