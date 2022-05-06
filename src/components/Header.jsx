import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <>
    <section>
        <div className="logo">
            <h1>Pokemons</h1>
        </div>
        <nav>
            <ul>
                <h1>Home</h1>
                <h1>Favorites</h1>
            </ul>
        </nav>
    </section>
    </>
  )
}
