import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div id="inicio"></div>
      <section className="header-section">
        <div className="logo">
          <h1>Pokemons</h1>
        </div>
        <nav>
          <ul>
            <Link to="/data"><h1 className="h1-nav">Home</h1></Link>
            <Link to="/favorites"><h1 className="h1-nav">Favorites</h1></Link>
          </ul>
        </nav>
      </section>
    </>
  );
}
