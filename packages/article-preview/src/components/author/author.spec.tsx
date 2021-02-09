import { render, RenderResult } from '@testing-library/react';
import { Author, AuthorProps } from './author';

describe('<Author />', () => {
  let rendered: RenderResult;

  const author: AuthorProps = {
    avatar: 'some-avatar.png',
    name: 'Edgar Zavala',
    publishedAt: '27 June 2020',
  };

  beforeEach(() => {
    rendered = render(<Author {...author} />);
  });

  it('sets given avatar as an image', () => {
    const img = rendered.container.querySelector('img');

    expect(img).toHaveAttribute('src', author.avatar);
  });

  it('sets given name as strong tag', () => {
    const name = rendered.container.querySelector('strong');

    expect(name).toHaveTextContent(author.name);
  });

  it('sets given published date as time tag', () => {
    const publishedAt = rendered.container.querySelector('time');

    expect(publishedAt).toHaveTextContent(author.publishedAt);
  });

  it('formats published date for dateTime attr', () => {
    const publishedAt = rendered.container.querySelector('time');

    expect(publishedAt?.getAttribute('dateTime')).toEqual('2020-27-6');
  });
});
