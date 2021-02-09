import { RenderResult } from '@testing-library/react';

import { renderWithTheme } from '__mocks__/app-context-mock';
import { initialState, themes } from 'models';
import { CardFollower } from './card-follower';

describe('<CardFollower />', () => {
  let rendered: RenderResult;
  const [social] = initialState.socialMedia;
  const Component = () => (
    <CardFollower general={social.general} followers={social.followers} />
  );

  beforeEach(() => {
    rendered = renderWithTheme({
      theme: 'dark',
      children: <Component />,
    });
  });

  it('sets border-top according to social color', () => {
    expect(rendered.container.firstChild).toHaveStyleRule(
      'border-top-color',
      social.general.color
    );
  });

  it('renders <CardTitle /> as center', () => {
    const title = rendered.container.querySelector('article > div');

    expect(title).toHaveStyleRule('justify-content', 'center');
  });

  it('renders username beside of <Icon />', () => {
    const username = rendered.container.querySelector('svg + strong');

    expect(username).toHaveTextContent(social.general.username);
  });

  const getFollowersLabel = () =>
    rendered.container.querySelector('div > span + span') as HTMLElement;

  describe('dark theme', () => {
    beforeEach(() => {
      rendered = renderWithTheme({
        theme: 'dark',
        children: <Component />,
      });
    });

    it('sets followers color', () => {
      expect(getFollowersLabel()).toHaveStyleRule(
        'color',
        themes.dark.subheadingColor
      );
    });
  });
  describe('light theme', () => {
    beforeEach(() => {
      rendered = renderWithTheme({
        theme: 'light',
        children: <Component />,
      });
    });

    it('sets followers color', () => {
      expect(getFollowersLabel()).toHaveStyleRule(
        'color',
        themes.light.subheadingColor
      );
    });
  });
});
