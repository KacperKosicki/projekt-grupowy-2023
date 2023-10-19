import React from 'react';
import styles from './ProductDetails.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={'row ' + styles.productContainer}>
          <div className='col-5 '>
            <div className={'row ' + styles.productGalery}>
              <div className='col-12'>
                <div className={styles.productImage}></div>
              </div>
              <div className='col-12'>
                <div className={styles.gallery}>
                  <div>
                    <div className={styles.ImageGalery}>
                      <div className={styles.photo}></div>
                      <div className={styles.photo}></div>
                      <div className={styles.photo}></div>
                      <div className={styles.photo}></div>
                    </div>
                  </div>
                  <div className={styles.arrowsContainer}>
                    <div className={styles.arrows}>
                      <Button variant='outlineLight'>
                        <FontAwesomeIcon icon={faChevronLeft}>Favorite</FontAwesomeIcon>
                      </Button>
                      <Button variant='outlineLight'>
                        <FontAwesomeIcon icon={faChevronRight}>
                          Favorite
                        </FontAwesomeIcon>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={'col-7 ' + styles.productDescription}>
            <div>
              <h1>Title</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
