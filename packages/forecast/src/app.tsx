import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Unsplash, { toJson } from 'unsplash-js';
import dotenv from 'dotenv';
import { Wallpaper } from './components';

import './app.css';

dotenv.config();

const unsplash = new Unsplash({
  accessKey: process.env.UNSPLASH_ACCESS_KEY as string,
});

const App = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    // TODO: move logic to state handler
    unsplash.photos
      .getRandomPhoto({
        query: 'mexico',
        orientation: 'landscape',
        collections: ['mexico', 'mexico nature', 'mexico outdoor'],
      })
      .then(toJson)
      .then(photo => {
        setUrl(photo.urls.regular);
      });
  }, []);

  return (
    <div className="bg-blue-100">
      <Wallpaper url={url} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
