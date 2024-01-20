import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { name } = useParams();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const productImages = [
    "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  ];

  const productReviews = [
    { user: "User1", review: "Great product! Highly recommended." },
    { user: "User2", review: "Amazing quality and fast delivery." },
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div style={{ backgroundColor: "beige" }}>
      <h1>{name}</h1>

      <img
        src={productImages[selectedImageIndex]}
        alt={`Product ${selectedImageIndex + 1}`}
      />

      <div>
        {productImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            onClick={() => handleImageClick(index)}
            style={{
              width: "50px",
              height: "50px",
              margin: "5px",
              cursor: "pointer",
            }}
          />
        ))}

        {/* <Button className='btn-danger  mx-5' >Add to Cart</Button> */}
      </div>

      <div>
        <h2>Product Reviews</h2>
        <ul>
          {productReviews.map((review, index) => (
            <li key={index}>
              <strong>{review.user}:</strong> {review.review}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}; 

export default ProductDetails;
