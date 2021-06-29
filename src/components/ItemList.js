import React, { useState, useEffect } from "react";
import Item from "./Item";
import Loading from "./Loading";
import PRODUTCS_MOCK from "../mocks/products";

function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(PRODUTCS_MOCK);
      }, 2000);
    });

    getProducts.then(
      (res) => {
        setProducts(res);
        setLoading(false);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div className="row">
        {products.map((product) => (
          <Item
            id={product.id}
            name={product.name}
            img={product.img}
            description={product.description}
            price={product.price}
            stock={product.stock}
            min={product.min}
            max={product.max}
          />
        ))}
        ;
      </div>
      <Item />
    </>
  );
}

export default ItemList;
