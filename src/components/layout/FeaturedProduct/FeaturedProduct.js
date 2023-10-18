import React from 'react';
import Button from '../../common/Button/Button';
import styles from './FeaturedProduct.module.scss';
import { useState } from 'react';
import { getProductsWithImages } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

const FeaturedProduct = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const products = useSelector(getProductsWithImages);
  const images = products.map(product => product.img);
  const [transition, setTransition] = useState(false);

  const previous = e => {
    e.preventDefault();
    setTransition(true);
    setTimeout(() => {
      setCurrentSlide((currentSlide - 1 + images.length) % images.length);
      setTransition(false);
    }, 500);
  };

  const next = e => {
    e.preventDefault();
    setTransition(true);
    setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
      setTransition(false);
    }, 500);
  };

  return (
    <div className={styles.featuredProduct}>
      <div
        className={clsx(styles.backgroundImage, transition ? styles.hidden : '')}
        style={{ backgroundImage: `url(${images[currentSlide]})` }}
      ></div>
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
