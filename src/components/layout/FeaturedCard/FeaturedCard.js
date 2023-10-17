import React from 'react';
import { useSelector } from 'react-redux';
import ProductBox from '../../common/ProductBox/ProductBox';
import styles from './FeaturedCard.module.scss';
import { getDiscountedProducts } from '../../../redux/productsRedux';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

const FeaturedCard = () => {
  const products = useSelector(getDiscountedProducts);
  const [currentProduct, setCurrentProduct] = useState(0);
  const [transition, setTransition] = useState(false);

  const isFeatured = true;

  const addTransition = () => {
    setTransition(true);
    setTimeout(() => {
      setTransition(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((currentProduct + 1) % products.length);
      addTransition();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentProduct, products.length]);

  return (
    <div className={styles.featuredCard}>
      <div className={styles.deals}>
        <p>HOT DEALS</p>
        <div className={styles.dots}>
          <ul>
            <li>
              <a className={styles.active}>page 1</a>
            </li>
            <li>
              <a>page 2</a>
            </li>
            <li>
              <a>page 3</a>
            </li>
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
