import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

fetch('http://localhost:3344')
  .then(res => res.json())
  .then((res) => {

    ReactDOM.render(
      <React.StrictMode>
        <App data={res} />
      </React.StrictMode>,
      document.querySelector('.root')
    );

  });




