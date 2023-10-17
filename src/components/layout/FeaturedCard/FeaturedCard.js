import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductBox from '../../common/ProductBox/ProductBox';
import styles from './FeaturedCard.module.scss';
import { getDiscountedProducts } from '../../../redux/productsRedux';
import clsx from 'clsx';

const FeaturedCard = () => {
  const products = useSelector(getDiscountedProducts);
  const [currentProduct, setCurrentProduct] = useState(0);
  const [transition, setTransition] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  const isFeatured = true;

  const addTransition = () => {
    setTransition(true);
    setTimeout(() => {
      setTransition(false);
    }, 500);
  };

  const goToSlide = index => {
    setCurrentProduct(index);
    addTransition();
    setAutoplay(false);

    setTimeout(() => {
      setAutoplay(true);
    }, 10000);
  };

  useEffect(() => {
    const handleAutoplay = () => {
      if (autoplay) {
        setCurrentProduct((currentProduct + 1) % products.length);
        addTransition();
      }
    };

    const interval = setInterval(handleAutoplay, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentProduct, products.length, autoplay]);

  return (
    <div className={styles.featuredCard}>
      <div className={styles.deals}>
        <p>HOT DEALS</p>
        <div className={styles.dots}>
          <ul>
            {products.map((_, index) => (
              <li key={index}>
                <a
                  onClick={() => goToSlide(index)}
                  className={clsx({
                    [styles.active]: index === currentProduct,
                  })}
                >
                  {`page ${index + 1}`}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        {products.map((product, index) => (
          <div
            key={product.id}
            style={{ display: index === currentProduct ? 'block' : 'none' }}
            className={clsx(styles.productImage, transition ? styles.hidden : '')}
          >
            <ProductBox {...product} isFeatured={isFeatured} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCard;
