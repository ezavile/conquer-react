import React from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

import john from './images/image-john.jpg';
import patternBg from './images/pattern-bg.svg';
import quotes from './images/pattern-quotes.svg';

function App() {
  return (
    <div>
      <h1 className="sr-only">Coding bootcamp testimonials</h1>
      <article className="p-6 flex flex-col items-center lg:flex-row-reverse lg:max-w-7xl lg:m-auto lg:relative lg:h-screen">
        <div
          className="relative bg-center bg-contain bg-no-repeat w-72 h-72 mb-6 lg:m-0 lg:w-88 lg:h-84"
          style={{
            backgroundImage: `url(${patternBg})`,
          }}
        >
          <div
            className="absolute bg-center bg-cover rounded-md top-0 bottom-0 left-0 right-0 m-8 lg:m-16 lg:w-80 lg:h-80"
            style={{ backgroundImage: `url(${john})` }}
          />
          <div className="flex justify-center absolute mb-3 bottom-0 left-0 right-0 lg:right-auto lg:ml-32 lg:mb-5">
            <div className="flex justify-around bg-white shadow-md rounded-full">
              <button
                type="button"
                className="p-2 rounded-l-full focus:outline-none focus:shadow-outline lg:text-5xl"
                aria-label="previous"
              >
                <GrFormPrevious size="0.8em" />
              </button>
              <button
                type="button"
                className="p-2 rounded-r-full focus:outline-none focus:shadow-outline lg:text-5xl"
                aria-label="next"
              >
                <GrFormNext size="0.8em" />
              </button>
            </div>
          </div>
        </div>
        <div className="relative pt-6 text-center max-w-md lg:text-left lg:max-w-2xl lg:absolute lg:left-0 lg:p-0 lg:ml-6">
          <span
            className="absolute top-0 left-0 right-0 bg-no-repeat bg-center bg-contain h-12 lg:h-24 lg:w-24 lg:ml-24 lg:-mt-12 lg:right-auto"
            style={{ backgroundImage: `url(${quotes})` }}
          />
          <p className="text-dark-blue font-light text-lg mb-5 lg:mb-8 z-10 lg:text-4xl">
            “ I’ve been interested in coding for a while but never taken the
            jump, until now. I couldn’t recommend this course enough. I’m now in
            the job of my dreams and so excited about the future. ”
          </p>
          <div className="text-base lg:text-xl">
            <strong className="font-bold lg:mr-3">Tanya Sinclair</strong>
            <span className="block text-grayish-blue lg:inline-block">
              UX Engineer
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}

export default App;
