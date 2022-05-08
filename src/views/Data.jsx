import React, { useState, useEffect, useContext } from "react";
import DataContext from "../context/DataContext";
import "./Data.css";

function Pokemon({ id, avatar, name, abilities }) {
  const { idNumber, setIdNumber } = useContext(DataContext);

  return (
    <figure>
      <img src={avatar} alt={name} />
      <h1 className="title">{name}</h1>
      <h3 className="abilities">{abilities.replace(",", " ")}</h3>
      <button className="btnAdd" onClick={() => {
        setIdNumber([...idNumber, name])
        alert(`Se ha añadido ${name} a favoritos`)
      }}>
        Add favorites
      </button>
    </figure>
  );
}

export default function Data() {
  const [Pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async (URL) => {
      let res = await fetch(URL),
        json = await res.json();

      json.results.map(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();
        let Pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
          abilities: json.abilities.map((e) => e.ability.name),
        };
        setPokemons((Pokemons) => [...Pokemons, Pokemon]);
      });
    };
    getPokemons("https://pokeapi.co/api/v2/pokemon");
  }, []);

  return (
    <>
      <section className="pokemons-section">
        {/* <h1 className="choose">Choose your favorite...</h1> */}
        {Pokemons.length === 0 ? (
          <h3>Cargando Tarjetas...</h3>
        ) : (
          Pokemons.map((e) => (
            <Pokemon
              key={e.id}
              id={e.id}
              name={e.name}
              avatar={e.avatar}
              abilities={e.abilities + " "}
            />
          ))
        )}
        {/* <div className="new">
        <h3 className="act">Se ha añadido a favoritos</h3>
        </div> */}
      </section>
    </>
  );
}
