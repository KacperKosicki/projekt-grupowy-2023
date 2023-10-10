import React from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import styles from './SectionFeatured.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Button from '../../common/Button/Button';

const SectionFeatured = () => {
  const products = useSelector(getAll);
  const exampleProduct = products[0];

  const isFeatured = true;

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.featured}>
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
            <ProductBox {...exampleProduct} isFeatured={isFeatured} />
          </div>
          <div className={styles.featuredProduct}>
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
              <Button>{'<'}</Button>
              <Button></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFeatured;
