import React, { useState } from "react";

function ItemCount({ stock, onAdd, initial }) {
  let [count, setCount] = useState(initial);

  const addCount = () => {
    if (stock > 1 && count <= stock) {
      setCount(++count);
    }
  };

  const resCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div>
        <button type="button" className="btn btn-secondary" onClick={resCount}>
          -
        </button>
        <button type="button" className="btn btn-ligh" disable>
          {count}
        </button>
        <button type="button" className="btn btn-secondary" onClick={addCount}>
          +
        </button>
        <button type="button" className="btn btn-dark" onClick={onAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
export default ItemCount;
