import React from "react";
import CardWidget from "./CardWidget";

const menus = [
  {
    categoria: "Ropa",
    item: ["calzados", "chaquetas", "camisetas", "etc"],
  },
  {
    categoria: "Accesorios",
    item: ["calzados", "chaquetas", "camisetas", "etc"],
  },
  {
    categoria: "Calzados",
    item: ["calzados", "chaquetas", "camisetas", "etc"],
  },
  {
    categoria: "Mas..",
    item: ["calzados", "chaquetas", "camisetas", "etc"],
  },
];

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <CardWidget />
          <a className="navbar-brand" href="#!">
            {" "}
            CONTACHUELAS{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  INICIO
                </a>
              </li>
              {menus.map((menu) => (
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    {menu.categoria}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
