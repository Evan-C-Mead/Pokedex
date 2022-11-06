import React, {useState} from "react";
import axios from "axios";

export default function SearchPokemon() {
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
        <div className="container-cards container-fluid">
            <div className="card">
                <div className="card-header text-center lead">
                    <p className="d-inline lead">Search a Pokémon by name or Pokédex #</p>
                </div>
                <div className="card-body d-flex justify-content-center p-0">
                    <form onSubmit={handleSubmit}>
                        <label>
                            <input className="text-center" type="text" onChange={handleChange} placeholder="Pokémon name or #"/>
                        </label>
                    </form>
                </div>
                {pokeData.map((data) => {
                    return (
                        <div className="container-fluid">
                            <div className="row alignn-items-center m-0">
                                {/*<div className="col-12 col-md-6 col-lg-4 mt-0 pt-0" id="pkmn-srch">*/}
                                <div className="col-sm mt-0 pt-0" id="pkmn-srch">
                                    <div className="card text-center" id="pkmn">
                                        <img className="card-img-top" src={data.sprites["front_default"]}
                                             alt={capFirstLetter(data.name)}/>
                                        <div className="card-body pt-0">
                                            <hr/>
                                            <h3 className="card-title m-0">{" "}{capFirstLetter(data.name)}</h3>
                                            <p className="card-text m-0">Pokédex #{" "}{data.id}</p>
                                            <p className="card-text m-0">Type: {" "}{capFirstLetter(pokeType)}</p>
                                            <p className="card-text m-0">Height: {" "}{Math.round(data.height * 3.9)}"</p>
                                            <p className="card-text m-0">Weight: {" "}{Math.round(data.weight / 4.3)} lbs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
