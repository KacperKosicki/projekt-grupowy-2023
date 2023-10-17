import React from 'react';
import Button from '../../common/Button/Button';
import styles from './FeaturedProduct.module.scss';
import { useState } from 'react';
import { getProductsWithImages } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';

const FeaturedProduct = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const products = useSelector(getProductsWithImages);
  const images = products.map(product => product.img);

  const previous = e => {
    e.preventDefault();
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  const next = e => {
    e.preventDefault();
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  return (
    <div
      className={styles.featuredProduct}
      style={{ backgroundImage: `url(${images[currentSlide]})` }}
    >
      <div className={styles.featuredProduct_inner}>
        <p>
          INDOOR <span>FURNITURE</span>
        </p>
        <p>SAVE UP TO 50% OF ALL FURNITURE</p>
        <Button variant='white' className={styles.button}>
          SHOP NOW
        </Button>
      </div>
      <div className={styles.featuredProduct_buttons}>
        <Button variant='wide' className={styles.longButton} onClick={previous}>
          {'<'}
        </Button>
        <Button variant='wide' className={styles.longButton} onClick={next}>
          {'>'}
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
