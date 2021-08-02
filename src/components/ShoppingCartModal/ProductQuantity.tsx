import React from 'react';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShoppingCartProduct } from 'state/types';
import { useAppDispatch } from 'state/store';
import { decrementProductQuantity, incrementProductQuantity } from 'state/shoppingCartSlice';

export interface ProductQuantityProps {
  product: ShoppingCartProduct;
}

const buttonStyle = (disabled = false) =>
  `w-8 h-8 rounded-full border-2 ${
    disabled ? 'border-gray-300 text-gray-300' : 'border-vivid text-vivid'
  }`;

const ProductQuantity = ({ product }: ProductQuantityProps) => {
  const {
    product: { id },
    quantity,
  } = product;
  const disabled = quantity <= 1;

  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center">
      <button
        onClick={() => dispatch(decrementProductQuantity(id))}
        disabled={disabled}
        className={buttonStyle(disabled)}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>

      <p className="text-xl mx-4 font-bold text-gray-500 w-5 text-center">{quantity}</p>

      <button onClick={() => dispatch(incrementProductQuantity(id))} className={buttonStyle()}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default ProductQuantity;
