import React from "react";
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
            <a href="#inicio">
              <h1>Home</h1>
            </a>
            <a href="#favorites">
              <h1>Favorites</h1>
            </a>
          </ul>
        </nav>
      </section>
    </>
  );
}
