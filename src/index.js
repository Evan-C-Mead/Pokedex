import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchPokemon from './search-pokemon';
import AllPokemon from "./all-pokemon";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <SearchPokemon />
  </React.StrictMode>,
  document.getElementById('search-pokemon')
);

ReactDOM.render(
  <React.StrictMode>
    <AllPokemon />
  </React.StrictMode>,
  document.getElementById('all-pokemon')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
