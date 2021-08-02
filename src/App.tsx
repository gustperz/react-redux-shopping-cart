import React from 'react';

import Header from 'layout/header/Header';
import ProducsCarousel from 'components/ProductsCarousel';
import ShoppingCartModal from 'components/ShoppingCartModal';

function App() {
  return (
    <div className="overflow-x-hidden h-screen relative">
      <Header />
      <ProducsCarousel />
      <ShoppingCartModal />
    </div>
  );
}

export default App;
