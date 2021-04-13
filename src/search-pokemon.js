import React, {useEffect, useState} from "react";
import axios from "axios";
import './App.css';

const SearchPokemon = () => {
    const [pokemon, setPokemon] = useState("");
    const [pokeData, setData] = useState([]);
    const [pokeType, setType] = useState("");

    const getPokemon = async () => {
        const toArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res = await axios.get(url);
            toArray.push(res.data);
            setType(res.data.types[0].type.name)
            setData(toArray)
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    };

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    }

    const capFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="App">
            <div className="container-cards container-fluid">
                <div className="card">
                    <div className="card-header text-center">
                        Enter Pokémon Name or Pokédex #
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <label>
                                <input type="text" onChange={handleChange} placeholder="Pokémon Name or #"/>
                            </label>
                        </form>
                        {pokeData.map((data) => {
                            return (
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4" id="pkmn-srch">
                                            <div className="card"  id="pkmn">
                                                <img src={data.sprites["front_default"]}/>
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

export default SearchPokemon;