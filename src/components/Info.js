import React from "react";

export default function Info() {
    return (
        <div className="container-cards container-fluid">
            <div className="card">
                <div className="card-header text-center lead">
                    <p className="d-inline lead">What are Pokémon?</p>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p className="lead">Pokémon are creatures of all shapes and sizes who live in the wild or alongside humans. For
                            the most part, Pokémon do not speak except to utter their names. There are currently more than 800
                            creatures that inhabit the Pokémon universe.</p>
                        <footer className="blockquote-footer d-flex justify-content-center">As cited by <cite title="Source Title">Nintendo.com</cite>
                            <a href="https://www.nintendo.com.au/what-is-pokemon" class="info-btn btn btn-sm btn-outline-info" role="button">Read more here!</a>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}
