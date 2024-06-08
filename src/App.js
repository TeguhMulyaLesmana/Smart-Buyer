import React, { useState } from "react";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    setIsModalOpen(false);
  };

  const openEditForm = (product) => {
    setIsEditing(true);
    setCurrentProduct(product);
  };

  const openDeleteModal = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="app-container">
      <Header />
      <ProductForm
        addProduct={addProduct}
        updateProduct={updateProduct}
        isEditing={isEditing}
        currentProduct={currentProduct}
        setIsEditing={setIsEditing}
      />
      <ProductList
        products={products}
        openEditForm={openEditForm}
        openDeleteModal={openDeleteModal}
      />
      {isModalOpen && (
        <Modal
          product={currentProduct}
          closeModal={() => setIsModalOpen(false)}
          confirmDelete={deleteProduct}
        />
      )}
    </div>
  );
};

export default App;
