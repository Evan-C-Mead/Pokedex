import React from "react";

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle"
                    aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                <span><img src="/media/pokemon/poke-ball.png" alt="poke_ball" width="auto" height="25"/></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarToggle">
                <ul class="navbar-nav mr-auto mt-0">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Poké-Page</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.pokemon.com/us/" target="_blank">Pokémon</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
