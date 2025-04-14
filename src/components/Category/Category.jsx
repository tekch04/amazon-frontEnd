import React from "react";
import { categoryImage } from "./categoryInfo";
import CategoryCard from "./CategoryCard";
import categoryStyle from "./Category.module.css";

function Category() {
  return (
    <>
      <section className={categoryStyle["category__container"]}>
        {categoryImage?.map((info, index) => (
          <CategoryCard key={index} data={info} />
        ))}
      </section>
    </>
  );
}

export default Category;
