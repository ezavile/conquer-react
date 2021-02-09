import { useRef, useContext } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import './quote.css';

import quotes from 'images/pattern-quotes.svg';
import { AppStateContext } from 'app-context';

export const Quote = () => {
  const sliderTextRef = useRef(null);
  const { quote, role, name, index } = useContext(AppStateContext);

  return (
    <div className="relative pt-6 text-center max-w-md lg:text-left lg:max-w-2xl lg:absolute lg:left-0 lg:p-0 lg:ml-6">
      <h2 className="sr-only">
        {name} - {role}
      </h2>
      <span
        className="absolute top-0 left-0 right-0 bg-no-repeat bg-center bg-contain h-12 lg:h-24 lg:w-24 lg:ml-24 lg:-mt-12 lg:right-auto"
        style={{ backgroundImage: `url(${quotes})` }}
      />
      <SwitchTransition mode="out-in">
        <CSSTransition
          nodeRef={sliderTextRef}
          key={index}
          timeout={200}
          classNames="slider-quote"
        >
          <div ref={sliderTextRef}>
            <p className="text-dark-blue font-light text-lg mb-5 lg:mb-8 z-10 lg:text-4xl">
              {quote}
            </p>
            <div className="text-base lg:text-xl">
              <strong className="font-bold lg:mr-3">{name}</strong>
              <span className="block text-grayish-blue lg:inline-block">
                {role}
              </span>
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};
