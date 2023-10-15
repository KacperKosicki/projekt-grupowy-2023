import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Reviews from '../../features/Reviews/Reviews';
import ProductDetails from '../../features/ProductDetails/ProductDetails';

const ProductPage = () => (
  <div className={styles.root}>
    <ProductDetails />
    <Reviews/>
    <NewFurniture productsPerPage={4} />
  </div>
);

<<<<<<< HEAD
=======
const ProductPage = () => {
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
                  <div className={styles.check}>
                    <div className={styles.ImageGalery}>
                      <div className={styles.photo}></div>
                      <div className={styles.photo}></div>
                      <div className={styles.photo}></div>
                      <div className={styles.photo}></div>
                    </div>
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
>>>>>>> 6547036 (Adjust draft)

// ProductPage.propTypes = {};

export default ProductPage;
