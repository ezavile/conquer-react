import { render, RenderResult } from '@testing-library/react';
import { Card, CardProps } from './card';

describe('<Card />', () => {
  let rendered: RenderResult;

  const props: CardProps = {
    image: 'image.png',
    title:
      'Shift the overall look and feel by adding these wonderful touches to furniture in your home',
    description:
      'Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.',
    author: {
      name: 'Michelle Appleton',
      avatar: 'avatar.png',
      publishedAt: '28 Jun 2020',
    },
  };

  beforeEach(() => {
    rendered = render(<Card {...props} />);
  });

  it('takes a snapshot', () => {
    expect(rendered.container).toMatchSnapshot();
  });
});
