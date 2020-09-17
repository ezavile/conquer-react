import React from 'react';

import { RenderResult } from '@testing-library/react';

import { renderAppProvider } from '__mocks__/app-context-mock';
import { CardTitle } from './card-title';

describe('<CardTitle />', () => {
  let rendered: RenderResult;

  it('sets as center items', () => {
    rendered = renderAppProvider({
      children: <CardTitle center />,
    });

    expect(rendered.container.firstChild).toHaveStyleRule(
      'justify-content',
      'center'
    );
  });

  it('sets as space-between items', () => {
    rendered = renderAppProvider({
      children: <CardTitle />,
    });

    expect(rendered.container.firstChild).toHaveStyleRule(
      'justify-content',
      'space-between'
    );
  });
});
