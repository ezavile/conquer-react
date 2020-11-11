import React, { useRef, useContext } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import './image.css';

import patternBg from 'images/pattern-bg.svg';
import { AppStateContext } from 'app-context';
import { Controls } from 'components/controls';

export const Image = () => {
  const imageRef = useRef(null);
  const { name, image } = useContext(AppStateContext);

  return (
    <div
      className="relative bg-center bg-contain bg-no-repeat w-72 h-72 mb-6 lg:m-0 lg:w-88 lg:h-84"
      style={{
        backgroundImage: `url(${patternBg})`,
      }}
    >
      <SwitchTransition mode="out-in">
        <CSSTransition
          nodeRef={imageRef}
          key={name}
          timeout={100}
          classNames="slider-image"
        >
          <div
            ref={imageRef}
            className="absolute bg-center bg-cover rounded-md top-0 bottom-0 left-0 right-0 m-8 lg:m-16 lg:w-80 lg:h-80"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        </CSSTransition>
      </SwitchTransition>
      <Controls />
    </div>
  );
};
