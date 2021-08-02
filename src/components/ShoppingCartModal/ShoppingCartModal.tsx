import React from 'react';

import styles from './ShoppingCartModal.module.css';
import { useAppSelector } from 'state/store';
import {
  selectShoppingCartModalVisible,
  selectShoppingCartProducst,
} from 'state/shoppingCartSlice';
import HideModalButton from './HideModalButton';
import ShoppingCartProductItem from './ShoppingCartProductItem';
import EmptyShoppingCart from './EmptyShoppingCart';

const ShoppingCartModal = () => {
  const modalVisible = useAppSelector(selectShoppingCartModalVisible);
  const products = useAppSelector(selectShoppingCartProducst);
  const nItems = products.length;

  return (
    <div className={`${styles.container} ${modalVisible ? styles.visible : styles.hidden}`}>
      <div>
        <HideModalButton />
      </div>

      <div className={styles.title}>
        <h2 className="text-2xl">Carrito de compras</h2>
        <span>
          <span className="text-vivid">{nItems}</span> {nItems === 1 ? 'item' : 'items'}
        </span>
      </div>

      {nItems === 0 && <EmptyShoppingCart />}

      <div className={styles.productsList}>
        {products.map(item => (
          <ShoppingCartProductItem key={item.product.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCartModal;
