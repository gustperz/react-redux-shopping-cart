import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const EmptyShoppingCart = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <FontAwesomeIcon
        icon={faCartArrowDown}
        size="3x"
        className="mb-8 text-vivid text-opacity-60"
      />
      <p className="text-2xl text-center text-gray-400">
        Aún no tienes productos en tu carrito de compras.
      </p>
    </div>
  );
};

export default EmptyShoppingCart;
