import React from 'react';
import ReactDOM from 'react-dom';
import './css/index-2.css';
import SearchPokemon from './components/old/search-pokemon';
import AllPokemon from "./components/old/all-pokemon";
import NextGenPokemon from "./components/old/next-gen-pokemon";
import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client";
import App from "./App";

// ReactDOM.render(
//     <React.StrictMode>
//         <SearchPokemon/>
//     </React.StrictMode>,
//     document.getElementById('search-pokemon')
// );
//
// ReactDOM.render(
//     <React.StrictMode>
//         <AllPokemon/>
//     </React.StrictMode>,
//     document.getElementById('all-pokemon')
// );
//
// ReactDOM.render(
//     <React.StrictMode>
//         <NextGenPokemon/>
//     </React.StrictMode>,
//     document.getElementById('next-gen-pokemon')
// );

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App/>)
