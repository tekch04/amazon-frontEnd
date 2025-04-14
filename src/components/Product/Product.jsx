/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import productStyles from "./Product.module.css";
import Loader from "../Loader/Loader";
function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        let request = await axios.get("https://fakestoreapi.com/products");
        console.log(request);
        setProducts(request.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    })();
  }, []);
  console.log(products);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={productStyles.products__container}>
          {products?.map((singleProdut) => (
            <ProductCard key={singleProdut.id} renderAdd={true} product={singleProdut} />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
