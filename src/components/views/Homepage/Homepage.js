import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Sales from '../../features/Sales/Sales';
import Brands from '../../layout/Brands/Brands';
import SectionFeatured from '../../layout/SectionFeatured/SectionFeatured';
import Banner from '../../layout/Banner/Banner';
import Feedback from '../../layout/Feedback/Feedback';
import Chatbot from '../../features/Chatbot/Chatbot';
import Blog from '../../layout/Blog/Blog';

const Homepage = () => (
  <div className={styles.root}>
    <Banner />
    <SectionFeatured />
    <FeatureBoxes />
    <Sales />
    <NewFurniture />
    <Blog />
    <Brands />
    <Feedback />
    <Chatbot />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
