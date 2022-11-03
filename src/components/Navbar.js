import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
                    aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span><img src="/media/pokemon/poke-ball.png" alt="poke_ball" width="auto" height="25"/></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav mr-auto mt-0">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Poké-Page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.pokemon.com/us/" target="_blank">Pokémon</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
