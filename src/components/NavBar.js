import React from "react";
import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";

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
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <CardWidget />
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
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/Ropa"}
                >
                  Ropa
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/Calzados"}
                >
                  Calzados
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/Accesorios"}
                >
                  Accesorios
                </Link>
              </li>
              {/* {menus.map((menu) => (
                <Link to="{menu.categoria}" className="nav-link">
                  {menu.categoria}
                </Link>
              ))} */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
