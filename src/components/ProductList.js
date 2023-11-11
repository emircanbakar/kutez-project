import React from 'react';
import Card from './Card';

import Ring1 from "../assets/img/Rectangle 1.jpg"
import Ring2 from "../assets/img/Rectangle 1-1.jpg"
import Ring3 from "../assets/img/Rectangle 2.jpg"
import Ring4 from "../assets/img/Rectangle 2-1.jpg"
import Ring5 from "../assets/img/Rectangle 3.jpg"
import Ring6 from "../assets/img/Rectangle 3-1.jpg"
import Ring7 from "../assets/img/Rectangle 4.jpg"
import Ring8 from "../assets/img/Rectangle 4-1.jpg"

import Pendant1 from "../assets/img/Rectangle 1-2.jpg"
import Pendant2 from "../assets/img/Rectangle 2-2.jpg"
import Pendant3 from "../assets/img/Rectangle 3-2.jpg"
import Pendant4 from "../assets/img/Rectangle 4-2.jpg"
import Pendant5 from "../assets/img/Rectangle 5.jpg"
import Pendant6 from "../assets/img/Rectangle 6.jpg"
import Pendant7 from "../assets/img/Rectangle 7.jpg"
import Pendant8 from "../assets/img/Rectangle 8.jpg"

import Bridal1 from "../assets/img/Rectangle 9.jpg"
import Bridal2 from "../assets/img/Rectangle 10.jpg"
import Bridal3 from "../assets/img/Rectangle 11.jpg"
import Bridal4 from "../assets/img/Rectangle 12.jpg"

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: 'Engagement Ring 1',
      imageSrc: Ring1,
      description: '$101.00 USD',
    },
    {
      id: 2,
      title: 'Engagement Ring 2',
      imageSrc: Ring2,
      description: '$102.00 USD',
    },
    {
      id: 3,
      title: 'Engagement Ring 3',
      imageSrc: Ring3,
      description: '$103.00 USD',
    },
    {
      id: 4,
      title: 'Engagement Ring 4',
      imageSrc: Ring4,
      description: '$104.00 USD',
    },
    {
      id: 5,
      title: 'Engagement Ring 5',
      imageSrc: Ring5,
      description: '$105.00 USD',
    },
    {
      id: 6,
      title: 'Engagement Ring 6',
      imageSrc: Ring6,
      description: '$106.00 USD',
    },
    {
      id: 7,
      title: 'Engagement Ring 7',
      imageSrc: Ring7,
      description: '$107.00 USD',
    },
    {
      id: 8,
      title: 'Engagement Ring 8',
      imageSrc: Ring8,
      description: '$108.00 USD',
    },
    {
      id: 9,
      title: 'Pendants 1',
      imageSrc: Pendant1,
      description: '$109.00 USD',
    },
    {
      id: 10,
      title: 'Pendants 2',
      imageSrc: Pendant2,
      description: '$110.00 USD',
    },
    {
      id: 11,
      title: 'Pendants 3',
      imageSrc: Pendant3,
      description: '$111.00 USD',
    },
    {
      id: 12,
      title: 'Pendants 4',
      imageSrc: Pendant4,
      description: '$112.00 USD',
    },
    {
      id: 13,
      title: 'Pendants 5',
      imageSrc: Pendant5,
      description: '$113.00 USD',
    },
    {
      id: 14,
      title: 'Pendants 6',
      imageSrc: Pendant6,
      description: '$114.00 USD',
    },
    {
      id: 15,
      title: 'Pendants 7',
      imageSrc: Pendant7,
      description: '$115.00 USD',
    },
    {
      id: 16,
      title: 'Pendants 8',
      imageSrc: Pendant8,
      description: '$116.00 USD',
    },
    {
      id: 17,
      title: 'Bridal Set 1',
      imageSrc: Bridal1,
      description: '$117.00 USD',
    },
    {
      id: 18,
      title: 'Bridal Set 2',
      imageSrc: Bridal2,
      description: '$118.00 USD',
    },
    {
      id: 19,
      title: 'Bridal Set 3',
      imageSrc: Bridal3,
      description: '$119.00 USD',
    },
    {
      id: 20,
      title: 'Bridal Set 4',
      imageSrc: Bridal4,
      description: '$120.00 USD',
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          imageSrc={product.imageSrc}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;
