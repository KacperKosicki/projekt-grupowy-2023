import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const ProductPage = () => (
  <div className={styles.root}>
    <NewFurniture productsPerPage={4} />
  </div>
);

// ProductPage.propTypes = {};

export default ProductPage;
