// src/components/AddBookForm.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import "./BookForm.css";
import { useState } from "react";

const BookForm = () => {
  const navigate = useNavigate();
  const [form, setForm] =useState({    title:"",
    author:"",
    Description:"",
    imgUrl:""
})

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    e.preventDefault();

    // No functionality required as per assignment
    alert("Submit button clicked. No functionality implemented.");
  };



  return (
    <div className="add-book-form-container">
      <form className="add-book-form" onSubmit={handleSubmit}>
        <h2>Add New Book</h2>
        <label>
          Title:
          <input type="text" placeholder="Enter book title" required />
        </label>
        <label>
          Author:
          <input type="text" placeholder="Enter author's name" required />
        </label>
        <label>
          Description:
          <textarea placeholder="Enter book description" required></textarea>
        </label>
        <label>
          Cover Image URL:
          <input type="url" placeholder="Enter image URL" required />
        </label>
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
