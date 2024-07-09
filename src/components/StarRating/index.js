import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const renderStarRating = (rating) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const remainingStars = totalStars - fullStars;
  const hasHalfStar = rating - fullStars >= 0.5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar className="star" key={i} />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key={fullStars} className="star" />);
  }

  for (let i = 0; i < remainingStars - (hasHalfStar ? 1 : 0); i++) {
    stars.push(
      <FaRegStar className="star" key={fullStars + (hasHalfStar ? 1 : 0) + i} />
    );
  }

  return stars;
};

export default renderStarRating;
