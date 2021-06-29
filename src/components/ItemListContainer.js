import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  return (
    <div>
      <p>{greeting}</p>
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
