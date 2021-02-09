import { render, RenderResult } from '@testing-library/react';

import { renderAppProvider } from '__mocks__/app-context-mock';
import { initialState } from 'models';
import { CardSubscriber } from './card-subscriber';

describe('<CardSubscriber />', () => {
  let rendered: RenderResult;
  const [social] = initialState.socialMedia;

  beforeEach(() => {
    rendered = renderAppProvider({
      children: (
        <CardSubscriber general={social.general} metrics={social.metrics} />
      ),
    });
  });

  it('renders one article for each metric', () => {
    const articles = rendered.container.querySelectorAll('article');

    expect(articles).toHaveLength(social.metrics.length);
  });

  it('renders <Icon /> beside of username', () => {
    const svg = rendered.container.querySelector('h3 + svg');
    const Icon = () => <div>{social.general.Icon}</div>;
    const iconRendered = render(<Icon />);
    const svgRendered = iconRendered.container.querySelector('svg');

    expect(svg).toContainHTML(svgRendered?.innerHTML as string);
  });
});
