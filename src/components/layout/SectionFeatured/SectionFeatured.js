import React from 'react';
import styles from './SectionFeatured.module.scss';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import FeaturedCard from '../FeaturedCard/FeaturedCard';

const SectionFeatured = () => {
  return (
    <div className='container'>
      <div className={styles.featured}>
        <FeaturedCard />
        <FeaturedProduct />
      </div>
    </div>
  );
};

export default SectionFeatured;
