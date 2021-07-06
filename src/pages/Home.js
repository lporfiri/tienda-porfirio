import React from "react";
import ItemListContainer from "../components/ItemListContainer";

const msg = "Bienvenido a la tienda!";

function Home() {
  return (
    <div className="container-fluid">
      <ItemListContainer greeting={msg} />
    </div>
  );
}

export default Home;
