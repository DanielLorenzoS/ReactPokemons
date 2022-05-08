import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { DataProvider } from "./context/DataContext";
import { RemoveDataProvider } from "./context/RemoveContext";
import Data from "./views/Data";
import Favorites from "./views/Favorites";

function App() {
  return (
    <> 
        {/* <Header />
      <DataProvider>
        <RemoveDataProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Data />}></Route>
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </Router>
        </RemoveDataProvider>
      </DataProvider> */}
          <Header/>
        <Routes>
          <Route path="/data" element={<Data/>}></Route>
          <Route path="/favorites" element={<Favorites/>}></Route>
        </Routes>
    </>
  );
}

export default App;
