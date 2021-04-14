import React, {useEffect, useState} from "react";
import axios from "axios";
import './App.css';

const AllPokemon = () => {
    const [pokemon, setPokemon] = useState("");
    const [pokeData, setData] = useState([]);
    const [pokeType, setType] = useState("");

    const getPokemon = async () => {
        const toArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
            const res = await axios.get(url);
            for (let i = 0; i <= res.data.results.length; i++){
                   console.log(res.data.results[i]);
                   let name = res.data.results[i].name;
                   const allUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
                   const allRes = await axios.get(allUrl);
            }
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getPokemon();
    }, []);

    const capFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="App">
            <div className="container-cards container-fluid">
                <div className="card">
                    <div className="card-header text-center">
                        The Original 150 Pokémon
                    </div>
                    <div className="card-body">
                        {pokeData.map((data) => {
                            return (
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4" id="pkmn-srch">
                                            <div className="card" id="pkmn">
                                                <img className="card-img-top" src={data.sprites["front_default"]} alt={capFirstLetter(data.name)}/>
                                                <div className="card-body">
                                                    <h3 className="card-title">{" "}{capFirstLetter(data.name)}</h3>
                                                    <p className="card-text">Pokédex #{" "}{data.id}</p>
                                                    <p className="card-text">Type: {" "}{capFirstLetter(pokeType)}</p>
                                                    <p className="card-text">Height: {" "}{Math.round(data.height * 3.9)}"</p>
                                                    <p className="card-text">Weight: {" "}{Math.round(data.weight / 4.3)} lbs</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllPokemon;