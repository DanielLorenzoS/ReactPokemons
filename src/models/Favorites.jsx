import React/* , { useState, useEffect } */ from 'react';
import './Favorites.css'

export default function Favorites(props) {
  return (
    <>
    <section className="favorites-section">
      <h1 className="yourFav">These are your favorites...</h1>
      <h3>{props.counter}</h3>
    </section>
    </>
  )
}
