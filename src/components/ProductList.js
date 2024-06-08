import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, openEditForm, openDeleteModal }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          openEditForm={openEditForm}
          openDeleteModal={openDeleteModal}
        />
      ))}
    </div>
  );
};

export default ProductList;
