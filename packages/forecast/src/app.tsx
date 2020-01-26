import * as React from 'react';
import { render } from 'react-dom';

// eslint-disable-next-line import/no-unresolved
import './app.css';

const App = () => (
  <div className="bg-blue-100">I am conquering the react world!</div>
);

render(<App />, document.getElementById('root'));
