import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Info from "./components/Info";
import SearchPokemon from "./components/Search-Pokemon";
import OG151 from "./components/OG-151";

export default function App() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Info/>
            <SearchPokemon/>
            <OG151/>
        </div>
    )
}
