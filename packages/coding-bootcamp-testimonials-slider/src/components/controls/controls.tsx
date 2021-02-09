import { useContext } from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

import { AppStateContext, AppDispatchContext } from 'app-context';

export const Controls = () => {
  const { index } = useContext(AppStateContext);
  const { setTestimonial } = useContext(AppDispatchContext);

  return (
    <div className="flex justify-center absolute mb-3 bottom-0 left-0 right-0 lg:right-auto lg:ml-32 lg:mb-5">
      <div className="flex justify-around bg-white shadow-md rounded-full">
        <button
          type="button"
          className="p-2 rounded-l-full focus:outline-none focus:shadow-outline lg:text-5xl"
          aria-label="previous"
          onClick={() => setTestimonial(index - 1)}
        >
          <GrFormPrevious size="0.8em" />
        </button>
        <button
          type="button"
          className="p-2 rounded-r-full focus:outline-none focus:shadow-outline lg:text-5xl"
          aria-label="next"
          onClick={() => setTestimonial(index + 1)}
        >
          <GrFormNext size="0.8em" />
        </button>
      </div>
    </div>
  );
};
