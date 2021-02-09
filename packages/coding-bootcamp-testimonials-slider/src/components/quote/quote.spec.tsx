import { render, RenderResult } from '@testing-library/react';

import { AppProviderMock } from '__mocks__/app-context-mock';
import { initialState } from 'app-context';
import { Quote } from './quote';

describe('<Quote />', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<Quote />, {
      wrapper: AppProviderMock({}),
    });
  });

  it('sets user quote as <p /> element', () => {
    const quote = rendered.container.querySelector('p');

    expect(quote?.textContent).toEqual(initialState.quote);
  });

  it('sets user name as <strong /> element', () => {
    const name = rendered.container.querySelector('strong');

    expect(name?.textContent).toEqual(initialState.name);
  });

  it('sets user role as <span /> element', () => {
    const role = rendered.container.querySelector('strong + span');

    expect(role?.textContent).toEqual(initialState.role);
  });
});
