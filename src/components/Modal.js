import React from "react";
import "../App.css";

const Modal = ({ product, closeModal, confirmDelete }) => {
  if (!product) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete {product.name}?</p>
        <button onClick={() => confirmDelete(product.id)}>Yes</button>
        <button onClick={closeModal}>No</button>
      </div>
    </div>
  );
};

export default Modal;
