import React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import { Share } from './share';

describe('<Share />', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<Share />);
  });

  it('renders an <li /> for each social network', () => {
    const li = rendered.container.querySelectorAll('li');

    expect(li).toHaveLength(3);
  });

  it('renders share icon as "#6E8098" color', () => {
    const share = rendered.container.querySelector('svg');

    expect(share).toHaveAttribute('color', '#6E8098');
  });

  it('renders icons wrapper as opacity-0', () => {
    const icons = rendered.container.querySelector('.opacity-0');

    expect(icons).not.toBeNull();
  });

  describe('on click share icon', () => {
    beforeEach(() => {
      const button = rendered.container.querySelector('button');

      fireEvent.click(button as Element);
    });

    it('renders share icon as "#FFF" color', () => {
      const share = rendered.container.querySelector('svg');

      expect(share).toHaveAttribute('color', '#FFF');
    });

    it('renders icons wrapper as opacity-100', () => {
      const icons = rendered.container.querySelector('.opacity-100');

      expect(icons).not.toBeNull();
    });
  });
});
