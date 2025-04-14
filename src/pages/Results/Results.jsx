/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoint";
import ProductCard from "../../components/Product/ProductCard";
import styles from "./Results.module.css"
import Loader from "../../components/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  // console.log(categoryName);

  
  useEffect(() => {
  (async () => {
    setIsLoading(true);
      try {
       let request = await axios.get(`${productUrl}/products/category/${categoryName}`)
          console.log(request);
          setResults(request.data)
          setIsLoading(false)
      } catch (error) {
        console.error(error);
        setIsLoading(false)
      }
  })()
  }, []);
  
  return (
    <LayOut>
      <section className={styles.results__container}>
        <h1 style={{ padding: "2rem" }}>Results</h1>
        <p style={{ padding: "2rem" }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.products__container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} renderAdd={true} />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
