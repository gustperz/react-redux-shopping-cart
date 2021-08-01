import React from 'react';

import styles from './ProductCard.module.css';
import { Product } from 'state/types';
import { numberFormat } from 'utils';
import { useAppDispatch, useAppSelector } from 'state/store';
import { addProduct, selectProductInShoppingCart } from 'state/shoppingCartSlice';

export const PRODUCT_CARD_WIDTH = 256;

export interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const { id, image, price_real, net_content, supplier, title, units_sf } = data;
  const addedToCart = useAppSelector(state => selectProductInShoppingCart(state, id));
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.card} style={{ width: PRODUCT_CARD_WIDTH }}>
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
      <button className={styles.purchase} onClick={() => dispatch(addProduct(data))}>
        {addedToCart ? 'Agregado uno mas' : 'Agregar al carrito'}
      </button>
    </div>
  );
};

export default ProductCard;
