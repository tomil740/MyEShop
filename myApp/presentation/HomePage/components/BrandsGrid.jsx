import React from "react";
import "../../style/BrandsGrid.css"; // Import the CSS file for styling
import { Link } from 'react-router';

function BrandsGrid({ data }){
  return (
    <div className="shoes-grid-container">
      {/* Horizontal Scrollable Menu for Brands */}
      <div className="brands-menu">
        {data.map((brandData, index) => (
          <div key={index} className="brand-item">
            <span className="brand-name">{brandData.brand}</span>
          </div>
        ))}
      </div>

      <div className="shoes-items">
        {data.map((brandData, index) => (
          <div key={index} className="brand-section">
            <h2 className="brand-heading">{brandData.brand}</h2>
            <div className="grid-container">
              {/* Render shoe items in a grid */}
              {brandData.items.map((item, idx) => (
                <Link to={`/shoes/${item.id}`}>
                <div key={idx} className="shoe-item">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="shoe-image"
                  />
                  <div className="shoe-info">
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsGrid;
