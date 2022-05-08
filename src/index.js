import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DataProvider } from "./context/DataContext";
import { RemoveDataProvider } from "./context/RemoveContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataProvider>
    <RemoveDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RemoveDataProvider>
  </DataProvider>
);
