import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import "./App.css";

const msg = "Bienvenido a la tienda!";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container-fluid">
        <ItemListContainer greeting={msg} />
      </div>
    </div>
  );
}

export default App;
