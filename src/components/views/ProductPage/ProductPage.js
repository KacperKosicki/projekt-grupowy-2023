import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Reviews from '../../features/Reviews/Reviews';

const ProductPage = () => (
  <div className={styles.root}>
    <Reviews/>
    <NewFurniture productsPerPage={4} />
  </div>
);

// ProductPage.propTypes = {};

export default ProductPage;
