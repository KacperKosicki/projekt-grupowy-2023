import React from 'react';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.banner + ' col-12 '}>
          <div>
            <p className={styles.titleTop}>
              bedroom<span> furniture</span>
            </p>
          </div>
          <div>
            <p className={styles.titleBottom}>
              <span className={styles.always}>always </span>
              <span className={styles.span}>25% </span> off or more
            </p>
          </div>
        </div>
        <div className={styles.barBottom}>
          <p>
            Home <span className={styles.arrow}>&gt;</span>{' '}
            <span className={styles.bottomBarColor}>Furniture</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
