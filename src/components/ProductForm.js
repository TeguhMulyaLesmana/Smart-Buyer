import React, { useState, useEffect } from "react";
import "../App.css";

const ProductForm = ({
  addProduct,
  updateProduct,
  isEditing,
  currentProduct,
  setIsEditing,
}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [savingPerDay, setSavingPerDay] = useState("");

  useEffect(() => {
    if (isEditing) {
      setName(currentProduct.name);
      setPrice(currentProduct.price);
      setSavingPerDay(currentProduct.savingPerDay);
    }
  }, [isEditing, currentProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: currentProduct ? currentProduct.id : Date.now(),
      name,
      price: parseFloat(price),
      savingPerDay: parseFloat(savingPerDay),
    };

    if (isEditing) {
      updateProduct(product);
      setIsEditing(false);
    } else {
      addProduct(product);
    }
    setName("");
    setPrice("");
    setSavingPerDay("");
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Saving per Day"
        value={savingPerDay}
        onChange={(e) => setSavingPerDay(e.target.value)}
        required
      />
      <button type="submit">{isEditing ? "Update" : "Add"} Product</button>
    </form>
  );
};

export default ProductForm;
