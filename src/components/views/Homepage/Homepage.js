import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Sales from '../../features/Sales/Sales';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Sales />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
