import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Data from './models/Data';
import Favorites from './models/Favorites';


function App() {

  const [counter, setCounter] = useState(0);
  const HandleCounter = () => useState(counter);
  return (
    <>
    <Header/>
    <Data state={counter}/>
    <Favorites counter={counter}/>
    </>
  );
}

export default App;
