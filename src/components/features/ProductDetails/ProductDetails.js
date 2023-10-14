import React from 'react';
import styles from './ProductDetails.module.scss';

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
                <div className={'row'}>
                  <div className='col-12'>
                    <div className={styles.ImageGalery}>
                      <div className={styles.photo}></div>
                      <div className={styles.photo}></div>
                      <div className={styles.photo}></div>
                      <div className={styles.photo}></div>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className={styles.arrows}>
                      <div>Arrow</div>
                      <div>Arrow</div>
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
