import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// pages
// Accesorios, Calzados, Ropa
import Home from "./pages/Home";
import Accesorios from "./pages/Accesorios";
import Calzados from "./pages/Calzados";
import Ropa from "./pages/Ropa";

// components
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <h1>CONTACHUELAS</h1>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/Accesorios">
            <Accesorios />
          </Route>

          <Route exact path="/Calzados">
            <Calzados />
          </Route>

          <Route exact path="/Ropa">
            <Ropa />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
