import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className={styles.banner_container}>
            <h1>Banner</h1>
          </div>
        </div>
      </div>
      <div className='row no-gutters'>
        <div className='col-md-9'>
          <div className={styles.productList_container}>
            <h1>Product List</h1>
          </div>
        </div>
        <div className='col-md-3'>
          <div className={styles.filters_container}>
            <h1>Filters</h1>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <div className={styles.brands_container}>
            <h1>Brands</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
