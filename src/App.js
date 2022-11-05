import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Info from "./components/Info";
import SearchPokemon from "./components/Search-Pokemon";

export default function App() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Info/>
            <SearchPokemon/>
        </div>
    )
}
