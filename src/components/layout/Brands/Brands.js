import styles from './Brands.module.scss';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/brandsRedux';
import { getScreenMode } from '../../../redux/screenModeRedux';

const Brands = () => {
  const brands = useSelector(state => getAll(state));
  const screenMode = useSelector(state => getScreenMode(state));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesToDisplay, setImagesToDisplay] = useState([]);

  const [slidesPerPage, setSlidesPerPage] = useState(0);

  useEffect(() => {
    // Update the slidesPerPage based on screenMode
    if (screenMode === 'desktop') {
      setSlidesPerPage(6);
    } else if (screenMode === 'tablet') {
      setSlidesPerPage(3);
    } else if (screenMode === 'mobile') {
      setSlidesPerPage(2);
    }
  }, [screenMode]);

  // The number of slides to display at once
  const brandsCount = brands.length;

  // Function to move to the next "page" of slides
  const nextSlides = () => {
    setCurrentIndex((currentIndex + slidesPerPage) % brandsCount);
  };

  // Function to move to the previous "page" of slides
  const prevSlides = () => {
    let newIndex = currentIndex - slidesPerPage;
    if (newIndex < 0) {
      newIndex = brandsCount + newIndex;
    }
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Function to display images for the current "page"
    const displayImages = () => {
      const startIndex = currentIndex;
      const endIndex = (startIndex + slidesPerPage - 1) % brandsCount;

      let imagesToDisplay;

      if (startIndex <= endIndex) {
        // Case 1: startIndex is less than or equal to endIndex
        imagesToDisplay = brands.slice(startIndex, endIndex + 1);
      } else {
        // Case 2: startIndex is greater than endIndex, indicating a wrap-around
        const firstSlice = brands.slice(startIndex);
        const secondSlice = brands.slice(0, endIndex + 1);
        imagesToDisplay = [...firstSlice, ...secondSlice];
      }

      // Update the displayed images
      setImagesToDisplay(imagesToDisplay);
    };

    // Call the function to initially display the images
    displayImages();
  }, [currentIndex, brandsCount, brands, slidesPerPage]);
  return (
    <div className={styles.root}>
      <div className='container'>
        <hr className={styles.sectionDivider} />
        <div className={styles.slider}>
          <button className={styles.sliderButton} onClick={prevSlides}>
            {'<'}
          </button>
          {imagesToDisplay.map(brand => (
            <div key={brand.id} className={styles.imgContainer}>
              <img
                key={brand.id}
                className={styles.brandImg}
                src='dsds'
                alt={brand.name}
              />
            </div>
          ))}
          <button className={styles.sliderButton} onClick={nextSlides}>
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
