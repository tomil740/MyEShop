import React from "react";
import { Link } from "react-router-dom";
import "../../style/PreviewContainer.css";

function PreviewContainer({ shoesData }) {
  return (
    <div className="home-container">
      <h1 className="page-title">Our Latest Shoes Collection</h1>
      <section className="product-list">
        {shoesData.map((shoe) => (
          <div className="product-card" key={shoe.itemId}>
            <img src={shoe.imgUrl} alt={shoe.name} className="product-image" />
            <div className="product-details">
              <h3>{shoe.name}</h3>
              <p className="product-price">${shoe.price}</p>
              <Link to={`/shoes/${shoe.id}`} className="view-details-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default PreviewContainer;
