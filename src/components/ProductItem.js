import React from "react";

const ProductItem = ({ product, openEditForm, openDeleteModal }) => {
  if (
    !product ||
    !product.name ||
    typeof product.price === "undefined" ||
    typeof product.savingPerDay === "undefined"
  ) {
    console.error("Invalid product data:", product);
    return null; // Atau tampilkan pesan error atau placeholder
  }

  const { name, price, savingPerDay } = product;
  const daysToSave = Math.ceil(price / savingPerDay);

  return (
    <div className="product-item">
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>Saving per day: {savingPerDay}</p>
      <p>Days to save: {daysToSave}</p>
      <button onClick={() => openEditForm(product)}>Edit</button>
      <button onClick={() => openDeleteModal(product)}>Delete</button>
    </div>
  );
};

export default ProductItem;
