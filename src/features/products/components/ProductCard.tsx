import React from 'react';

import styles from './ProductCard.module.css';
import { Product } from '../types';
import { numberFormat } from 'utils';

export interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const { id, image, price_real, net_content, supplier, title, units_sf } = data;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className="">icon</div>

        <div className={styles.image}>
          <img src={image} alt={`product-${id}`} className="h-full" />
        </div>

        <div className={styles.contentInfo}>
          <div className="flex justify-between">
            <span className={styles.productSupplier}>{supplier}</span>
            <span className={styles.productNetContent}>{net_content}</span>
          </div>

          <p className={styles.productName}>{title}</p>

          <p className={styles.producPrice}>
            ${numberFormat.currency(price_real)}
            <span>{units_sf > 1 ? `x ${units_sf} units` : ' x unit'}</span>
          </p>
        </div>
      </div>
      <button className={styles.purchase}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
