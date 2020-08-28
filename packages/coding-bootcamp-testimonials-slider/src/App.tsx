import React from 'react';

import { AppProvider } from 'app-context';
import { Image, Quote } from 'components';

export const App = () => (
  <AppProvider>
    <h1 className="sr-only">Coding bootcamp testimonials</h1>
    <article className="p-6 flex flex-col items-center lg:flex-row-reverse lg:max-w-7xl lg:m-auto lg:relative lg:h-screen">
      <Image />
      <Quote />
    </article>
  </AppProvider>
);
