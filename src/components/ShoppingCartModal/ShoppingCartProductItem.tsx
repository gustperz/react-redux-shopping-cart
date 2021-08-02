import React from 'react';

import styles from './ShoppingCartProductItem.module.css';
import { ShoppingCartProduct } from 'state/types';
import { numberFormat } from 'utils';
import ProductQuantity from './ProductQuantity';
import RemoveProductButton from './RemoveProductButton';

export interface ShoppingCartProductItemProps {
  data: ShoppingCartProduct;
}

const ShoppingCartProductItem = ({ data }: ShoppingCartProductItemProps) => {
  const { product, quantity } = data;
  const { id, image, price_real, net_content, supplier, title, units_sf } = product;

  return (
    <div className={styles.productItem}>
      <div className={styles.image}>
        <img src={image} alt={`product-${id}`} />
      </div>

      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.imageDesktop}>
            <img src={image} alt={`product-${id}`} className="h-full" />
          </div>

          <div className="grid md:block">
            <p className={styles.productName}>{title}</p>
            <p className={styles.productSupplier}>{supplier}</p>
            <p className={styles.productUnits}>
              {units_sf > 1 ? `x ${units_sf} units` : ' x 1 unit'} - {net_content} c/u
            </p>
          </div>
        </div>

        <div className={styles.quantity}>
          <ProductQuantity product={data} />
        </div>

        <div>
          <span className={styles.producPrice}>
            ${numberFormat.currency(+price_real * quantity)}
          </span>
        </div>

        <div className={styles.remove}>
          <RemoveProductButton productId={product.id} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartProductItem;
