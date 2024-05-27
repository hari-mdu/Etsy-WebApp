import React from "react";
import { products } from "../utils/constants";
import Product from "./Product";

const ProductsPage = () => {
  return (
    <>
      <div className=" my-[50px]">
        {products.map((item) => {
          return (
            <div key={item.id}>
              <Product data={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsPage;
