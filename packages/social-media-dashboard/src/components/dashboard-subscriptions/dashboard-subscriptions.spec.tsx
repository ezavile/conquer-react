import React from 'react';

import { RenderResult } from '@testing-library/react';

import { renderAppProvider } from '__mocks__/app-context-mock';
import { DashboardSubscriptions } from './dashboard-subscriptions';
import { initialState } from 'models';

describe('<DashboardSubscriptions />', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = renderAppProvider({
      children: <DashboardSubscriptions />,
    });
  });

  it('renders a section heading', () => {
    const title = rendered.container.querySelector('h2');

    expect(title).toHaveTextContent('Overview - Today');
  });

  it('renders one article for each social media metric', () => {
    const articles = rendered.container.querySelectorAll('article');
    const metrics = initialState.socialMedia
      .map((s) => s.metrics)
      .reduce((p, n) => p.concat(n), []);

    expect(articles).toHaveLength(metrics.length);
  });
});
