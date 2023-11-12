import React from 'react';

const Card = ({ title, imageSrc, description }) => {
  return (
    <div className="p-4">
      <img className='w-full h-auto rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105' src={imageSrc} alt={title} />
      <p className='text-base font-normal mt-2'>{title}</p>
      <p className='text-base font-normal mt-0.5 text-gray-700'>{description}</p>
    </div>
  );
};

export default Card;
