import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './ProducsCarousel.module.css';
import { useGetProductsQuery } from '../productsApi';
import ProductCard, { PRODUCT_CARD_WIDTH } from './ProductCard';

const ProducsCarousel = () => {
  const { data = [] } = useGetProductsQuery();
  const [leftDisabled, setLeftDisabled] = useState(true);
  const [rightDisabled, setRightDisabled] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const scroll = (axis: 1 | -1) => {
    const content = contentRef.current;
    if (!content) return;

    let offset = PRODUCT_CARD_WIDTH + 40;
    const currentScroll = content.scrollLeft ?? 0;
    const maxScroll = content.scrollWidth - content.clientWidth ?? 0;

    if (axis === -1 && currentScroll < offset * 2) {
      offset = currentScroll;
    }

    if (axis === 1 && maxScroll - currentScroll < offset * 2) {
      offset = maxScroll - currentScroll;
    }

    content.scrollTo({
      left: currentScroll + axis * offset,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const content = contentRef.current;

    const currentScroll = content?.scrollLeft ?? 0;
    const maxScroll = content ? content.scrollWidth - content.clientWidth : 0;

    setLeftDisabled(currentScroll === 0);
    setRightDisabled(currentScroll === maxScroll);
  };

  return (
    <div className={styles.container}>
      <div className={styles.scrollButtonLeft}>
        <button onClick={() => scroll(-1)} disabled={leftDisabled}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>

      <div className={styles.scrollContent} ref={contentRef} onScroll={handleScroll}>
        {data.map(product => (
          <ProductCard data={product} key={product.id} />
        ))}
      </div>

      <div className={styles.scrollButtonRight}>
        <button onClick={() => scroll(+1)} disabled={rightDisabled}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default ProducsCarousel;
