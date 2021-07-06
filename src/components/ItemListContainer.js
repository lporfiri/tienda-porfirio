import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  return (
    <div className="row">
      <h1>{greeting}</h1>
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
