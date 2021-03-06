import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import RemoveContext from "../context/RemoveContext";
import "./Favorites.css";

function MyPokemon({ id, avatar, name, abilities }) {
  const { setIdRemove } = useContext(RemoveContext);
  return (
    <figure className="favFigure">
      <img src={avatar} alt={name} />
      <h1 className="title">
        {name} {id}
      </h1>
      <h3 className="abilities">{abilities.replace(",", " ")}</h3>
      <button className="btnRemove" id={id} onClick={() => setIdRemove(id)}>
        Remove favorite
      </button>
    </figure>
  );
}

export default function Favorites() {
  const [Pokemons, setPokemons] = useState([]);
  const { idNumber } = useContext(DataContext);
  const { idRemove } = useContext(RemoveContext);

  useEffect(() => {
    idNumber.map((e) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${e}`)
        .then((res) => res.json())
        .then((json) => {
          let MyPokemon = {
            id: json.id,
            name: json.name,
            avatar: json.sprites.front_default,
            abilities: json.abilities.map((e) => e.ability.name),
          };
          setPokemons((Pokemons) => [...Pokemons, MyPokemon]);
        });
    });
  }, [idNumber]);

  useEffect(() => {
    console.log(idRemove);
    Pokemons.map((e) => {
      if (e.id === idRemove) {
        let newArray = Pokemons.filter((item) => item.id !== idRemove);
        setPokemons(newArray);
      }
    });
  }, [idRemove]);

  return (
    <>
      <section className="favorites-section">
        {Pokemons.length === 0 ? (
          <h3 className="not">No has agregado ninguna tarjeta...</h3>
        ) : (
          Pokemons.map((e) => (
            <MyPokemon
              key={e.id}
              id={e.id}
              name={e.name}
              avatar={e.avatar}
              abilities={e.abilities + " "}
            />
          ))
        )}
      </section>
    </>
  );
}
