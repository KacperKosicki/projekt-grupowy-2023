import styles from './Brands.module.scss';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/brandsRedux';
import { getScreenMode } from '../../../redux/screenModeRedux';

const Brands = () => {
  const brands = useSelector(state => getAll(state));
  const screenMode = useSelector(state => getScreenMode(state));
  const [startPoint, setStartPoint] = useState(0);
  const [brandsToDisplay, setBrandsToDisplay] = useState([]);

  const [slidesPerPage, setSlidesPerPage] = useState(0);

  useEffect(() => {
    if (screenMode === 'desktop') {
      setSlidesPerPage(6);
    } else if (screenMode === 'tablet') {
      setSlidesPerPage(3);
    } else if (screenMode === 'mobile') {
      setSlidesPerPage(2);
    }
  }, [screenMode]);

  const brandsCount = brands.length;

  const handleNextSlideChange = () => {
    setStartPoint((startPoint + slidesPerPage) % brandsCount);
  };

  const handlePrevSlideChange = () => {
    let newPage = startPoint - slidesPerPage;
    if (newPage < 0) {
      newPage = brandsCount + newPage;
    }
    setStartPoint(newPage);
  };

  useEffect(() => {
    const calculateEndPoint = () => {
      const endPoint = (startPoint + slidesPerPage) % brandsCount;

      let brandsToDisplay;

      if (startPoint <= endPoint) {
        brandsToDisplay = brands.slice(startPoint, endPoint);
      } else {
        const firstSlice = brands.slice(startPoint);
        const secondSlice = brands.slice(0, endPoint);
        brandsToDisplay = [...firstSlice, ...secondSlice];
      }

      setBrandsToDisplay(brandsToDisplay);
    };

    calculateEndPoint();
  }, [startPoint, brandsCount, brands, slidesPerPage]);
  return (
    <div className={styles.root}>
      <div className='container'>
        <hr className={styles.sectionDivider} />
        <div className={styles.slider}>
          <button className={styles.sliderButton} onClick={handlePrevSlideChange}>
            {'<'}
          </button>
          {brandsToDisplay.map(brand => (
            <div key={brand.id} className={styles.imgContainer}>
              <img
                key={brand.id}
                className={styles.brandImg}
                src={brand.img}
                alt={brand.name}
              />
            </div>
          ))}
          <button className={styles.sliderButton} onClick={handleNextSlideChange}>
            {'>'}
          </button>
        </div>
        <hr className={styles.sectionDivider} />
      </div>
    </div>
  );
};

Brands.propTypes = {
  firstImg: PropTypes.number,
  lastImg: PropTypes.number,
  brands: PropTypes.array,
};

export default Brands;
