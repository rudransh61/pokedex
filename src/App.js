import React, { useEffect, useState } from 'react'
import "./App.css";
import Card from "./Card.js";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=900"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href=" ">
            Pokemon
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=" navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <div  className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul  className="navbar-nav mr-auto">
              <li  className="nav-item active">
                <a  className="nav-href" href="">
                  Home
                </a>
              </li>
              <li  className="nav-item dropdown">
                <a
                   className="nav-href dropdown-toggle"
                  href=" "
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div  className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a  className="dropdown-item" href="">
                    Action
                  </a>
                  <a  className="dropdown-item" href="">
                    Another action
                  </a>
                  <div  className="dropdown-divider"></div>
                  <a  className="dropdown-item" href="">
                    Something else here
                  </a>
                </div>
              </li>
              <li  className="nav-item">
                <a  className="nav-href disabled" href="">
                  Disabled
                </a>
              </li>
            </ul>
          </div> */}
        </nav>
      </div>
      <div className="all-container" style={{display:"flex" , "flexWrap":"wrap","margin":"10px"}}>
          {allPokemons.map( (pokemonStats, index) =>
            <Card
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />)}
          
        </div>
    </>
  );
}

export default App;
