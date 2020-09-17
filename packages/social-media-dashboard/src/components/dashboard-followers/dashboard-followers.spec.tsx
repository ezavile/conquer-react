import React from 'react';

import { RenderResult } from '@testing-library/react';

import { renderAppProvider } from '__mocks__/app-context-mock';
import { DashboardFollowers } from './dashboard-followers';
import { initialState } from 'models';

describe('<DashboardFollowers />', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = renderAppProvider({
      children: <DashboardFollowers />,
    });
  });

  it('renders one article for each social media', () => {
    const articles = rendered.container.querySelectorAll('article');

    expect(articles).toHaveLength(initialState.socialMedia.length);
  });
});
