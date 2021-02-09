import { ReactNode, createContext, useState } from 'react';

import john from './images/image-john.jpg';
import tanya from './images/image-tanya.jpg';

export interface Testimonial {
  image: string;
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    image: tanya,
    quote: `“ If you want to lay the best foundation possible I’d
    recommend taking this course. The depth the instructors go
    into is incredible. I now feel so confident about starting
    up as a professional developer. ”`,
    name: 'Tanya Sinclair',
    role: 'UX Engineer',
  },
  {
    image: john,
    quote: `“ I’ve been interested in coding for a while but never
    taken the jump, until now. I couldn’t recommend this
    course enough. I’m now in the job of my dreams and so
    excited about the future. ”`,
    name: 'John Tarkpor',
    role: 'Junior Front-end Developer',
  },
];

export type AppState = {
  index: number;
} & Testimonial;

export const initialState: AppState = {
  index: 0,
  ...testimonials[0],
};

export type AppDispatch = {
  setTestimonial: (index: number) => void;
};

const AppStateContext = createContext(initialState);
const AppDispatchContext = createContext<AppDispatch>({
  setTestimonial: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentIndex, setTestimonial] = useState(0);

  const checkIndex = () => {
    const max = testimonials.length - 1;
    const min = 0;

    if (currentIndex < min) return max;
    if (currentIndex > max) return min;

    return currentIndex;
  };
  const index = checkIndex();

  const testimonial = testimonials[index];

  return (
    <AppStateContext.Provider value={{ index, ...testimonial }}>
      <AppDispatchContext.Provider value={{ setTestimonial }}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export { AppProvider, AppStateContext, AppDispatchContext };
