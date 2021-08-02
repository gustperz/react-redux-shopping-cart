import React from 'react';

import Header from 'layout/header/Header';
import ProducsCarousel from 'components/ProductsCarousel';
import ShoppingCartModal from 'components/ShoppingCartModal';

function App() {
  return (
    <>
      <Header />
      <ProducsCarousel />
      <ShoppingCartModal />
    </>
  );
}

export default App;
