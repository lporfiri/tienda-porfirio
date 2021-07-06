import React from "react";
import ItemCount from "./ItemCount";

const style = {
  card: {
    marginTop: 20,
    width: "30%",
    marginRight: "auto",
    marginLeft: "auto",
    paddingTop: 20,
  },
  image: {
    width: 200,
    heigth: 200,
    marginRight: "auto",
    marginLeft: "auto",
  },
};

function Item({ id, name, stock, price, img, description }) {
  const addToCart = function (quantity) {
    console.log("Se agrega " + quantity + " unidades al carrito");
  };

  return (
    <>
      <div className="card" style={style.card}>
        <h5 className="card-title">{name}</h5>
        <img className="card-img-top" src={img} style={style.image} alt="#!" />
        <div class="card-body">
          <p className="card-text">{description}</p>
          <p className="card-text">${price}</p>
          <ItemCount
            initial={1}
            stock={5}
            onAdd={() => console.log("agregado")}
          />
        </div>
      </div>
    </>
  );
}
export default Item;
