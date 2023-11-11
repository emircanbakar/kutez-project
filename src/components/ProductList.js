import React from 'react';
import Card from './Card';

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: 'Ürün 1',
      imageSrc: 'xxxx.img',
      description: 'Ürün 1 Açıklaması',
    },  
    // Diğer ürünler ekle 
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
