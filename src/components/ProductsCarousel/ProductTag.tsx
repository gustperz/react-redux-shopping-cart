import React from 'react';

import styles from './ProductTag.module.css';

export interface ProductTagProps {
  name: string;
  image: string;
}

const ProductTag = ({ name, image }: ProductTagProps) => {
  return (
    <div className="group relative">
      <img src={image} alt={name} className="w-7 h-7" />
      <div className={`${styles.tooltip} hidden group-hover:grid`}>
        <span className="text-yellow-400">Producto</span>
        <span className="capitalize">{name}</span>
      </div>
    </div>
  );
};

export default ProductTag;
