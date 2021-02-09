import { RenderResult } from '@testing-library/react';

import { renderAppProvider } from '__mocks__/app-context-mock';
import { CardStats } from './card-stats';

describe('<CardStats />', () => {
  let rendered: RenderResult;

  describe('up and today label', () => {
    beforeEach(() => {
      rendered = renderAppProvider({
        children: <CardStats status="up" value="100" label="today" />,
      });
    });

    it('sets green color', () => {
      expect(rendered.container.firstChild).toHaveStyleRule('color', '#1eb589');
    });

    it('sets value beside of "today" label', () => {
      expect(rendered.container.firstChild).toContainHTML('100 today');
    });
  });

  describe('down and % label', () => {
    beforeEach(() => {
      rendered = renderAppProvider({
        children: <CardStats status="down" value="100" label="%" />,
      });
    });

    it('sets red color', () => {
      expect(rendered.container.firstChild).toHaveStyleRule('color', '#dc414c');
    });

    it('sets value beside of "%" label', () => {
      expect(rendered.container.firstChild).toContainHTML('100 %');
    });
  });
});
