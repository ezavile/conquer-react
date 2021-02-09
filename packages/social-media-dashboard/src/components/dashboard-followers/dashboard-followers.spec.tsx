import { RenderResult } from '@testing-library/react';

import { renderAppProvider } from '__mocks__/app-context-mock';
import { initialState } from 'models';
import { DashboardFollowers } from './dashboard-followers';

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
