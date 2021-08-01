import React from 'react';

import { useGetProductsQuery } from '../productsApi';
import ProductCard from './ProductCard';

const ProducsCarousel = () => {
  const { data = [] } = useGetProductsQuery();

  return (
    <div className="flex gap-x-10 p-10 overflow-auto w-full">
      {data.map(product => (
        <ProductCard data={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProducsCarousel;
