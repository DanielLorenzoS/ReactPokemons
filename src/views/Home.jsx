import React from "react";
import logo from "./logo.svg";
import "./Home.css";
const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Bienvenid@ a mi primer app con React</h3>
        <h4>
          Se usaron estructuras básicas de React, además de Context API y React
          Router
        </h4>
        <h5>Pronto nueva actualización con inicio de sesión con Node.js</h5>
      </header>
    </div>
  );
};

export default Home;
