import React, { useEffect, useState } from "react";
import "../../style/ShoeForm.css"; 


function ShoeForm({ initState ,onSubmit,isNewItem}) {
  // Local state to manage the form fields
  const [shoeData, setShoeData] = useState(initState);

  useEffect(()=>{
    setShoeData(initState);
  },[initState])

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShoeData({
      ...shoeData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Shoe Data:", shoeData);
    onSubmit(shoeData, isNewItem);
  };

  return (
    <div className="shoe-form-container">
      <h1>Edit Shoe Details</h1>
      <form onSubmit={handleSubmit} className="shoe-form">
        <div className="form-group">
          <label htmlFor="name">Shoe Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={shoeData.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={shoeData.brand}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="imgUrl">Image URL:</label>
          <input
            type="text"
            id="imgUrl"
            name="imgUrl"
            value={shoeData.imgUrl}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={shoeData.price}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Update Shoe
          </button>
        </div>
      </form>

      {/* Preview Image */}
      <div className="preview-container">
        <h2>Preview:</h2>
        <img
          src={shoeData.imgUrl}
          alt={shoeData.name}
          className="preview-image"
          width="200"
        />
      </div>
    </div>
  );
}

export default ShoeForm;