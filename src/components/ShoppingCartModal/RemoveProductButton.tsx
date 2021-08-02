import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch } from 'state/store';
import { removeProduct } from 'state/shoppingCartSlice';
import { ShoppingCartProduct } from 'state/types';

export interface RemoveProductButtonProps {
  productId: number;
}

const RemoveProductButton = ({ productId }: RemoveProductButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <button onClick={() => dispatch(removeProduct(productId))}>
      <FontAwesomeIcon icon={faTrash} size="lg" className="text-gray-400" />
    </button>
  );
};

export default RemoveProductButton;
