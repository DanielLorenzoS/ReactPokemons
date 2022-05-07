import "./App.css";
import Header from "./components/Header";
import { DataProvider } from "./context/DataContext";
import { RemoveDataProvider } from "./context/RemoveContext";
import Data from "./models/Data";
import Favorites from "./models/Favorites";

function App() {
  return (
    <>
      <Header />
      <DataProvider>
        <RemoveDataProvider>
          <Data/>
          <Favorites />
        </RemoveDataProvider>
      </DataProvider>
    </>
  );
}

export default App;
