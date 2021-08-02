import React from 'react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch } from 'state/store';
import { toggleModalVisible } from 'state/shoppingCartSlice';

const HideModalButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button onClick={() => dispatch(toggleModalVisible())}>
      <FontAwesomeIcon icon={faChevronLeft} className="text-vivid mr-4" />
      Volver a la tienda
    </button>
  );
};

export default HideModalButton;
