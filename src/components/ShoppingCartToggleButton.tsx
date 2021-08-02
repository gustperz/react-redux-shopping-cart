import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { selectShoppingCartProductsCount, toggleModalVisible } from 'state/shoppingCartSlice';
import { useAppDispatch, useAppSelector } from 'state/store';

const ShoppingCartToggleButton = () => {
  const itemsCount = useAppSelector(selectShoppingCartProductsCount);
  const dispatch = useAppDispatch();

  return (
    <button className="relative" onClick={() => dispatch(toggleModalVisible())}>
      {!!itemsCount && (
        <span className="absolute -right-3 -top-3 bg-yellow-500 text-md rounded-full w-6 z-0 font-bold">
          {itemsCount}
        </span>
      )}
      <FontAwesomeIcon className="z-10" icon={faShoppingCart} size="lg" />
    </button>
  );
};

export default ShoppingCartToggleButton;
