import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Data from "./views/Data";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/data" element={<Data />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </>
  );
}

export default App;
