import React from 'react';

const Card = ({ title, imageSrc, description }) => {
  return (
    <div className="card">
      <img className='card-img' src={imageSrc} alt={title} />
      <p className='card-title'>{title}</p>
      <p className='card-price'>{description}</p>
    </div>
  );
};

export default Card;
